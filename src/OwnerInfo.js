import React from 'react'
import MainInfo from './OwnerInfo/MainInfo'
import SocialInfo from './OwnerInfo/SocialInfo'
import PropTypes from 'prop-types'

const OwnerInfo = (props) => {

  const { mainInfo, smInfo } = props;

  return (
    <div className="owner-info">
      <MainInfo name={mainInfo.name} occupation={mainInfo.occupation}/>
      <SocialInfo />
    </div>
  );
}

OwnerInfo.propTypes = {
  mainInfo: PropTypes.object.isRequired,
  smInfo: PropTypes.array.isRequired
}

export default OwnerInfo
