import React from 'react';
import './bakersbook.scss';

import BakersBookDemo from '../../assets/bakersbook/bakersbookdemo.gif';
import BakersBookLanding from '../../assets/bakersbook/bakersbook-landing.svg'
import BakersBookLogo from '../../assets/bakersbook/bakersbook-logo.svg';

const BakersBook = () => {
  return(
    <div className="bakersBookWrapper">

      <img className="bakersBookLogo" src={BakersBookLogo} alt="BakersBookLogo"/>

      <div className="bakersBookDescription">
        <p>
          Do you love to bake? 
          Do you want to share some of your wonderful recipes? 
          Or do you just want to discover new recipes to try out? 
          Check out Baker's Book.
        </p>

        <img className="bakersBookLanding" src={BakersBookLanding} alt="landing"/>

        <p>
          Baker's Book is a web app for bakers or 
          anyone who loves baking to post their very own recipe. 
          We are trying to make writing up recipes fun and interactive!
          Join our community of passinate bakers.  
        </p>
      </div>
      
      <img className="bakersBookDemo" src={BakersBookDemo} alt="demo"/>


    </div>

  )
} 


export default BakersBook;