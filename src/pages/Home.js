import React from 'react'
import "../styles/Home.css";

function Home() {
  return (
    <div className='home'>
      <div className='introduction'>
        <h2>Hi, My Name is Oscar </h2>
          <div className='me'>
            <p> I am a junior programmer who graduated from college with an associate's 
            degree in computer science and finished a bootcamp in full stack web development. I like challenges and consider myself a 
            goal achiever. I like bowling, hike in the mountains, extreme sports, anime, and also I enjoyed volunteer for any non-profit
            organization. </p> 
          </div>
      </div>
      <h1>Skills</h1>
      <div className='skills'>
        <div className='front-end'>
          <ol className='list'>
            <li className='item'>
              <h2>Front-End</h2>
              <span>BootStrap</span><br></br>
              <span>Bulma</span><br></br>
              <span>React.js</span><br></br>
              <span>HTMLL</span><br></br>
              <span>CSS</span><br></br>
              <span>NPM</span><br></br>
              <span>React</span><br></br>              
            </li>
          </ol>
        </div>
        <div className='back-end'>
          <ol className='list'>
            <li className='item'>
              <h2>Back-End</h2>
              <span>Express.js</span><br></br>
              <span>Node.js</span><br></br>
              <span>MySQL</span><br></br>
              <span>SQL</span><br></br>
              <span>Heroku</span><br></br>
              <span>MondoDB</span><br></br>
            </li>
          </ol>
        </div>
        <div className='languages'>
          <ol className='list'>
            <li className='item'>
              <h2>Languages</h2>
              <span>JavaScript</span><br></br>
              <span>C++</span><br></br>
              <span>Java</span><br></br>
            </li>
          </ol>
        </div>
      </div>
    </div>
  )
}

export default Home;