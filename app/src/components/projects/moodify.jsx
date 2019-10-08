import React from 'react';
import './moodify.scss';

import MoodifyLogo from '../../assets/moodify/Moodify-logo.svg';
import MoodifyDemo from '../../assets/moodify/moodifyDemo.gif';

const Moodify = () => {
  return(
    <div className="moodifyWrapper">

      <img className="moodifyLogo" src={MoodifyLogo} alt="MoodifyLogo"/>

      <div className="moodifyDescription">
        <p>Do you have trouble selecting a song to listen to sometimes?</p>

        <p>
          Moodify generates a personalize playlist to listen to based on your mood. 
          The goal of Moodify is to uplift your mood with the power of music when you are feeling sad. 
          Moodify retrieves data from your personal Spotify account. 
          It generates a unique playlist based on your mood, listen history, liked songs and artists. 
        </p>
      </div>
      
      <img className="moodifyDemo" src={MoodifyDemo} alt="demo"/>


    </div>

  )
} 


export default Moodify;