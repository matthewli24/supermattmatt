import React from 'react';
import './footer.scss'
import SocialMediaBar from '../socialMediaBar/socialMediaBar'

const Footer = () => {
  return (
    <div className="footerWrapper">
      <div className="footerEmailLabel">Email: matthewli2491@gmail.com</div>
      <div className="footerFollowLabel">Feel Free To Follow Me on Social Media</div>
      <SocialMediaBar/>

    </div>
  );
};

export default Footer;
