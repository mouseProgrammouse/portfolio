import React from 'react'
import MainInfo from './info/MainInfo'
import SocialInfo from './info/SocialInfo'
import PropTypes from 'prop-types'
import './OwnerInfo.css'

const OwnerInfo = (props) => {

  const { mainInfo, smInfo } = props;

  return (
    <div className="owner-info">
      <MainInfo name={mainInfo.name} occupation={mainInfo.occupation}/>
      <SocialInfo smInfoItems= {smInfo}/>
    </div>
  );
}

OwnerInfo.propTypes = {
  mainInfo: PropTypes.object.isRequired,
  smInfo: PropTypes.array.isRequired
}

export default OwnerInfo
