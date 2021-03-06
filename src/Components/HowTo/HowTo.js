import React from 'react';
import './HowTo.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <div className='nav-buttons'>
          <Link to='/'>
            <button className='home'>Home</button>
          </Link>
        </div>
      <div className='how-page'>
        <h2 className='how-header'>How To Play</h2>
        <p>Instructions go here...</p>
        <Link to='/game' className='button-link'>
          <button className='start-button'>Get Started</button>
        </Link>
      </div>
    </>
  )
}

export default Home;
