import React from 'react';
import './projectTemplate.scss';



const ProjectTemplate = ({title, demo, pictures, description}) => {

  return(
    <div className="ProjectContainer">

      <div className="projectTitle">{title}</div>
     
      <img className="projectDemo" src={demo} alt="demo"/>
     
      
    </div>
  )
}


export default ProjectTemplate;