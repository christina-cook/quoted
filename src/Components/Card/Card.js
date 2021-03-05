import React from 'react';
import './Card.css';

const Card = ({question, answer}) => {
  return (
    <div className='game-card'>
      <h2>{question}</h2>
    </div>
  )
}

export default Card;
