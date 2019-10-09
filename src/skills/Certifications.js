import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './Certifications.css'

/**
List of certifications & Licenses

certifications is an array of objects [{title: 'Front-End Web Developer Nanodegree Program', platform: 'udacity', link: '', dates: 'Issued Jun 2018 – No Expiration Date'},]
*/
const Certifications = (props) => {

  const { certifications } = props;

  return (
    <div className="certifications">
      <h4>Licenses & Certifications</h4>
      {certifications.map((certification, index)=>(
      <div key={index}>
        <Link to={certification.link}><h5>{certification.title}</h5></Link>
        <span className="platform">{certification.platform}</span>
        <span className="dates">{certification.dates}</span>
      </div>))}
    </div>
  );
}

Certifications.propTypes = {
  certifications: PropTypes.array.isRequired
}

export default Certifications
