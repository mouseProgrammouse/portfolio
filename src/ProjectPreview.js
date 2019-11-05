import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import'./ProjectPreview.css'

/**
project:{
  header: 'Website for...',
  technologies: 'React,...',
  description: 'Lorem ipsum dolor sit amet...',
  links : [
    {className: 'button active', text: 'Life page', iconClass: '', icon: '', link: '#'},
    {className: 'icon', text: '', iconClass: 'fab', icon: 'github-alt', link: '#'},
    {className: 'icon', text: '', iconClass: 'fab', icon: 'behance', link: '#'}
  ]
}
*/
const ProjectPreview = (props) => {
  const { project, index, amount } = props;

  return (
        <div className="preview" key={index}>
          <div className="counters">
            <span className="index">{(index<10)?'0'+index:index}</span><span className="amount">{(amount<10)?'/0'+amount:'/'+amount}</span>
          </div>
          <div className="project-img">
            <img src={project.previewImg} alt={project.alt}/>
          </div>
          <div className="project-description">
            <h2>{project.header}</h2>
            <p className="technologies">{project.technologies}</p>
            <p className="description">{project.description}</p>
            <div className="links">
              {project.links.map((link,index) => (
                <a key={index} className={link.className} href={link.link} target='_blank'>
                {link.text || <FontAwesomeIcon icon={[link.iconClass, link.icon]} />}
                </a>
              ))}
            </div>
          </div>
        </div>
  )
}

ProjectPreview.propTypes = {
  project: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  amount: PropTypes.number.isRequired
}

export default ProjectPreview
