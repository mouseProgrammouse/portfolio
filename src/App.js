import React, { Component } from 'react'
import { Route, withRouter} from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import MainMenu from './MainMenu'
import SocialAsideMenu from './SocialAsideMenu'
import AsideHeader from './AsideHeader'
import Img from './Img'
import mainImg from './img/main-img.png'
import './App.css'

//add all free brands' icons from FontAwesome learn more https://github.com/FortAwesome/react-fontawesome
library.add(fab)

class App extends Component {
  state = {
    mainHeaders: {
      mainPage: {part1: "alenaTimofeeva.", part2: "About;" }},
    socialMenuItems: [
      {SM: 'GitHub', link: 'https://github.com/mouseProgrammouse', iconClass: "fab" , icon: "github-alt", className : ""},
      {SM: 'LinkedIn', link: 'https://www.linkedin.com/in/alena-timofeeva/', iconClass: "fab" , icon: "linkedin", className : "selected"},
      {SM: 'LinkedIn', link: 'https://www.behance.net/programmouse', iconClass: "fab" , icon: "behance", className : ""}],
    topMenuItems: [{linkTitle: 'Home', link: '/'},
                {linkTitle: 'email me', link: '/get-in-touch'},
                {linkTitle: 'resume', link: '/resume'},
                {linkTitle: 'portfolio', link: '/portfolio'}]
  }

  render () {
    return (
      <div className = "app">
        <Route exact path = '/' render = { () => (
          <div className = "main-page">
            <SocialAsideMenu socialMenuItems = {this.state.socialMenuItems}/>
            <AsideHeader header = {this.state.mainHeaders.mainPage} />
            <Img imgSrc={mainImg} alt="some alt text"/>
            <div className="content">
              <MainMenu activeLink = {this.props.location.pathname} menuItems = { this.state.topMenuItems }/>
              <p className="about">
              I am a Front-End Developer from Bay Area, California. I create responsive web apps with cutting edge HTML & CSS features, modern JavaScript, and beautiful design.
              I am proficient in Photoshop & Illustrator.
              </p>
            </div>
            <span className="decoration">;</span>
          </div>
        )} />
        <Route exact path = '/get-in-touch' render = { () => (
          <div className = "get-in-touch">
          <MainMenu activeLink = {this.props.location.pathname} menuItems = { this.state.topMenuItems }/>
          Email me to '''mouse.programmouse@gmail.com'''
          </div>
        )} />
        <Route exact path = '/resume' render = { () => (
          <div className = "resume-page">
          <MainMenu activeLink = {this.props.location.pathname} menuItems = { this.state.topMenuItems }/>
          Resume page
          </div>
        )} />
        <Route exact path = '/portfolio' render = { () => (
          <div className = "portfolio-page">
          <MainMenu activeLink = {this.props.location.pathname} menuItems = { this.state.topMenuItems }/>
          My portfolio
          </div>
        )} />
      </div>
    );
  }
}

export default withRouter(App)
