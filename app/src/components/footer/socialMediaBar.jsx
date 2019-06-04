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
        <img className="socialMediaIcon" src={LinkedInIcon} alt="linkedIn"/>
        <img className="socialMediaIcon" src={FacebookIcon} alt="facebook"/>
        <img className="socialMediaIcon" src={InstagramIcon} alt="instagram"/>
        <img className="socialMediaIcon" src={TwitterIcon} alt="twitter"/>
        <img className="socialMediaIcon" src={GitHubIcon} alt="github"/>
    </div>

  );
};

export default SocialMediaBar;