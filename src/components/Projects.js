import React from 'react'

function DisplayProject({ img, name }) {
  return (
    <div className='project-component'>
        <div className='project-image' style={{bgImg: `url(${img})`}}>
            <h1>{ name }</h1>
        </div>
    </div>
  )
}

export default DisplayProject;
