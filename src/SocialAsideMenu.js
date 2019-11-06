import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import './SocialAsideMenu.css'

/**
Social media aside menu

menuItems is an array of objects [{SM: 'GitHub', link: 'github...', iconClass: "fab" , icon: "github-alt", className: "selected"},...]
*/
const SocialAsideMenu = (props) => {

  const { socialMenuItems } = props;

  return (
    <aside className="social-media-menu">
      <ul>
        { socialMenuItems.map( (item, index) => (
          <li className={item.className} key={index}>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={[item.iconClass, item.icon]} />
            </a>
          </li>
            )
          )
        }
      </ul>
    </aside>
  );
}

SocialAsideMenu.propTypes = {
  socialMenuItems: PropTypes.array.isRequired
}

export default SocialAsideMenu
