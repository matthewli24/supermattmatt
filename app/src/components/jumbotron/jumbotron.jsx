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
        <a className="resumeLink" href="https://firebasestorage.googleapis.com/v0/b/supermattmattsworld.appspot.com/o/MatthewLiResume.pdf?alt=media&token=7b898ce5-d656-413f-ac1e-285965e3a5c1">
          <div className="resumeBtn">Download My Résumé</div>
        </a>
        <SocialMediaBar />
      </div>
      
      
    </div>
  )
};

export default Jumbotron;
