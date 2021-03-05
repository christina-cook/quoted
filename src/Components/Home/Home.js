import React from 'react';
import './Home.css';
import frame from '../../assets/frame.png';

const Home = () => {
  return (
    <div className='home-page'>
      <h2 className='home-header'>The One With All the Questions</h2>
      <img src={frame} alt='gold frame' className='frame'/>
    </div>
  )
}

export default Home;
