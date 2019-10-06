import React from 'react'
import PropTypes from 'prop-types'

const AsideHeader = (props) => {

  const { header } = props;

  return (
    <h1>{header}</h1>
  );
}

AsideHeader.propTypes = {
  header: PropTypes.string.isRequired
}

export default AsideHeader
