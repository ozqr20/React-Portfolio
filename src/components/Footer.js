import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub';
import  TwitterIcon  from '@material-ui/icons/Twitter';
import  LinkedInIcon  from '@material-ui/icons/LinkedIn';

function Footer() {
  return (
    <div className='footer'>
    <div className='socialLinks'>
        < GitHubIcon />
        < TwitterIcon />
        < LinkedInIcon />
    </div>
    </div>
  )
}

export default Footer;
