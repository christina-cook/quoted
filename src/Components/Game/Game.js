import React, { useState } from 'react';
import './Game.css';
import Card from '../Card/Card';
import arrow from '../../assets/arrow.png';
import { Link } from 'react-router-dom';
// import Loading from '../Loading/Loading';
import { getQuotes } from '../../ApiCalls';


const Game = () => {
  const [quotes, setQuotes] = useState([])
  const [currentNumber, setCurrentNumber] = useState(0)
  const [currentAnswer, setCurrentAnswer] = useState('')
  const [score, setScore] = useState(0)
  const [answerMessage, setAnswerMessage] = useState('')
  const [displayScore, setDisplayScore] = useState(false)
  const [disabled, setDisabled] = useState('')
  const [next, setNext] = useState(false)

  const fetchDataToDisplay = (number) => {
    getQuotes(number)
      .then(data => {
        setQuotes(data)
        setCurrentAnswer(data[0].character)
      })
      .catch(error => console.log('error', error))
  }

  const gameCards = quotes.map(quote => {
    return (
      <Card
        question={quote.quote}
      />
    )
  })

  const handleArrowClick = () => {
    const nextQuote = currentNumber + 1
    removeClassNamesFromButtons()
    if (next) {
      if (nextQuote < quotes.length) {
        setCurrentNumber(nextQuote)
        setAnswerMessage('')
        findMatchingQuote()
        setDisabled('')
        setNext(false)
      } else {
        setDisplayScore(true)
      }
    }
  }

  const removeClassNamesFromButtons = () => {
    const targetCorrect = document.getElementsByClassName('correct')
    const targetIncorrect = document.getElementsByClassName('incorrect')
    if (targetCorrect.length) {
      targetCorrect[0].classList.remove('correct')
    } else if (targetIncorrect.length) {
      targetIncorrect[0].classList.remove('incorrect')
    }
  }

  const restartGame = () => {
    setQuotes([])
    setCurrentNumber(0)
    setAnswerMessage('')
    setCurrentAnswer('')
    setDisplayScore(false)
    setScore(0)
    setDisabled('')
    setNext(false)
  }

  const findMatchingQuote = () => {
    const matchingQuote = quotes[currentNumber + 1]
    const correctAnswer = matchingQuote.character
    setCurrentAnswer(correctAnswer)
  }

  const handleAnswerChoice = (event) => {
    event.preventDefault()
    setNext(true)
    if (event.target.id === currentAnswer) {
      event.target.classList.add('correct')
      setScore(score + 1)
      setAnswerMessage('You got it right!')
      setDisabled('disabled')
    } else {
      event.target.classList.add('incorrect')
      setAnswerMessage('Better luck next time!')
      setDisabled('disabled')
    }
  }

  return (
    <>
    <div className='nav-buttons'>
      <Link to='/'>
        <button className='home'>Home</button>
      </Link>
      {quotes.length && <button className='restart' onClick={restartGame}>Start Over</button>}
    </div>
    {!quotes.length && !displayScore &&
      <div className='start-options'>
        <h2 className='number-header'>Choose Number of Questions</h2>
          <button className='start-button number' onClick={() => fetchDataToDisplay(5)}>5</button>
          <button className='start-button number' onClick={() => fetchDataToDisplay(10)}>10</button>
          <button className='start-button number' onClick={() => fetchDataToDisplay(15)}>15</button>
      </div>
    }
    {quotes.length > 0 && !displayScore &&
      <>
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
              <button className='character-button' id='Monica' onClick={handleAnswerChoice} disabled={disabled}>Monica</button>
              <button className='character-button' id='Joey' onClick={handleAnswerChoice} disabled={disabled}>Joey</button>
              <button className='character-button' id='Rachel' onClick={handleAnswerChoice} disabled={disabled}>Rachel</button>
            </div>
            <div className='buttons-right'>
              <button className='character-button' id='Ross' onClick={handleAnswerChoice} disabled={disabled}>Ross</button>
              <button className='character-button' id='Phoebe' onClick={handleAnswerChoice} disabled={disabled}>Phoebe</button>
              <button className='character-button' id='Chandler' onClick={handleAnswerChoice} disabled={disabled}>Chandler</button>
            </div>
          </div>
          <h3 className='answer-message'>{answerMessage}</h3>
        </div>
      </>
    }
    {displayScore &&
      <>
        <div className='score-results'>
          <h2 className='score-header'>{`You guessed ${score} out of ${quotes.length} correct!`}</h2>
        </div>
      </>
    }
    </>
  )
}

export default Game;
