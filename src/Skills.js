import React from 'react'
import PropTypes from 'prop-types'
import SkillsWithDescription from './skills/SkillsWithDescription'
import About from './skills/About'
import SkillsWithCertification from './skills/SkillsWithCertification'
import SkillsWithLevel from './skills/SkillsWithLevel'
import SkillsWithDateAndDescription from './skills/SkillsWithDateAndDescription'
import SMLinks from './skills/SMLinks'
import './Skills.css'

const Skills = (props) => {

  const {skills} = props;

  return (
    <div className="skills">
      <div className="left-section">
        <SkillsWithDescription title={'Technical skills'} skills={skills.technical} />
        <SkillsWithLevel title={'Language'} skills={skills.languages}/>
        <SkillsWithLevel title={'Soft skills'} skills={skills.softSkills}/>
        <SMLinks title={'Links'} links={skills.links} />
      </div>
      <div className="right-section">
        <About header={skills.about.header} description={skills.about.description} />
        <SkillsWithCertification title={'Licenses & Certifications'} skills={skills.certifications} />
        <SkillsWithDateAndDescription title={'Education'} skills={skills.education}/>
        <SkillsWithDateAndDescription title={'Experience'} skills={skills.experience}/>
      </div>
    </div>
  );
}

Skills.propTypes = {
  skills: PropTypes.object.isRequired
}

export default Skills
