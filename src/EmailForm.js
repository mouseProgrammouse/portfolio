import React, {Component} from 'react';
import emailjs from 'emailjs-com'
import serializeForm from 'form-serialize'
import PropTypes from 'prop-types'
import './EmailForm.css'

//add EmailJS
emailjs.init("user_xiQS7FFl68ZPHFw4M1UDX");

class EmailForm extends Component {

  constructor (props) {
    super(props);
    this.state = { flashMessage: 'Woohoo! Email successfully sent! ✨', className: 'success' }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const templateId = 'template_XGI2JP9e';
    const value = serializeForm(event.target, { hash: true });
    event.target.reset();
    this.sendMessage(templateId, {from_name: value.name + ' ' +value.lastname, from_email: value.email, message: value.message});
  }

  render () {
    return (
      <div className='email-form'>
        <div className={this.state.className + " flash-message"}>{this.state.flashMessage}</div>
        <h2>{ this.props.title }</h2>
        <p className="description">{ this.props.description }</p>
        <form onSubmit={this.handleSubmit} className='form'>
          <div className='first-name'>
            <label> First name </label>
            <input type='text' name='name' required/>
          </div>
          <div className='last-name'>
            <label>Last name </label>
            <input type='text' name='lastname' required/>
          </div>
          <div className='email'>
            <label>email </label>
            <input type='email' name='email' required/>
          </div>
          <div className='message'>
            <label>message </label>
            <textarea type="text" name='message' required/>
          </div>
          <button>send</button>
        </form>
      </div>
  );
  }

  sendMessage (templateId, message) {
    emailjs.send('gmail', templateId, message).then((response)=> {
      this.setState({flashMessage:'Woohoo! Email successfully sent! ✨', className:'success'});
      setTimeout(()=> this.setState({ flashMessage: '', className:'' }), 3000);
    }, (error)=>{
        this.setState({ flashMessage:'Oh well, you failed. Here some thoughts on the error that occured: '+error.text+' 😱', className:'error'});
        setTimeout(()=> this.setState({ flashMessage: '', className:'' }), 3000);
      });
  }
}

EmailForm.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string
}

export default EmailForm
