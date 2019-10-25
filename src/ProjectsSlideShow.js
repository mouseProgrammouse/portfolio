import React, { Component } from 'react'
import ProjectPreview from './ProjectPreview.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'
import './ProjectsSlideShow.css'

class ProjectsSlideShow extends Component {

  constructor (props) {
    super(props);
    this.state = { currentSlideIndex : 0 }
  }

  prevSlide = () => {
    const newIndex = (this.state.currentSlideIndex <= 0)?this.state.currentSlideIndex:this.state.currentSlideIndex-1;
    this.setState ({
      currentSlideIndex : newIndex
    });
  }

  nextSlide = () => {
    const newIndex = (this.state.currentSlideIndex < this.props.amount-1)?this.state.currentSlideIndex+1:this.state.currentSlideIndex;
    this.setState ({
      currentSlideIndex : newIndex
    });
  }

  render () {

    const { projects, amount } = this.props;

    return (
      <div className="projects-slideshow-container">
          <ProjectPreview project={projects[this.state.currentSlideIndex]} index={this.state.currentSlideIndex+1} amount={amount}/>
        <div className="switchers">
          <button onClick={() => this.prevSlide()} className="icon prev">
            <FontAwesomeIcon icon={['fas', 'caret-left']} />
          </button>
          <button onClick={() => this.nextSlide()} className="icon next">
            <FontAwesomeIcon icon={['fas', 'caret-right']} />
            </button>
        </div>
      </div>
    );
  }
}

ProjectsSlideShow.propTypes = {
  projects: PropTypes.array.isRequired,
  amount: PropTypes.number.isRequired
}

export default ProjectsSlideShow
