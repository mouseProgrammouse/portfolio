import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import './SocialInfo.css'

/**
Social Info

smInfo is an array of objects {description: 'https://www.linkedin.com/in/alena-timofeeva/', link: 'https://www.linkedin.com/in/alena-timofeeva/', iconClass: 'fab', icon: 'linkedin', className : "active"},
*/
const SocialInfo = (props) => {

  const {smInfoItems} = props;

  return (
    <div className="social-info">
      <ul>{
        smInfoItems.map( (item, index) => (
          <li key={index} className={item.className}>
            {item.description}
            {(item.link)?
              (<a href={item.link} target='_blank'>
                  <span className="icon">
                    <FontAwesomeIcon icon={[item.iconClass, item.icon]} />
                  </span>
                </a>):
              (<span className="icon">
                <FontAwesomeIcon icon={[item.iconClass, item.icon]} />
              </span>)}
          </li>))
      }
      </ul>
    </div>
  );
}

SocialInfo.propTypes = {
  smInfoItems: PropTypes.array.isRequired
}

export default SocialInfo
