import React from 'react'
import ProjectPreview from './ProjectPreview.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import './ProjectsSlideShow.css'

const ProjectsSlideShow = (props) => {

  const { projects } = props;

  return (
    <div className="projects-slideshow-container">
      {projects.map((project, index) => (
        <ProjectPreview project={project} index={index+1} amount={9} key={index}/>
      ))}
      <div className="switchers">
        <a className="icon prev"><FontAwesomeIcon icon={'fas', 'caret-left'} /></a>
        <a className="icon next"><FontAwesomeIcon icon={'fas', 'caret-right'} /></a>
      </div>
    </div>
  );
}

ProjectsSlideShow.propTypes = {
  projects: PropTypes.array.isRequired
}

export default ProjectsSlideShow
