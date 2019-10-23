import React from 'react'
import ProjectPreview from './ProjectPreview.js'

const ProjectsSlideShow = (props) => {

  const { projects } = props;

  return (
    <div className="projects-slide-show">
      {projects.map((project, index) => (
        <ProjectPreview project={project} key={index} />
      ))}
    </div>
  );
}

export default ProjectsSlideShow
