import React from 'react'
import PropTypes from 'prop-types'
import SkillsListWitDescription from './skills/SkillsListWitDescription'
import About from './skills/About'
import SkillsWithCertification from './skills/SkillsWithCertification'
import SkillsListWithLevel from './skills/SkillsListWithLevel'
import './Skills.css'

const Skills = (props) => {

  const {skills} = props;

  return (
    <div className="skills">
      <div className="left-section">
        <SkillsListWitDescription title={'Technical skills'} skills={skills.technical} />
        <SkillsListWithLevel title={'Language'} skills={skills.languages}/>
        <SkillsListWithLevel title={'Soft skills'} skills={skills.softSkills}/>
      </div>
      <div className="right-section">
        <About header={skills.about.header} description={skills.about.description} />
        <SkillsWithCertification title={'Licenses & Certifications'} skills={skills.certifications} />
      </div>
    </div>
  );
}

Skills.propTypes = {
  skills: PropTypes.object.isRequired
}

export default Skills
