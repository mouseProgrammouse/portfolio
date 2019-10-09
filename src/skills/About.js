import React from 'react'
import PropTypes from 'prop-types'
import './About.css'

const About = (prop) => {

  const { header, description } = prop;

  return (
    <div className="about-resume">
      <h4>{header}</h4>
      <p className="description">{description}</p>
    </div>
  );
}

About.propTypes = {
  header: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default About
