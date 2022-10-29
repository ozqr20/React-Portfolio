import React from 'react'
import ProjectDisplay from "../components/Projects"
import { allProjects } from "../helpers/AllProjects"

import "../styles/Projects.css"

function Projects() {
  return (
    <div className='projects'>
      <h1> My Projects </h1>
        <div className='all-projects'>
          {allProjects.map((project) => {
            return <ProjectDisplay name={project.name} image={project.image} />
          })}
        </div>
    </div>
  );
}

export default Projects;