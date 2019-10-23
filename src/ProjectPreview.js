import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import'./ProjectPreview.css'

/**
project:{
  header: 'Website for...',
  description: 'Lorem ipsum dolor sit amet...',
  links : [
    {className: 'button active', text: 'Life page', iconClass: '', icon: '', link: '#'},
    {className: 'icon', text: '', iconClass: 'fab', icon: 'github-alt', link: '#'},
    {className: 'icon', text: '', iconClass: 'fab', icon: 'behance', link: '#'}
  ]
}
*/
const ProjectPreview = (props) => {
  const { project, key } = props;

  return (
    <div className="project-previews">
        <div className="preview" key={key}>
          <div className="project-img">
            <img src={project.previewImg} alt={project.alt}/>
          </div>
          <div className="project-description">
            <h2>{project.header}</h2>
            <p>{project.description}</p>
            <div className="links">
              {project.links.map((link,index) => (
                <Link key={index} className={link.className} to={link.link}>
                {link.text || <FontAwesomeIcon icon={[link.iconClass, link.icon]} />}
                </Link>
              ))}
            </div>
          </div>
        </div>
    </div>
  )
}

ProjectPreview.propTypes = {
  projects: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired
}

export default ProjectPreview
