import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import './about.scss';

import MyCarousel from '../myCarousel/myCarousel';

const About = () => {
  return (
    <div className="aboutWrapper">
      <ScrollableAnchor id={'about'}>
        <div className="aboutHeader">
          <div>ABOUT</div>
        </div>
      </ScrollableAnchor>

      <p className="aboutDescription">
        I love to build and break things.
      </p>

      <p className="aboutDescription">
        Besides software development, 
        I like to watch anime, workout, play basketball, cook, play video games and poker.
      </p>

      <MyCarousel/>

    </div>

    
  )
}

export default About;