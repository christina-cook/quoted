import React from 'react';
import './Score.css';
import { Link } from 'react-router-dom';


const Score = () => {
  return (
    <>
    <div className='nav-buttons'>
      <Link to='/'>
        <button className='home'>Home</button>
      </Link>
      <Link to='/game'>
      <button className='restart'>Start Over</button>
      </Link>
    </div>
    <h2>Score gets displayed here</h2>
    </>
  )
}

export default Score;
