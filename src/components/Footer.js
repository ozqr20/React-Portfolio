import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import  TwitterIcon  from '@material-ui/icons/Twitter';
import  LinkedInIcon  from '@material-ui/icons/LinkedIn';

import "../styles/Footer.css"

function Footer() {
  return (
    <div className='footer'>
    <div className='socialLinks'>
        <a href="https://github.com/ozqr20"><GitHubIcon  /></a>
        <a href="https://twitter.com/home"><TwitterIcon /></a>
        <a href="https://www.linkedin.com/in/oscar-manosalva-9128bb190/"><LinkedInIcon /></a>
    </div>
    </div>
  )
}

export default Footer;
