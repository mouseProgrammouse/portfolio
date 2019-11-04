import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './LinkWithDescription.css'

const LinkWithDescription = (props) => {

  const { description, link } = props;

  return (
    <div className="link-to">
      <p>{description}</p>
      <Link to={link.to}>{link.text}</Link>
    </div>
  );
}

LinkWithDescription.propTypes = {
  description: PropTypes.string.isRequired,
  link: PropTypes.object.isRequired
}

export default LinkWithDescription
