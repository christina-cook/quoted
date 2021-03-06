import React from 'react';
import './Header.css';
import friendsTitle from '../../assets/friends-title.png';

const Header = () => {
  return (
    <header className='app-header'>
      <h1>Quoted</h1>
      <hr></hr>
      <div className='subtitle'>
        <img src={friendsTitle} alt='friends' className='friends-title'/>
        <h2>Trivia Edition</h2>
      </div>
    </header>
  )
}

export default Header;
