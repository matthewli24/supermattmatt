import React from 'react';
import './jumbotron.scss';
// import './logo.css'

import Portrait from '../../assets/pictures/profilepic.jpg';
import SocialMediaBar from '../socialMediaBar/socialMediaBar';
import Logo from '../../assets/landingAssets/landing_logo.svg'
import NameLabel from '../../assets/landingAssets/landing_name.svg'
import TitleLabel from '../../assets/landingAssets/landing_label.svg'
import DownArrow from '../../assets/icons/downArrow.svg'



const Jumbotron = () => {
  return (
    <div className="jumboWrapper">
      <img className="logo" src={Logo} alt="logo"/>

      <div className="nameContainer">
        <img className="name" src={NameLabel} alt="name"/>
        <img className="label" src={TitleLabel} alt="label"/>
      </div>
      
      <div className="contactsContainer">
          <a className="resumeLink" href="https://firebasestorage.googleapis.com/v0/b/supermattmattsworld.appspot.com/o/MatthewLiResume.pdf?alt=media&token=6e683921-a262-4a0c-b4f4-54663bbe9ec3">
            <div className="resumeBtn">Download My Résumé</div>
          </a>
      </div>
      
      <img className="downArrow" src={DownArrow} alt="downarrow"/>
    </div>
  )
};

export default Jumbotron;
