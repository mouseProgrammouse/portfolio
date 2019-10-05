import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './MainMenu.css'

/**
  Top menu component

  menuItems is an array of objects [{linkTitle: 'Home', link: '/'},...]
*/

const MainMenu = (props) => {

  const { menuItems } = props;

  return (
    <nav className="main-menu">
      <ul>
        { menuItems.map((menuItem) => (
                  <li><Link to={menuItem.link}>{ menuItem.linkTitle }</Link></li>
                )
              ) }
      </ul>
    </nav>
  );
}

MainMenu.propTypes = {
  menuItems: PropTypes.array.isRequired
}

export default MainMenu
