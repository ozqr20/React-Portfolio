import React, { useEffect, useState} from 'react';
import { Link, useLocation } from "react-router-dom";
import "../styles/Navigation.css"
import Icon from "@material-ui/icons/Reorder"


function Navigation() {
  const [openNav, setOpenNav] = useState(false);

  // Returns the location object of the current link selected
  const location = useLocation();

  // It will close the button after user click on one of the links
  useEffect (() => {
    setOpenNav(false);
  }, [location]);

  return (
    <div className='nav' id={openNav ? 'open' : 'close'}>
      <div className='navButton'>
        <button
          onClick={() => {
            setOpenNav((prev) => !prev);
          }} 
          >
          <Icon /> 
          </button>
        <div className='links'>
        <Link to="/"> Home</Link>
        <Link to="/about"> About</Link>
        <Link to="/projects"> Projects</Link>
        <Link to="/resume"> Resume</Link>
      </div>
      </div>

    </div>
  );
}

export default Navigation;
