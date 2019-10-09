import React from 'react'
import PropTypes from 'prop-types'
import TechnicalSkills from './skills/TechnicalSkills'
import About from './skills/About'
import Certifications from './skills/Certifications'
import './Skills.css'

const Skills = (props) => {

  const {skills} = props;

  return (
    <div className="skills">
      <div className="left-section">
        <TechnicalSkills skills={skills.technical} />
      </div>
      <div className="right-section">
        <About header={skills.about.header} description={skills.about.description} />
        <Certifications certifications={skills.certifications} />
      </div>
    </div>
  );
}

Skills.propTypes = {
  skills: PropTypes.object.isRequired
}

export default Skills
