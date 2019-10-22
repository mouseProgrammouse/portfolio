import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import'./ProjectPreview.css'

/**
project: [{header: 'Website for knitting studio', description: 'I created a landing page for a tiny knitting studio in a Ukrainian city. I implemented pretty much everything: design, CSS, coding, buying a domain and even deploying (AWS). Project on GitHub and Behance.',
previewImg: projectStudioImg,
links : [
  {className: 'button active', text: 'Life page', iconClass: '', icon: '', link: '#'},
  {className: 'icon', text: '', iconClass: 'fab', icon: 'github-alt', link: '#'},
  {className: 'icon', text: '', iconClass: 'fab', icon: 'behance', link: '#'}
]
}]
*/
const ProjectPreview = (props) => {
  const { projects } = props;

  return (
    <div className="project-previews">
      {projects.map((project, index) => (
        <div className="preview" key={index}>
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
      ))}
    </div>
  )
}

ProjectPreview.propTypes = {
  projects: PropTypes.array.isRequired
}

export default ProjectPreview
