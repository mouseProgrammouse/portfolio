import React from 'react'
import { Link } from 'react-router-dom'
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
              (<Link to={item.link}>
                  <span className="icon">
                    <FontAwesomeIcon icon={[item.iconClass, item.icon]} />
                  </span>
                </Link>):
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
