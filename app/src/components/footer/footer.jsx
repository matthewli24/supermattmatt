import React from 'react';
import './footer.scss'
import SocialMediaBar from '../socialMediaBar/socialMediaBar'
import EmailForm from '../emailForm/emailForm'
const Footer = () => {
  return (
    <div className="footerWrapper">
      <div className="footerEmailLabel">Write Me An Email</div>
      <EmailForm/>
      <div className="footerFollowLabel">Feel Free To Follow Me on Social Media</div>
      <SocialMediaBar/>

    </div>
  );
};

export default Footer;
