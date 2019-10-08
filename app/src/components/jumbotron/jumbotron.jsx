import React from 'react';
import './jumbotron.scss';

import Portrait from '../../assets/pictures/profilepic.jpg';
import SocialMediaBar from '../socialMediaBar/socialMediaBar';


const Jumbotron = () => {
  return (
    <div className="jumboWrapper">
      <img className="portrait" src={Portrait} alt="Portrait"/>
      <div className="nameContainer">
        <div className="nameLabel">Matthew Li</div>
        <div className="nameSummary">I love to build things!</div>
        <div className="nameSummary">Email: Matthewli2491@gmail.com</div>
        <a className="resumeLink" href="https://firebasestorage.googleapis.com/v0/b/supermattmattsworld.appspot.com/o/MatthewLiResume.pdf?alt=media&token=6e683921-a262-4a0c-b4f4-54663bbe9ec3">
          <div className="resumeBtn">Download My Résumé</div>
        </a>
        <SocialMediaBar />
      </div>
      
      
    </div>
  )
};

export default Jumbotron;
