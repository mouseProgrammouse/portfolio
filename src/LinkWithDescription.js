import React from 'react'
import PropTypes from 'prop-types'
import './LinkWithDescription.css'

const LinkWithDescription = (props) => {

  const { description, link } = props;

  return (
    <div className="link-to">
      <p>{description}</p>
      <a href={link.to}>{link.text}</a>
    </div>
  );
}

LinkWithDescription.propTypes = {
  description: PropTypes.string.isRequired,
  link: PropTypes.object.isRequired
}

export default LinkWithDescription
