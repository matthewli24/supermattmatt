import React from 'react';
import './instyle.scss';

import InStyleLanding from '../../assets/instyle/instyle-landing.svg';
import InStyleDemo from '../../assets/instyle/instyleDemo1.gif';

const Instyle = () => {
  return(
    <div className="instyleWrapper">

      <div className="instyleTitle">In Style</div>

      <div className="instyleDescription">
        <p>
          InStyle is creating a trusted community of people 
          that wants to buy or sell all kinds of unique items at a bargain price.
        </p>

        <img className="inStyleLanding" src={InStyleLanding} alt="landing"/>

        <p> 
          It is a platform connecting both seller and buyers and they are mutually 
          benefit from using it. The users can be able to browse different items 
          based on filters and purchase the items using a first come first serve policy, 
          and also acts as a freelance retail consultant to sell items. 
          The mission is simple: to make selling easier than buying. 
          Shopping agents can be everyone and making some money through 
          a simple trip to the shops or your closets and post deals on the InStyle, 
          buyers can find the best deals they can find anywhere.
        </p>
      </div>

      <img className="instyleDemo" src={InStyleDemo} alt="demo"/>

    </div>
  )
};

export default Instyle;