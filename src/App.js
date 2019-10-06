import React, { Component } from 'react'
import { Route, withRouter} from 'react-router-dom'
import MainMenu from './MainMenu'
import './App.css'

class App extends Component {
  state = {
    menuItems: [{linkTitle: 'Home', link: '/'},
                {linkTitle: 'email me', link: '/get-in-touch'},
                {linkTitle: 'resume', link: '/resume'},
                {linkTitle: 'portfolio', link: '/portfolio'}]
  }

  render () {
    return (
      <div className = "app">
        <Route exact path = '/' render = { () => (
          <div className = "main-page">
          <MainMenu activeLink = {this.props.location.pathname} menuItems = { this.state.menuItems }/>
          Main page
          </div>
        )} />
        <Route exact path = '/get-in-touch' render = { () => (
          <div className = "get-in-touch">
          <MainMenu activeLink = {this.props.location.pathname} menuItems = { this.state.menuItems }/>
          Email me to '''mouse.programmouse@gmail.com'''
          </div>
        )} />
        <Route exact path = '/resume' render = { () => (
          <div className = "resume-page">
          <MainMenu activeLink = {this.props.location.pathname} menuItems = { this.state.menuItems }/>
          Resume page
          </div>
        )} />
        <Route exact path = '/portfolio' render = { () => (
          <div className = "portfolio-page">
          <MainMenu activeLink = {this.props.location.pathname} menuItems = { this.state.menuItems }/>
          My portfolio
          </div>
        )} />
      </div>
    );
  }
}

export default withRouter(App)
