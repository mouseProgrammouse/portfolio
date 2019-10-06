import React from 'react'
import PropTypes from 'prop-types'

const AsideHeader = (props) => {

  const { header } = props;

  return (
    <div className="main-header">
      <h1><span className="smaller">{header.part1}</span>{header.part2}</h1>
    </div>
  );
}

AsideHeader.propTypes = {
  header: PropTypes.object.isRequired
}

export default AsideHeader
