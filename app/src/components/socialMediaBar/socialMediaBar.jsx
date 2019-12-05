import React from 'react';

import './socialMediaBar.scss';

import TwitterIcon from '../../assets/icons/twitter.svg'
import FacebookIcon from '../../assets/icons/facebook.svg'
import InstagramIcon from '../../assets/icons/instagram.svg'
import LinkedInIcon from '../../assets/icons/linkedin.svg'
import GitHubIcon from '../../assets/icons/github.svg'

const SocialMediaBar = () => {

  return (
    <div className="socialMediaBarWrapper">
      <a href="https://www.linkedin.com/in/matthewli24/"><img className="socialMediaIcon" src={LinkedInIcon} alt="linkedIn"/></a>
      <a href="https://www.facebook.com/mattmatt2491"><img className="socialMediaIcon" src={FacebookIcon} alt="facebook"/></a> 
      <a href="https://www.instagram.com/1unstoppableperson/"><img className="socialMediaIcon" src={InstagramIcon} alt="instagram"/></a>
      <a href="https://twitter.com/supermattmatt24"><img className="socialMediaIcon" src={TwitterIcon} alt="twitter"/></a>
      <a href="https://github.com/matthewli24"><img className="socialMediaIcon" src={GitHubIcon} alt="github"/></a>
      
     
    </div>

  );
};

export default SocialMediaBar;