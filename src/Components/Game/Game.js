import React, { useState } from 'react';
import './Game.css';
import Card from '../Card/Card';
import arrow from '../../assets/arrow.png';

const Game = ({quotes}) => {
  const [currentQuote, setCurrentQuote] = useState(0)

  const gameCards = quotes.map(quote => {
    return (
      <Card
        question={`"${quote.quote}"`}
        answer={quote.character}
      />
    )
  })

  const handleArrowClick = () => {
    const nextQuote = currentQuote + 1;
    if (nextQuote < quotes.length) {
      setCurrentQuote(nextQuote)
    }
    // else {
    //   // end the game and show the score
    // }
  }

  return (
    <div className='game-container'>
      <h2 className='question-count'>Question {currentQuote + 1} of {quotes.length}</h2>
      <div className='game-card-container'>
        <div className='card-display'>
          {gameCards[currentQuote]}
        </div>
        <img src={arrow} alt='right-arrow' className='arrow' onClick={handleArrowClick}/>
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
