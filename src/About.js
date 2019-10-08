import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './About.css'

const About = (props) => {
  const { header, description, links } = props;

  return (
    <div className="about">
      <h2>{header}</h2>
      <p className="description">{description}</p>
      <div className = "links"> {
        links.map((link, index) => (
          <Link key={index} className={link.className} to={link.link}>{link.linkTitle}</Link>
        ))
      }
      </div>
    </div>
  );
}

About.propTypes = {
  header: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  links: PropTypes.array.isRequired
}

export default About
