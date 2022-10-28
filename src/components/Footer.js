import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import  TwitterIcon  from '@material-ui/icons/Twitter';
import  LinkedInIcon  from '@material-ui/icons/LinkedIn';
import "../styles/Footer.css"

function Footer() {
  return (
    <div className='footer'>
    <div className='socialLinks'>
        < GitHubIcon className='git'/>
        < TwitterIcon className='twitt'/>
        < LinkedInIcon className='linkedIn'/>
    </div>
    </div>
  )
}

export default Footer;
