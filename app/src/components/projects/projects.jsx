import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import './projects.scss';

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
      

      <Moodify/>
      <BakersBook/>
      <InStyle/>

    </div>
  );
}

export default Projects;