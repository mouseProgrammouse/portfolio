import React from 'react'
import { Link } from 'react-router-dom'
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
            <Link to={item.link}>
              <FontAwesomeIcon icon={[item.iconClass, item.icon]} />
            </Link>
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
