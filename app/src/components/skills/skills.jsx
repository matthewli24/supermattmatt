import React from 'react';
import './skills.scss';

const Skills = () => {
  return (
    <div className="skillsWrapper">
      <div className="skillsHeader">
        <div>SKILLS</div>
      </div>


      <div className="skillsContainer">
        <ul className="skillsList">
          <label className="skillsLabel">Programming</label>
          <li className="skillItem">Javascript</li>
          <li className="skillItem">C++</li>
          <li className="skillItem">Python</li>
          <li className="skillItem">HTML & CSS</li>
          <li className="skillItem">Swift</li>
          <li className="skillItem">Typescript</li>
        </ul>

        <ul className="skillsList">
          <label className="skillsLabel">Technologies</label>
          <li className="skillItem">React & Redux</li>
          <li className="skillItem">Node JS</li>
          <li className="skillItem">MySQL</li>
          <li className="skillItem">NoSQL</li>
          <li className="skillItem">Flask</li>
          <li className="skillItem">Git</li>
          <li className="skillItem">Jira</li>
        </ul>
      </div>
      
      
    </div>
  )
}

export default Skills;