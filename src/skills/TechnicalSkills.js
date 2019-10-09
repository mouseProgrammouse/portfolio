import React from 'react'
import PropTypes from 'prop-types'
import './TechnicalSkills.css'

/**
Technical skills description

skills is an array of objects [{cat:'tools', description: 'Adobe Photoshop, Adobe Illustrator, Chrome DevTools, Figma'},]
*/
const TechnicalSkills = (props) => {

  const { skills } = props;

  return (
    <div className="technical">
      <h4>Technical skills</h4>
      { skills.map((item, index) => (
      <div className="skill" key={index}>
        <h5>{item.cat}</h5>
        <p className="description">{item.description}</p>
      </div>))}
    </div>
  );
}

TechnicalSkills.propTypes = {
  skills: PropTypes.array.isRequired
}

export default TechnicalSkills
