import React, {Component} from 'react';
import emailjs from 'emailjs-com'
import serializeForm from 'form-serialize'
import './EmailForm.css'
//add EmailJS
emailjs.init("user_xiQS7FFl68ZPHFw4M1UDX");

class EmailForm extends Component {s
  handleSubmit = (event) => {
    event.preventDefault();
    const templateId = 'template_XGI2JP9e';
    const value = serializeForm(event.target, { hash: true });
    this.sendMessage(templateId, {from_name: value.name + ' ' +value.lastname, from_email: value.email, message: value.message});
  }

  render () {
    return (
      <div className='email'>
        <h2>Get in touch</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...</p>
        <form onSubmit={this.handleSubmit} className='email-form'>
          <div className='first-name'>
            <span> First name </span>
            <input type='text' name='name' required/>
          </div>
          <div className='last-name'>
            <span>Last name </span>
            <input type='text' name='lastname' required/>
          </div>
          <div className='email'>
            <span>email </span>
            <input type='email' name='email' placeholder='email' required/>
          </div>
          <div className='messageg'>
            <span>message </span>
            <textarea type="text" name='message' placeholder='message' required/>
          </div>
          <button>send</button>
        </form>
      </div>
  );
  }

  sendMessage (templateId, message) {
    emailjs.send('gmail', templateId, message);
  }
}

export default EmailForm
