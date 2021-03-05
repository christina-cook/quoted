import React from 'react';
import './Game.css';
import Card from '../Card/Card';

const Game = ({quotes}) => {

  const gameCards = quotes.map(quote => {
    return (
      <Card
        question={quote.quote}
        answer={quote.character}
      />
    )
  })

  return (
    <div className='game-container'>
      <h2 className='question-count'>Question 1 of 18</h2>
      <div className='game-card-container'>{gameCards[4]}</div>
    </div>
  )
}

export default Game;
