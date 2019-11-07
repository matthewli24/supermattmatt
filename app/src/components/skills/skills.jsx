import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import MyCarouselv3 from '../myCarousel/myCarouselv3'
import './skills.scss';

const Skills = () => {
  return (
    <div className="skillsWrapper">
      <ScrollableAnchor id={'skills'}>
        <div className="skillsHeader">
          <div>My Tech Stack</div>
        </div>
      </ScrollableAnchor>
      
      <MyCarouselv3/>
    </div>
  )
}

export default Skills;