import React from 'react'
import PropTypes from 'prop-types'

const Img = (props) => {

  const { imgSrc} = props;

  return (
      <div className="img"
      style={{backgroundImage: `url(${imgSrc})`}}>
      </div>
  );
}

Img.propTypes = {
  imgSrc: PropTypes.string.isRequired,
}

export default Img
