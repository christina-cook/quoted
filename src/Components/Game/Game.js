import React, { useState, useEffect } from 'react';
import './Game.css';
import Card from '../Card/Card';
import arrow from '../../assets/arrow.png';

const Game = ({quotes}) => {
  const [currentNumber, setCurrentNumber] = useState(0)
  const [currentQuote, setCurrentQuote] = useState(quotes[0])
  const [currentAnswer, setCurrentAnswer] = useState('')
  const [score, setScore] = useState(0)
  const [answerMessage, setAnswerMessage] = useState('')

  const gameCards = quotes.map(quote => {
    return (
      <Card
        question={`"${quote.quote}"`}
      />
    )
  })

  const handleArrowClick = () => {
    const nextQuote = currentNumber + 1;
    if (nextQuote < quotes.length) {
      setCurrentNumber(nextQuote)
      setAnswerMessage('')
      findMatchingQuote()
    }
    // else {
    //   // end the game and show the score
    // }
  }

  const restartGame = () => {
    setCurrentNumber(0)
    setAnswerMessage('')
    setCurrentAnswer('')
    setCurrentQuote()
  }

  const findMatchingQuote = () => {
    const matchingQuote = quotes[currentNumber + 1]
    const correctAnswer = matchingQuote.character
    setCurrentAnswer(correctAnswer)
    setCurrentQuote(matchingQuote)
  }

  const handleAnswerChoice = (event) => {
    event.preventDefault()
    if (event.target.id === currentAnswer) {
      // turn button border green
      setScore(score + 1)
      setAnswerMessage('You got it right!')
    } else {
      // turn button border red
      setAnswerMessage('Better luck next time!')
    }
  }

  return (
    <>
      <div className='nav-buttons'>
        <button className='restart' onClick={restartGame}>Start Over</button>
      </div>
      <div className='game-container'>
        <h2 className='question-count'>Question {currentNumber + 1} of {quotes.length}</h2>
        <div className='game-card-container'>
          <div className='card-display'>
            {gameCards[currentNumber]}
          </div>
          <img src={arrow} alt='right-arrow' className='arrow' onClick={handleArrowClick}/>
        </div>
        <div className='answer-buttons'>
          <div className='buttons-left'>
            <button className='character-button' id='Monica' onClick={handleAnswerChoice}>Monica</button>
            <button className='character-button' id='Joey'onClick={handleAnswerChoice}>Joey</button>
            <button className='character-button' id='Phoebe' onClick={handleAnswerChoice}>Phoebe</button>
          </div>
          <div className='buttons-right'>
            <button className='character-button' id='Ross' onClick={handleAnswerChoice}>Ross</button>
            <button className='character-button' id='Chandler' onClick={handleAnswerChoice}>Chandler</button>
            <button className='character-button' id='Rachel' onClick={handleAnswerChoice}>Rachel</button>
          </div>
        </div>
        <h3 className='answer-message'>{answerMessage}</h3>
      </div>
    </>
  )
}

export default Game;
