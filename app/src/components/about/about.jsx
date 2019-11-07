import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import './about.scss';

import ProfilePicture from '../../assets/pictures/circular_profile_pic.svg'
import ComputerIcon from '../../assets/icons/computer-icon.svg';
import ChemistryIcon from '../../assets/icons/chemistry-icon.svg';
import HunterCollege from '../../assets/icons/hunter-college-logo.png';

const About = () => {
  return (
    <div className="aboutWrapper">
      <ScrollableAnchor id={'about'}>
        <div className="aboutHeader">ABOUT</div>
      </ScrollableAnchor>

      <div className="aboutContainer">
        <div className="profileSection">
          <img className="profilePicture" src={ProfilePicture} alt='profile' />
          <div className="educationContainer">
            <div className="schoolName">Hunter College</div>
            <img className="schoolImage" src={HunterCollege} alt="Hunter College"/>
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
          <div className="contactsContainer">
            <a className="contactLink" href="https://firebasestorage.googleapis.com/v0/b/supermattmattsworld.appspot.com/o/MatthewLiResume.pdf?alt=media&token=6e683921-a262-4a0c-b4f4-54663bbe9ec3">
              <div className="contactBtn">Download My Résumé</div>
            </a>
            <a className="contactLink" href="#contacts">
              <div className="contactBtn">Contact Me</div>
            </a>
          </div>
        </div>
        
        <div className="aboutDescriptionSection">
          <p className="aboutDescription">
            Hello, I am a software engineer who is passionate about building applications that may someday change other's lives for the better. 
            I am always learning and improving my craft.  
            Besides software development, I like to workout, cook, watch anime, and play video games.
          </p>

          <div className="experienceHeader">
          <p className="experienceText">Experience</p>
          </div>
          
          <div className="experienceContainer">
            <div className="expItem">
              <div className="expTitle">CUNY Tech Prep | NYC Tech Talent Pipeline</div>
              <div className="expDates">August 2018 - August 2019</div>
              <ul className="expList">
                <li className="expListItem">
                  Selected for a full stack competitive JavaScript training program, as
                  one of 122 students out of 400+ applicants.
                </li>
                <li className="expListItem">
                  Learn in-demand technologies like React, Node, Express, and
                  Postgre SQL as well as industry best practices for design,
                  implementation, and deployment such as MVC, version control with
                  Git/GitHub, agile & Scrum with Trello and Slack.
                </li>
              </ul>
            </div>

            <div className="expItem">
              <div className="expTitle">SOFTWARE ENGINEER INTERN AT NEARPOD</div>
              <div className="expDates">June 2018 - August 2018</div>
              <ul className="expList">
                <li className="expListItem">
                Developed ed-tech software in an agile environment with a team of 10 developers.
                </li>
                <li className="expListItem">
                  Collaborated with the Product and Marketing team to deploy a
                  new top bar for Nearpod's website to improve user experience.
                </li>
                <li className="expListItem">
                  Worked in a cross-functional team environment, including
                  remote teams located in Argentina.
                </li>
                <li className="expListItem">
                  Conducted research and interviews with teachers and internal
                  stake holders to propose a prototype for a new product to
                  address students' mental health and mood.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>    
  )
}

export default About;