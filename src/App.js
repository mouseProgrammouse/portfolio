import React, { Component } from 'react'
import { Route, withRouter} from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import MainMenu from './MainMenu'
import SocialAsideMenu from './SocialAsideMenu'
import AsideHeader from './AsideHeader'
import Img from './Img'
import mainImg from './img/main-img.png'
import OwnerInfo from './OwnerInfo'
import About from './About'
import './App.css'

//add all free brands' icons from FontAwesome learn more https://github.com/FortAwesome/react-fontawesome
library.add(fab, fas)

class App extends Component {
  state = {
    mainPage: {
      header: {part1: "alenaTimofeeva.", part2: "About;" },
      content: {header: "Hello, I’m Alena Timofeeva",
                description: "I am a Front-End Developer from Bay Area, California. I create responsive web apps with cutting edge HTML & CSS features, modern JavaScript, and beautiful design. I am proficient in Photoshop & Illustrator. "},
      links: [{linkTitle: 'LinkedIn', link: 'https://www.linkedin.com/in/alena-timofeeva/', className : "selected"},
              {linkTitle: 'Portfolio', link: '/portfolio', className : ""}]
    },
    resumePage: {
      mainInfo: {name: 'Alena Timofeeva', occupation: 'front-end developer'},
      smInfo: [{description: 'alyona.tymofieieva@gmail.com', link: '', iconClass: 'fas', icon: 'envelope-open', className : ""},
              {description: 'https://www.linkedin.com/in/alena-timofeeva/', link: 'https://www.linkedin.com/in/alena-timofeeva/', iconClass: 'fab', icon: 'linkedin', className : "active"},
              {description: 'Santa Clara, California', link: '', iconClass: 'fas', icon: 'map-marker', className : ""},]
    },
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
            <AsideHeader header = {this.state.mainPage.header} />
            <Img imgSrc={mainImg} alt="some alt text"/>
            <div className="content">
              <MainMenu activeLink = {this.props.location.pathname} menuItems = { this.state.topMenuItems }/>
              <About header={this.state.mainPage.content.header} description={this.state.mainPage.content.description} links={this.state.mainPage.links}/>
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
            <SocialAsideMenu socialMenuItems = {this.state.socialMenuItems}/>
            <AsideHeader header = {this.state.mainPage.header} />
            <MainMenu activeLink = {this.props.location.pathname} menuItems = { this.state.topMenuItems }/>
            <OwnerInfo mainInfo = {this.state.resumePage.mainInfo} smInfo = {this.state.resumePage.smInfo}/>
            <span className="decoration">;</span>
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
