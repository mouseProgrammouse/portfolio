import React, { Component } from 'react'
import { Route } from 'react-router-dom'
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
      <div className = 'app'>
        <Route exact path = '/' render = { () => (
          <main className = 'main-page'>
          <MainMenu menuItems = { this.state.menuItems }/>
          Main page
          </main>
        )} />
        <Route exact path = '/get-in-touch' render = { () => (
          <main className = 'get-in-touch'>
          <MainMenu menuItems = { this.state.menuItems }/>
          Email me to '''mouse.programmouse@gmail.com'''
          </main>
        )} />
        <Route exact path = '/resume' render = { () => (
          <main className = 'resume-page'>
          <MainMenu menuItems = { this.state.menuItems }/>
          Resume page
          </main>
        )} />
        <Route exact path = '/portfolio' render = { () => (
          <main className = 'portfolio-page'>
          <MainMenu menuItems = { this.state.menuItems }/>
          My portfolio
          </main>
        )} />
      </div>
    );
  }
}

export default App
