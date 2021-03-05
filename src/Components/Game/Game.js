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
      <div className='answer-buttons'>
        <div className='buttons-left'>
          <button className='character-button'>Monica</button>
          <button className='character-button'>Joey</button>
          <button className='character-button'>Phoebe</button>
        </div>
        <div className='buttons-right'>
          <button className='character-button'>Ross</button>
          <button className='character-button'>Chandler</button>
          <button className='character-button'>Rachel</button>
        </div>
      </div>
    </div>
  )
}

export default Game;
