import React from 'react';
import './profile.scss';

import ProfilePicture from '../../assets/pictures/circular_profile_pic.svg'
import ComputerIcon from '../../assets/icons/computer-icon.svg';
import ChemistryIcon from '../../assets/icons/chemistry-icon.svg';
import HunterCollege from '../../assets/icons/hunter-college-logo.png';

const Profile = () => {
  return (
    <div className="profileWrapper">
      <div className="profileSection">
        <img className="profilePicture" src={ProfilePicture} alt='profile' />
        <div className="educationContainer">
          <img className="schoolImage" src={HunterCollege} alt="Hunter College" />

          <div className="degreeWrapper">
            <div className="degreeContainer">
              <img className="degreeIcon" src={ComputerIcon} />
              <div className="degree">
                <div className="degreeName"> B.A. Computer Science</div>
                <div className="degreeDate">Spring 2019</div>
              </div>
            </div>
            <div className="degreeContainer">
              <img className="degreeIcon" src={ChemistryIcon} />
              <div className="degree">
                <div className="degreeName">B.A. BioChemistry</div>
                <div className="degreeDate">Fall 2013</div>
              </div>
            </div>
          </div>
          

        </div>
        <div className="contactsContainer">
          <a className="contactLink" href="https://firebasestorage.googleapis.com/v0/b/supermattmattsworld.appspot.com/o/MatthewLiResume.pdf?alt=media&token=6e683921-a262-4a0c-b4f4-54663bbe9ec3">
            <div className="contactBtn">Download My Résumé</div>
          </a>
          <a className="contactLink" href="#contacts">
            <div className="contactBtn">Contact Me</div>
          </a>
        </div>
      </div>

    </div>
  )

}

export default Profile;