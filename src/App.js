import React, { Component } from 'react'
import { Route, withRouter } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import MainMenu from './MainMenu'
import SocialAsideMenu from './SocialAsideMenu'
import AsideHeader from './AsideHeader'
import Img from './Img'
import mainImg from './img/main-img.png'
import projectResumeImg from './img/project_resume.png'
import projectStudioImg from './img/project_studio.png'
import projectHiking from './img/project_hiking.png'
import OwnerInfo from './OwnerInfo'
import MainDescription from './MainDescription'
import Skills from './Skills'
import EmailForm from './EmailForm'
import ProjectsSlideShow from './ProjectsSlideShow'
import LinkWithDescription from './LinkWithDescription'
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
    projects: [{header: 'Knitting studio', technologies: 'UX/UI, Photoshop, Figma, Illustrator, CSS, HTML, jQuery, Google Maps API, Analytics, SEO, AWS, hosting', description: 'Multilanguage website for the tiny knitting studio in the heart of Ukraine. Inspiration for the design came from the day-to-day work of the studio.',
    previewImg: projectStudioImg,
    alt: '',
    links : [
      {className: 'button active', text: 'Live page', iconClass: '', icon: '', link: 'http://trikotag.ck.ua/'},
      {className: 'icon', text: '', iconClass: 'fab', icon: 'github-alt', link: 'https://github.com/mouseProgrammouse/studioTatiana'},
      {className: 'icon', text: '', iconClass: 'fab', icon: 'behance', link: 'https://www.behance.net/gallery/81159923/Landing-page-for-a-knitting-studio'}
    ]
   },
   {header: 'Hiking in Ireland', technologies: 'UX/UI, Photoshop, Figma', description: 'The design inspired by the natural attractions of Ireland.  With my design, I wanted to inspire people to visit such a beautiful country.',
   previewImg: projectHiking,
   alt: '',
   links : [
     {className: 'icon', text: '', iconClass: 'fab', icon: 'behance', link: 'https://www.behance.net/gallery/81319035/Discover-Ireland'}
   ]
 },
 {header: 'Personal portfolio', technologies: ' UX/UI, Photoshop, Figma, CSS3, CSS Animation,  HTML5, React, Analytics, AWS, hosting, emailJS', description: 'For my portfolio, I chose a clean and elegant design. I wanted to make the template simple to highlight my works. The main inspiration came from JS syntax.',
 previewImg: projectResumeImg,
 alt: '',
 links : [
   {className: 'button active', text: 'Live page', iconClass: '', icon: '', link: 'https://alena.dev'},
   {className: 'icon', text: '', iconClass: 'fab', icon: 'github-alt', link: 'https://github.com/mouseProgrammouse/portfolio'}
 ]
 }]
  },
  resumePage: {
    header: {part1: 'alenaTimofeeva.', part2: 'Resume;'},
    mainInfo: {name: 'Alena Timofeeva', occupation: 'front-end developer'},
    smInfo: [{description: 'alyona.tymofieieva@gmail.com', link: '', iconClass: 'fas', icon: 'envelope-open', className : ""},
            {description: 'linkedin.com/in/alena-timofeeva', link: 'https://www.linkedin.com/in/alena-timofeeva/', iconClass: 'fab', icon: 'linkedin', className : "active"},
            {description: 'Bay Area, California', link: '', iconClass: 'fas', icon: 'map-marker', className : ""},],
    skills: {
      technical: [{cat:'Front-End', description: 'HTML5, CSS3, Bootstrap, JavaScript, ECMAScript 6, jQuery, Vue, React'},
                  {cat:'tools', description: 'Adobe Photoshop, Adobe Illustrator, Chrome DevTools, Figma'},
                  {cat:'Concepts', description: 'Restful API, MVC, SEO, UX, Responsive Web Design, Debugging, Testing, DOM, Agile & Scrum'},
                  {cat:'other', description: 'Command line & Git, SQL (ANSI-92), Atlassian Jira, TFS, Trello, AWS(EC2, S3, Route53)'}],
      about: {header: 'Summary', description: 'I’m a self-taught front-end developer. Build site layouts and UI using modern HTML, CSS,  JS, jQuery, and MVC framework React. Experience with consuming different types of web services, REST APIs and JSON. I’m results-oriented. Leverage testing skills, sense of style and strong attention to detail in order to deliver high-quality web apps. Want to work in a dynamic, fast-paced, startup environment.'},
      certifications: [{title: 'Front-End Web Developer Nanodegree Program', platform: 'udacity', link: 'https://confirm.udacity.com/TRDUDAKY', dates: 'Issued Jun 2018 – No Expiration Date'},
                      {title: 'web design Intensive course', platform: 'wdi.design', link: '#', dates: 'Issued nov 2018 – No Expiration Date'},
                      {title: 'CSS: Animation', platform: 'LinkedIn Learning (Lynda)', link: '#', dates: 'Issued Apr 2019 – No Expiration Date'},
                      {title: 'CSS: transforms and transitions', platform: 'LinkedIn Learning (Lynda)', link: '#', dates: 'Issued Apr 2019 – No Expiration Date'},
                      {title: 'Introduction to search engine optimization', platform: 'coursera', link: 'https://www.coursera.org/account/accomplishments/certificate/SH4MVVEMC464?utm_medium=certificate&utm_source=link&utm_campaign=copybutton_certificate', dates: 'Issued dec 2019 – No Expiration Date'},
                      {title: 'Search engine optimization fundamentals', platform: 'coursera', link: 'https://www.coursera.org/account/accomplishments/certificate/GZWD4SN2BPH6?utm_medium=certificate&utm_source=link&utm_campaign=copybutton_certificate', dates: 'Issued jan 2019 – No Expiration Date'},
                      {title: 'CS50: CS50’s introduction to computer science', platform: 'edX', link: 'https://courses.edx.org/certificates/022376d0ce8144fba4f3196335a0040a', dates: 'Issued feb 2018 – No Expiration Date'}],
      languages:  [{title: 'Russian', level: 'native'},
                  {title: 'English', level: 'Upper intermediate'},
                  {title: 'Ukrainian', level: 'Basic'}],
      softSkills:  [{title: 'Atention to details', level: ''},
                    {title: 'Web application testing experience', level: ''},
                    {title: 'Creativity', level: ''}],
      education: [{title: 'itmo university', date: '', description: 'Bachelor’s degree, Computer Science (2008 – 2013)'}],
      experience: [{title: 'front-end developer \\ Freelance', date: 'November 2017 – March 2018', description: ''},
                  {title: 'test engineer \\ Firstline software', date: 'December 2013 – October 2015', description: 'I was testing various web-based apps. A part of my duties was to create automated tools for testing and environment preparations.'},
                {title: 'junior test engineer \\ korus consulting', date: 'August 2013 – december 2015', description: 'I was testing web-based medical records system with SQL and Document-oriented databases as storages.'}],
      links: [{description:'mouseProgrammouse', link: 'https://github.com/mouseProgrammouse', iconClass: 'fab', icon: 'github-alt', className: ''},
              {description:'alena.dev', link: 'https://alena.dev', iconClass: 'fas', icon: 'link', className: ''},
              {description:'Alena Timofeeva', link: 'https://www.linkedin.com/in/alena-timofeeva/', iconClass: 'fab', icon: 'linkedin', className: 'active'},
              {description:'programmouse', link: 'https://www.behance.net/programmouse', iconClass: 'fab', icon: 'behance', className: ''},],
      extra: {description: 'drawing, lettering, ceramic, photography'}
    },
    mobileContent : { description:"For more information about me, my education, skills and experience please visit my LinkedIn profile or desktop version of website",
    linkToProfile: {to:"https://www.linkedin.com/in/alena-timofeeva/", text:"visit LinkedIn"}
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
            <LinkWithDescription description={data.resumePage.mobileContent.description} link={data.resumePage.mobileContent.linkToProfile}/>
          </div>
        )} />
        <Route exact path = '/portfolio' render = { () => (
          <div className = "portfolio-page">
          <SocialAsideMenu socialMenuItems = {data.socialMenuItems}/>
          <AsideHeader header = {data.portfolioPage.header} />
          <ProjectsSlideShow projects= {data.portfolioPage.projects} amount={data.portfolioPage.projects.length}/>
          <MainMenu activeLink = {this.props.location.pathname} menuItems = { data.topMenuItems }/>
          </div>
        )} />
      </div>
    );
  }
}

export default withRouter(App)
