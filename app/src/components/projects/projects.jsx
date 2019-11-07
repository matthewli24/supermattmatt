import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import GitHubIcon from '../../assets/icons/github.svg'
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

      <div className="moreProjectsContainer">
          <a className="githublink" href="https://github.com/matthewli24">
            View More Projects On My GitHub ... 
          </a>
          <a href="https://github.com/matthewli24">
            <img className="githubicon" src={GitHubIcon} alt="github"/>
          </a>
      </div>

    </div>
  );
}

export default Projects;