import React from 'react'
import PropTypes from 'prop-types'
import TechnicalSkills from './skills/TechnicalSkills'
import './Skills.css'

const Skills = (props) => {

  const {skills} = props

  return (
    <div className="skills">
      <div className="left-section">
        <TechnicalSkills skills={skills.technical}/>
      </div>
      <div className="right-section">
        OtherSkills
      </div>
    </div>
  );
}

Skills.propTypes = {
  skills: PropTypes.object.isRequired
}

export default Skills
