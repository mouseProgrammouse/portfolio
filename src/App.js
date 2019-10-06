import React, { Component } from 'react'
import { Route, withRouter} from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import MainMenu from './MainMenu'
import SocialAsideMenu from './SocialAsideMenu'
import './App.css'

//added all free  brand icon from FontAwesome
library.add(fab)

class App extends Component {
  state = {
    socialMediaItems: [],
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
          <SocialAsideMenu socialMediaItems = {this.state.socialMediaItems}/>
          <MainMenu activeLink = {this.props.location.pathname} menuItems = { this.state.topMenuItems }/>
          Main page
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
