import React from 'react'
import PropTypes from 'prop-types'

const DownloadFile = (props) => {

  const { description, src } = props;

  return (
    <div className="download">
      <p>{description}</p>
      <a href={src} download>Download</a>
    </div>);
}

DownloadFile.propTypes = {
  description: PropTypes.string,
  src: PropTypes.string.isRequired
}

export default DownloadFile
