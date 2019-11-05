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
        Hello, I am a software developer who is 
        passionate in building applications that may someday change other's lives for the better. 
      </p>

      <p className="aboutDescription">
        Besides software development, 
        I like to watch anime, workout, play basketball, cook, play video games and poker.
      </p>

      <div className="contactsContainer">
        <a className="resumeLink" href="https://firebasestorage.googleapis.com/v0/b/supermattmattsworld.appspot.com/o/MatthewLiResume.pdf?alt=media&token=6e683921-a262-4a0c-b4f4-54663bbe9ec3">
          <div className="resumeBtn">Download My Résumé</div>
        </a>
      </div>

      {/* <MyCarousel/> */}

    </div>

    
  )
}

export default About;