import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import './education.scss';

import HunterCollege from '../../assets/icons/hunter-college-logo.png';
import ComputerIcon from '../../assets/icons/computer-icon.png';
import ChemistryIcon from '../../assets/icons/chemistry-icon.png';

const Education = () => {
  return (
    <div className="educationWrapper">
      <ScrollableAnchor id={"education"}>
        <div className="eduHeader">
          <div>EDUCATION</div>
        </div>
      </ScrollableAnchor>
      

      <img className="hunterCollegeLogo" src={HunterCollege} alt="hunterCollegeLogo"/>
      
      <div className="schoolListContainer">
        <div className="schoolListItem">
          <img className="schoolListIcon" src={ComputerIcon} alt="computerIcon"/>
          <li className="schoolList">Bachelors of Arts in Computer Science: Spring 2019</li>
        </div>
        
        <div className="schoolListItem">
          <img className="schoolListIcon" src={ChemistryIcon} alt="chemistryIcon"/>
          <li className="schoolList">Bachelors of Arts in Computer Science: Fall 2013</li>
        </div>
        
      </div>
        
    </div>
  );
};

export default Education;