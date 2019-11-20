import React from 'react'
import PropTypes from 'prop-types'
import './SkillsWithCertification.css'

/**
List of certifications & Licenses

certifications is an array of objects [{title: 'Front-End Web Developer Nanodegree Program', platform: 'udacity', link: '', dates: 'Issued Jun 2018 – No Expiration Date'},]
*/
const SkillsWithCertification = (props) => {

  const { title, skills } = props;

  return (
    <div className="skills-with-certifications">
      <h4>{title}</h4>
      {skills.map((skill, index)=>(
      <div key={index}>
        <a href={skill.link} target='_blank' rel="noopener noreferrer"><h5>{skill.title}</h5></a>
        <span className="platform">{skill.platform}</span>
        <span className="dates">{skill.dates}</span>
      </div>))}
    </div>
  );
}

SkillsWithCertification.propTypes = {
  title: PropTypes.string.isRequired,
  skills: PropTypes.array.isRequired
}

export default SkillsWithCertification
