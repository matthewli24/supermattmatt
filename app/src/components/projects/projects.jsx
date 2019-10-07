import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import './projects.scss';

import MoodifyLogo from '../../assets/moodify/Moodify-logo.svg';
import BakersBookLogo from '../../assets/bakersbook/bakersbook-logo.svg';
import InStyleLogo from '../../assets/instyle/instyle-logo.svg';

import Moodify from './moodify'
import BakersBook from './bakersbook'
import InStyle from './instyle'

const Projects = () => {
  return (
    <div className="projectsWrapper">
      <ScrollableAnchor id={"projects"}> 
        <div className="projectsHeader">
          <div>PROJECTS</div>
        </div>
      </ScrollableAnchor>
      

      <div className="projectList">

        <a className="projectLogo" href="#moodify">
          <img className="MoodifyLogo" src={MoodifyLogo}/>
        </a>
        <a className="projectLogo" href="#instyle">
          <img className="InStyleLogo" src={InStyleLogo}/>
        </a>
        <a className="projectLogo" href="#bakersbook">
          <img className="BakersBookLogo" src={BakersBookLogo}/>
        </a>
        

      </div>


      <Moodify/>
      <BakersBook/>
      <InStyle/>

    </div>
  );
}

export default Projects;