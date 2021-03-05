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
    <>
      <h2>I am the game which holds all the cards!</h2>
      {gameCards}
    </>
  )
}

export default Game;
