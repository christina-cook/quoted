import React from 'react';
import './Card.css';
import couch from '../../assets/couch.png';

const Card = ({question, answer}) => {
  return (
    <div className='game-card'>
      <img src={couch} alt='icon' className='card-icon'/>
      <h2 className='question'>{question}</h2>
    </div>
  )
}

export default Card;
