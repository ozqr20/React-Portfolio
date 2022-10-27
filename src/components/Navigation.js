import React from 'react';
import { Link } from "react-router-dom";
import "../styles/Navigation.css"
import Icon from "@material-ui/icons/Reorder"


function Navigation() {
  return (
    <div className='nav'>
      <div className='links'>
      <div className='navButton'>
        <button> <Icon></Icon> </button>
      </div>
        <Link to="/"> Home</Link>
        <Link to="/about"> About</Link>
        <Link to="/projects"> Projects</Link>
        <Link to="/resume"> Resume</Link>
      </div>
    </div>
  );
}

export default Navigation;
