import React from 'react'
import PropTypes from 'prop-types'
import TechnicalSkills from './skills/TechnicalSkills'

const Skills = (props) => {

  const {skills} = props

  return (
    <div className="skills">
      <TechnicalSkills skills={skills.technical}/>
    </div>
  );
}

Skills.propTypes = {
  skills: PropTypes.object.isRequired
}

export default Skills
