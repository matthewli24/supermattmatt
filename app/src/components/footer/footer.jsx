import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import SocialMediaBar from '../socialMediaBar/socialMediaBar'
import EmailForm from '../emailForm/emailForm'
import './footer.scss'

const Footer = () => {
  return (
    <div className="footerWrapper">
      <ScrollableAnchor id={'contacts'}>
        <div className="footerEmailLabel">Email Me</div>
      </ScrollableAnchor>
      
      <EmailForm/>
      <div className="footerFollowLabel">Feel Free To Follow Me on Social Media</div>
      <SocialMediaBar/>

    </div>
  );
};

export default Footer;
