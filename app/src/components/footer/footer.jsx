import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import SocialMediaBar from '../socialMediaBar/socialMediaBar'
import EmailForm from '../emailForm/emailForm'
import UpArrow from '../../assets/icons/upArrow.svg'
import './footer.scss'

import InvertedTriangle from '../../assets/icons/invertedTriangle.svg'


const Footer = () => {
  return (
    <div className="footerWrapper">
      <img className="footerTriangle" src={InvertedTriangle} alt='' />
      <ScrollableAnchor id={'contacts'}>
        <div className="footerEmailLabel">Email Me</div>
      </ScrollableAnchor>

      
      <EmailForm/>
      <div className="footerFollowLabel">Feel Free To Follow Me on Social Media</div>
      <SocialMediaBar/>
      
      <a className="backToTop" href="#about">
        Back To Top 
        <img className="upArrow" src={UpArrow} alt="uparrow"/>
      </a>

    </div>
  );
};

export default Footer;
