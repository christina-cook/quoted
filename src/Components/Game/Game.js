import React from 'react';
import './Game.css';
import Card from '../Card/Card';
import arrow from '../../assets/arrow.png';

const Game = ({quotes}) => {

  const gameCards = quotes.map(quote => {
    return (
      <Card
        question={`"${quote.quote}"`}
        answer={quote.character}
      />
    )
  })

  return (
    <div className='game-container'>
      <h2 className='question-count'>Question 1 of 18</h2>
      <div className='game-card-container'>
        <div className='card-display'>
          {gameCards[4]}
        </div>
        <img src={arrow} alt='right-arrow' className='arrow'/>
      </div>
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
      <h3 className='answer-message'>You got it right!</h3>
    </div>
  )
}

export default Game;
