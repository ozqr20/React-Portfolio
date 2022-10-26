import React from 'react';
import { Link } from "react-router-dom";
import "../styles/Navigation.css"

export default function Navigation() {
  return (
    <div className='nav'>
      <div className='navButton'>
        <button></button>
      </div>
      <div className='links'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/resume">Resume</Link>
        
      </div>
    </div>
  )
}
