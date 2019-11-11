import React from 'react'
import PropTypes from 'prop-types'
import './DownloadFile.css'

const DownloadFile = (props) => {

  const { description, src, fileName } = props;

  return (
    <div className="download">
      <p>{description}</p>
      <a href={src} download={fileName}>Download PDF</a>
    </div>);
}

DownloadFile.propTypes = {
  description: PropTypes.string,
  fileName: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired
}

export default DownloadFile
