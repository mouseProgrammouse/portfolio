import React from 'react'
import PropTypes from 'prop-types'
import './MainDescription.css'

const MainDescription = (props) => {
  const { header, description, links } = props;

  return (
    <div className="main-description">
      <h2>{header}</h2>
      <p className="description">{description}</p>
      <div className = "links"> {
        links.map((link, index) => (
          <a key={index} className={link.className} href={link.link}>{link.linkTitle}</a>
        ))
      }
      </div>
    </div>
  );
}

MainDescription.propTypes = {
  header: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  links: PropTypes.array.isRequired
}

export default MainDescription
