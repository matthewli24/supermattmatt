import React from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';
import './experience.scss';

const Experience = () => {
  return (
    <div className="experienceWrapper">
      <ScrollableAnchor id={'experience'}>
        <div className="expHeader">
          <div>EXPERIENCE</div>
        </div>
      </ScrollableAnchor>
      
      <div className="experienceItemContainer">

        <div className="expLabel">
          <div className="expTitle">CUNY Tech Prep | NYC Tech Talent Pipeline</div>
          <div className="expDate">August 2018 - July 2019</div>
        </div>
        
        <ul className="expDescription">
          <li className="expDescriptionItem">
            Selected for a full stack competitive JavaScript training program, as
            one of 122 students out of 400+ applicants.
          </li>

          <li className="expDescriptionItem">
            Learn in-demand technologies like React, Node, Express, and
            Postgre SQL as well as industry best practices for design,
            implementation, and deployment such as MVC, version control with
            Git/GitHub, agile & Scrum with Trello and Slack.
          </li>
        </ul>

        <div className="expLabel">
          <div className="expTitle">SOFTWARE ENGINEER INTERN AT NEARPOD</div>
          <div className="expDate">June 2018 - August 2018</div>
        </div>

        <ul className="expDescription">
          <li className="expDescriptionItem">
            Developed ed-tech software in an agile environment with a
            team of 10 developers.
          </li>

          <li className="expDescriptionItem">
            Collaborated with the Product and Marketing team to deploy a
            new top bar for Nearpod's website to improve user experience.
          </li>

          <li className="expDescriptionItem">
            Worked in a cross-functional team environment, including
            remote teams located in Argentina.
          </li>

          <li className="expDescriptionItem">
            Conducted research and interviews with teachers and internal
            stake holders to propose a prototype for a new product to
            address students' mental health and mood.
          </li>
        </ul>


      </div>

    </div>
  );
}

export default Experience;
