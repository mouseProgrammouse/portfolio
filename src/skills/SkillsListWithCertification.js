import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './SkillsListWithCertification.css'

/**
List of certifications & Licenses

certifications is an array of objects [{title: 'Front-End Web Developer Nanodegree Program', platform: 'udacity', link: '', dates: 'Issued Jun 2018 – No Expiration Date'},]
*/
const SkillsListWithCertification = (props) => {

  const { title, skills } = props;

  return (
    <div className="skills-with-certifications">
      <h4>{title}</h4>
      {skills.map((skill, index)=>(
      <div key={index}>
        <Link to={skill.link}><h5>{skill.title}</h5></Link>
        <span className="platform">{skill.platform}</span>
        <span className="dates">{skill.dates}</span>
      </div>))}
    </div>
  );
}

SkillsListWithCertification.propTypes = {
  title: PropTypes.string.isRequired,
  skills: PropTypes.array.isRequired
}

export default SkillsListWithCertification
