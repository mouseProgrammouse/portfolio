import React from 'react'
import PropTypes from 'prop-types'

const MainInfo = (props) => {

  const { name, occupation} = props;

  return (
    <div className="main-info">
      <h2>{name}</h2>
      <span className="occupation">{occupation}</span>
    </div>
  );
}

MainInfo.propTypes = {
  name: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired
}

export default MainInfo
