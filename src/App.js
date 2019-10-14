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
import MainDescription from './MainDescription'
import Skills from './Skills'
import EmailForm from './EmailForm'
import './App.css'

//add all free brands' icons from FontAwesome learn more https://github.com/FortAwesome/react-fontawesome
library.add(fab, fas)

const data = {
  mainPage: {
    header: {part1: 'alenaTimofeeva.', part2: 'About;'},
    content: {header: 'Hello, I’m Alena Timofeeva',
              description: 'I am a Front-End Developer from Bay Area, California. I create responsive web apps with cutting edge HTML & CSS features, modern JavaScript, and beautiful design. I am proficient in Photoshop & Illustrator.'},
    links: [{linkTitle: 'LinkedIn', link: 'https://www.linkedin.com/in/alena-timofeeva/', className : 'selected'},
            {linkTitle: 'Portfolio', link: '/portfolio', className : ''}]
  },
  getInTouch: {
    header: {part1: 'alenaTimofeeva.', part2: 'EmailMe;'},
    title: 'Get in touch',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...'
  },
  portfolioPage: {
    header: {part1: 'alenaTimofeeva.', part2: 'Portfolio;'},
  },
  resumePage: {
    header: {part1: 'alenaTimofeeva.', part2: 'Resume;'},
    mainInfo: {name: 'Alena Timofeeva', occupation: 'front-end developer'},
    smInfo: [{description: 'alyona.tymofieieva@gmail.com', link: '', iconClass: 'fas', icon: 'envelope-open', className : ""},
            {description: 'https://www.linkedin.com/in/alena-timofeeva/', link: 'https://www.linkedin.com/in/alena-timofeeva/', iconClass: 'fab', icon: 'linkedin', className : "active"},
            {description: 'Bay Area, California', link: '', iconClass: 'fas', icon: 'map-marker', className : ""},],
    skills: {
      technical: [{cat:'Front-End', description: 'HTML5, CSS3, Bootstrap, JavaScript, ECMAScript 6, jQuery, React'},
                  {cat:'tools', description: 'Adobe Photoshop, Adobe Illustrator, Chrome DevTools, Figma'},
                  {cat:'other', description: 'Command line & Git, SQL (ANSI-92), Atlassian Jira, TFS'},
                  {cat:'Concepts', description: 'Restful API, MVC, SEO, UX, Responsive Web Design, Debugging, Testing, DOM, Agile & Scrum'}],
      about: {header: 'About', description: 'I am a Front-End Developer from Bay Area, California. I create responsive web apps with cutting edge HTML & CSS features, modern JavaScript, and beautiful design. I am proficient in Photoshop & Illustrator. In my free time, I like to make ceramics and take stunning landscape photos.'},
      certifications: [{title: 'Front-End Web Developer Nanodegree Program', platform: 'udacity', link: '#', dates: 'Issued Jun 2018 – No Expiration Date'},
                      {title: 'web design Intensive course', platform: 'wdi.design', link: '#', dates: 'Issued nov 2018 – No Expiration Date'},
                      {title: 'CSS: Animation', platform: 'LinkedIn Learning (Lynda)', link: '#', dates: 'Issued Apr 2019 – No Expiration Date'},
                      {title: 'CSS: transforms and transitions', platform: 'LinkedIn Learning (Lynda)', link: '#', dates: 'Issued Apr 2019 – No Expiration Date'},
                      {title: 'introduction to search engine optimization', platform: 'coursera', link: '#', dates: 'Issued dec 2019 – No Expiration Date'},
                      {title: 'Search engine optimization fundamentals', platform: 'coursera', link: '#', dates: 'Issued jan 2019 – No Expiration Date'},
                      {title: 'CS50: CS50’s introduction to computer science', platform: 'edX', link: '#', dates: 'Issued feb 2018 – No Expiration Date'}],
      languages:  [{title: 'Russian', level: 'native'},
                  {title: 'English', level: 'Upper intermediate'},
                  {title: 'Ukrainian', level: 'Basic'}],
      softSkills:  [{title: 'Atention to details.', level: ''},
                    {title: 'Web application testing experience.', level: ''},
                    {title: 'Creativity.', level: ''}],
      education: [{title: 'itmo university', date: '', description: 'Bachelor’s degree, Computer Science (2008 – 2013)'}],
      experience: [{title: 'Freelance \\ front-end developer', date: 'November 2017 – March 2018', description: ''},
                  {title: 'Firstline software \\ test engineer', date: 'December 2013 – October 2015', description: 'I was testing various web-based apps. A part of my duties was to create automated tools for testing and environment preparations.'},
                {title: 'korus consulting \\ junior test engineer', date: 'August 2013 – december 2015', description: 'I was testing web-based medical records system with SQL and Document-oriented databases as storages.'}],
      links: [{description:'mouseProgrammouse', link: 'https://github.com/mouseProgrammouse', iconClass: 'fab', icon: 'github-alt', className: ''},
              {description:'alena.dev', link: 'alena.dev', iconClass: 'fas', icon: 'link', className: ''},
              {description:'Alena Timofeeva', link: 'https://www.linkedin.com/in/alena-timofeeva/', iconClass: 'fab', icon: 'linkedin', className: 'active'},
              {description:'programmouse', link: 'https://www.behance.net/programmouse', iconClass: 'fab', icon: 'behance', className: ''},],
      extra: {description: 'drawing, lettering, ceramic, photography'}
    }
  },
  socialMenuItems: [
    {SM: 'GitHub', link: 'https://github.com/mouseProgrammouse', iconClass: 'fab' , icon: 'github-alt', className : ''},
    {SM: 'LinkedIn', link: 'https://www.linkedin.com/in/alena-timofeeva/', iconClass: 'fab' , icon: 'linkedin', className : 'selected'},
    {SM: 'LinkedIn', link: 'https://www.behance.net/programmouse', iconClass: 'fab' , icon: 'behance', className : ''}],
  topMenuItems: [{linkTitle: 'Home', link: '/'},
              {linkTitle: 'email me', link: '/get-in-touch'},
              {linkTitle: 'resume', link: '/resume'},
              {linkTitle: 'portfolio', link: '/portfolio'}]
};

class App extends Component {

  render () {
    return (
      <div className = "app">
        <Route exact path = '/' render = { () => (
          <div className = "main-page">
            <SocialAsideMenu socialMenuItems = {data.socialMenuItems}/>
            <AsideHeader header = {data.mainPage.header} />
            <Img imgSrc={mainImg} alt="some alt text"/>
            <div className="content">
              <MainMenu activeLink = {this.props.location.pathname} menuItems = { data.topMenuItems }/>
              <MainDescription header={data.mainPage.content.header} description={data.mainPage.content.description} links={data.mainPage.links}/>
            </div>
            <span className="decoration">;</span>
          </div>
        )} />
        <Route exact path = '/get-in-touch' render = { () => (
          <div className = "get-in-touch">
            <SocialAsideMenu socialMenuItems = {data.socialMenuItems}/>
            <AsideHeader header = {data.getInTouch.header} />
            <MainMenu activeLink = {this.props.location.pathname} menuItems = { data.topMenuItems }/>
            <EmailForm title = {data.getInTouch.title} description={data.getInTouch.description}/>
            <span className="decoration">;</span>
          </div>
        )} />
        <Route exact path = '/resume' render = { () => (
          <div className = "resume-page">
            <SocialAsideMenu socialMenuItems = {data.socialMenuItems}/>
            <AsideHeader header = {data.resumePage.header} />
            <MainMenu activeLink = {this.props.location.pathname} menuItems = { data.topMenuItems }/>
            <OwnerInfo mainInfo = {data.resumePage.mainInfo} smInfo = {data.resumePage.smInfo}/>
            <Skills skills={data.resumePage.skills}/>
            <span className="decoration">;</span>
          </div>
        )} />
        <Route exact path = '/portfolio' render = { () => (
          <div className = "portfolio-page">
          <SocialAsideMenu socialMenuItems = {data.socialMenuItems}/>
          <AsideHeader header = {data.portfolioPage.header} />
          <MainMenu activeLink = {this.props.location.pathname} menuItems = { data.topMenuItems }/>
          My portfolio
          </div>
        )} />
      </div>
    );
  }
}

export default withRouter(App)
