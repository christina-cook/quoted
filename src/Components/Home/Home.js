import React from 'react';
import './Home.css';
import frame from '../../assets/frame.png';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home-page'>
      <h2 className='home-header'>The One With All the Questions</h2>
      <img src={frame} alt='gold frame' className='frame'/>
      <Link to='/game' className='button-link'>
        <button className='start-button'>Get Started</button>
      </Link>
    </div>
  )
}

export default Home;
