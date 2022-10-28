import React from 'react'
import ProjectDisplay from "../components/Projects"
import RunBuddy from "../assets/runbuddy.png"
import Game from "../assets/banner-game.jpg"

function Projects() {
  return (
    <div className='projects'>
      <div className='all-projects'></div>
      <ProjectDisplay image={RunBuddy}/>
      <ProjectDisplay image={Game}/>
    </div>
  )
}

export default Projects;