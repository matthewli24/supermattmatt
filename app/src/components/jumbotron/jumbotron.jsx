import React from 'react';
import './jumbotron.scss';

import Portrait from '../../assets/pictures/cat-sleeping-1920x1080.jpg';


const Jumbotron = () => {
  return (
    <div className="jumboWrapper">
  
      <img className="portrait" src={Portrait} alt="Portrait"/>
      <div className="nameLabel">Matthew Li</div>
    </div>
  )
};

export default Jumbotron;
