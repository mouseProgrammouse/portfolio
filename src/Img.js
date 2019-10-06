import React from 'react'
import PropTypes from 'prop-types'

const Img = (props) => {

  const { imgSrc, alt } = props;

  return (
      <img src={imgSrc} alt={alt}/>
  );
}

Img.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
}

export default Img
