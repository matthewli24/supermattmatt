import React from 'react';
import './instyle.scss';

import InStyleLanding from '../../assets/instyle/instyle-landing.svg';
import InStyleDemo from '../../assets/instyle/instyleDemo.gif';
import InStyleDemo1 from '../../assets/instyle/instyledemo1.gif';
import InStyleDemo2 from '../../assets/instyle/instyledemo2.gif';
import InStyleLogo from '../../assets/instyle/instyle-logo.svg';
import iPhoneContainer from '../../assets/instyle/iphoneContainer.png'

const Instyle = () => {
  return(
    <div className="instyleWrapper">

      <img className="InStyleLogo" src={InStyleLogo} alt="InStyleLogo"/>

      <div className="instyleDescription">
        <p>
          InStyle is creating a trusted community of people 
          that wants to buy or sell all kinds of unique items at a bargain price.
        </p>

        <img className="inStyleLanding" src={InStyleLanding} alt="landing"/>

        <p> 
          It is a platform connecting both seller and buyers. 
          The users are able to browse different items based on interests,
          and purchase the items using a first come first serve policy. 
          Users can act as a freelance retail consultant to sell items. 
          The mission is simple: to make selling easier than buying. 
          Shopping agents can be anyone. Anyone can sell and make some money through 
          a simple trip to a shopping mall or their own closet and post deals on the InStyle. 
        </p>
      </div>

      <div className="demos">
        <div className="demoDescription">Login/Register And Browse</div>
        <div className="demoContainer">
          <img className="iphoneContainer" src={iPhoneContainer} alt="iphone"/>
          <img className="instyleDemo" src={InStyleDemo1} alt="demo"/>
        </div>
        
        <div className="demoDescription">Sell Your Own Products!</div>
        <div className="demoContainer">
          <img className="iphoneContainer" src={iPhoneContainer} alt="iphone"/>
          <img className="instyleDemo" src={InStyleDemo2} alt="demo"/>
        </div>
      </div>
      
      

    </div>
  )
};

export default Instyle;