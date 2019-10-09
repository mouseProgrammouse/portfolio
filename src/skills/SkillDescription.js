import React from 'react'
import PropTypes from 'prop-types'
import './SkillDescription.css'

const SkillDescription = (props) => {

  const { title, description } = props;

  return (
    <div className="skill-with-description">
      <h4>{title}</h4>
      <p className="description">{description}</p>
    </div>
  );
}

SkillDescription.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default SkillDescription;
