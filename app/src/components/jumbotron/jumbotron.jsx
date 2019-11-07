import React from 'react';
import './jumbotron.scss';

import Logo from '../../assets/landingAssets/landing_logo.svg'
import DownArrow from '../../assets/icons/downArrow.svg'


const Jumbotron = () => {
  return (
    <div className="jumboWrapper">
      <img className="logo" src={Logo} alt="logo"/>

      <div className="nameContainer">
        <div className="name"> MATTHEW LI </div>
        <div className="label">A SOFTWARE ENGINEER</div>
        <div className="label">BUILDING THE NEXT BEST THING!</div>
      </div>
      
      <a href="#about">
        <img className="downArrow" src={DownArrow} alt="downarrow"/>
      </a>
      
    </div>
  )
};

export default Jumbotron;
