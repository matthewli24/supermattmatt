import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import './projectsOLD.scss';

import MoodifyDemo from '../../assets/moodify/moodifyDemo.gif';

const ProjectsOLD = () => {
  return (
    <div className="projectsWrapper">
      <ScrollableAnchor id={"projects"}> 
        <div className="projectsHeader">
          <div>PROJECTS</div>
        </div>
      </ScrollableAnchor>
      
      <div className="projectsContainer">

        <div className="projectLabel">
          <a className="projectTitle" href="https://github.com/matthewli24/BakersBook">Baker's Book | Web Development</a>
          <div className="projectDate">January 2019 - May 2019</div>
        </div>
          
        <ul className="projectDescription">
          <li className="projectDescriptionItem">
            Developed a web app for bakers to make it fun and interactive to
            put together baking recipes with a team of 5 people.
          </li>

          <li className="projectDescriptionItem">
            Designed the Front-End using React.js, Redux for state
            management, and CSS for styling.
          </li>

          <li className="projectDescriptionItem">
            Implemented a RESTful API using Firebase functions and the Express framework.
          </li>

          <li className="projectDescriptionItem">
            Used the Firestore's NoSQL database and the Google Cloud
            Platform to store and manage data and images.
          </li>
        </ul>
        {/* ======================================================= */}
        <div className="projectLabel">
          <a className="projectTitle" href="https://github.com/csci-49900-01-spring-2019/project-instyle">In Style | Capstone</a>
          <div className="projectDate">February 2019 - May 2019</div>
        </div>
          
        <ul className="projectDescription">
          <li className="projectDescriptionItem">
            Developed a web and IOS e-commerce application 
            for people to buy and sell items with a team of 4 people.
          </li>

          <li className="projectDescriptionItem">
            Built the IOS client using Swift and xCode utilizing the MVC framework.
          </li>

          <li className="projectDescriptionItem">
            Designed wireframes and sequence diagrams with team for the both clients.
          </li>

          <li className="projectDescriptionItem">
            Implemented a RESTful API on Express.js for both web and IOS clients to consume. 
          </li>
        </ul>

        {/* ======================================================= */}

        <div className="projectLabel">
          <a className="projectTitle" href="https://github.com/matthewli24/moodify">Moodify | CUNY Tech Prep</a>
          <div className="projectDate">October 2018 - December 2018</div>
        </div>
          
        <ul className="projectDescription">
          <li className="projectDescriptionItem">
            Created a web app using Spotify's API to retrieve user data and
            analyze songs to generate a unique playlist based on mood with
            a team of 3 people.
          </li>

          <li className="projectDescriptionItem">
            Designed the Front-End using React.js to handle a user's mood
            selection and to display Spotfy's audio web player.
          </li>

          <li className="projectDescriptionItem">
            Implemented the Back-End using Express.js to interact and
            handle the logic between the web client and Spotify's API.
          </li>
        </ul>

        {/* ======================================================= */}

        <div className="projectLabel">
          <a className="projectTitle" href="https://github.com/matthewli24">More Projects On My GitHub ...</a>
        </div>

      </div>

    </div>
  );
}

export default ProjectsOLD;