import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import './MainMenu.css'

/**
  Top menu component

  menuItems is an array of objects [{linkTitle: 'Home', link: '/'},...]
*/

class MainMenu extends Component {

  constructor( props ) {
    super(props);
    this.state = { menu : "show" };
  }

  showMenu (e) {
    e.preventDefault();
    this.setState({
      menu: "show"
    });
  }

  hideMenu (e) {
    e.preventDefault();
    this.setState({
      menu: "hide"
    });
  }

  resize() {
    //if tablet (<=880px)
    if (window.innerWidth <= 880)
      this.setState({
          menu: "hide"
        });
    else
      this.setState({
        menu: "show"
      });
  }

  componentDidMount() {
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  render () {

    const { activeLink, menuItems } = this.props;

    return (
      <nav className="main-menu">
        <Link className={(this.state.menu === "show" )?"hamburger hide":"hamburger"} to="#"><FontAwesomeIcon icon={["fas","bars"]} onClick={(e) => this.showMenu(e)}/></Link>
        <ul className={this.state.menu}>
          <li className="exit">
            <Link to="#"><FontAwesomeIcon icon={["fas", "times"]} onClick={(e) => this.hideMenu(e)}/></Link>
          </li>
          { menuItems.map((menuItem, index) => (
                    <li key={index}>
                      <Link className={(menuItem.link === activeLink)?"active":""}
                            to={menuItem.link}>{menuItem.linkTitle}
                      </Link>
                    </li>
                  )
                ) }
        </ul>
      </nav>
    );
  }
}

MainMenu.propTypes = {
  activeLink: PropTypes.string.isRequired,
  menuItems: PropTypes.array.isRequired
}

export default MainMenu;
