import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const LinkWithDescription = (props) => {

  const { description, link } = props;

  return (
    <div className="link-to">
      <p>{description}</p>
      <Link to="#">{link.text}</Link>
    </div>
  );
}

const LinkWithDescription.propTypes = {
  description: PropTypes.string.isRequired,
  link: PropTypes.array.isRequired
}

export default LinkWithDescription
