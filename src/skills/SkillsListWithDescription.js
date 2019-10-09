import React from 'react'
import PropTypes from 'prop-types'
import './SkillsListWithDescription.css'

/**
Technical skills description

skills is an array of objects [{cat:'tools', description: 'Adobe Photoshop, Adobe Illustrator, Chrome DevTools, Figma'},]
*/
const SkillsListWithDescription = (props) => {

  const { title, skills } = props;

  return (
    <div className="skills-with-description">
      <h4>{title}</h4>
      { skills.map((skill, index) => (
      <div className="skill" key={index}>
        <h5>{skill.cat}</h5>
        <p className="description">{skill.description}</p>
      </div>))}
    </div>
  );
}

SkillsListWithDescription.propTypes = {
  title: PropTypes.string.isRequired,
  skills: PropTypes.array.isRequired
}

export default SkillsListWithDescription
