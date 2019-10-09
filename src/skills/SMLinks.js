import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import './SMLinks.css'

/**
Social media links

links is an array of objects [{description:'mouseProgrammouse', link: 'https://github.com/mouseProgrammouse', iconClass: 'fab', icon: 'github-alt', className: ''},..]
*/
const SMLinks = (props) => {

  const { title, links } = props;

  return (
    <div className="links">
      <h4>{title}</h4>
      <ul>{links.map( (link, index) => (
          <li key={index} className={link.className}>
            <Link className="link" to={link.link}>
              <span className="icon">
                <FontAwesomeIcon icon={[link.iconClass, link.icon]} />
              </span>
              <span className="description">{link.description}</span>
            </Link>
          </li>))}
      </ul>
    </div>
  );
}

SMLinks.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.array.isRequired
}

export default SMLinks;
