import React from 'react';
import './HowTo.css';
import { Link } from 'react-router-dom';

const HowTo = () => {
  return (
    <>
      <div className='nav-buttons'>
          <Link to='/'>
            <button className='home'>Home</button>
          </Link>
        </div>
      <div className='how-page'>
        <h2 className='how-header'>How To Play</h2>
        <div className='how-to'>
          <p className='instructions'>
            Are you a <em>Friends</em> fanatic?
            This game will test your knowledge of the TV series by matching memorable quotes with the character who said it.
          </p>
          <br />
          <p className='instructions'>
            To start a game, select the number of questions you'd like to answer (5, 10, or 15).
            A quote will appear on the screen.
            Select the character that matches the quote to reveal whether or not you answered correctly.
            Move on to the next question by clicking the arrow to the right of the card.
            Continue guessing until you've gone through all of the cards.
            Your score will be displayed at the end of the game.
            You can start a new game at any time by clicking the Start Over button at the top right of the screen.
          </p>
          <br />
          <p className='instructions'>
            Ready to see how much you really know about your favorite friends?
            Click the button below to get started!
          </p>
        </div>
        <Link to='/game' className='button-link'>
          <button className='start-button'>Get Started</button>
        </Link>
      </div>
    </>
  )
}

export default HowTo;
