import React from 'react'
import MainInfo from './OwnerInfo/MainInfo'
import SocialInfo from './OwnerInfo/SocialInfo'

const OwnerInfo = () => {

  return (
    <div className="owner-info">
      About me
      <MainInfo />
      <SocialInfo />
    </div>
  );
}

export default OwnerInfo
