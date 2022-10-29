import React from 'react'


function DisplayProject({ image, name }) {
  return (
    <div className='project-display'>
        <div className='project-image' style={{bgImg: `url(${image})`}} >
            <h1>{ name } </h1>
          </div>
    </div>
  )
}

export default DisplayProject;
