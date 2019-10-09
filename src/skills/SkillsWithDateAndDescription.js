import React from 'react'
import PropTypes from 'prop-types'
import './SkillsWithDateAndDescription.css'

const SkillsWithDateAndDescription = ( props ) => {

  const {title, skills} = props;

  return (
    <div className="skills-with-date-and-description">
      <h4>{title}</h4>
      {skills.map((skill, index) => (
        <div className="skill" key={index}>
          <h5>{skill.title}</h5>
          <span className="date">{skill.date}</span>
          <p className="description">{skill.description}</p>
        </div>))}
    </div>
  );
}

SkillsWithDateAndDescription.propTypes = {
  title: PropTypes.string.isRequired,
  skills: PropTypes.array.isRequired
}

export default SkillsWithDateAndDescription
