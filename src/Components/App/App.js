import React, { useState, useEffect } from 'react';
import './App.css';
import Header from '../Header/Header';
import Game from '../Game/Game';
import Home from '../Home/Home';
import HowTo from '../HowTo/HowTo';
// import Error from '../Error/Error';
// import Loading from '../Loading/Loading';
import { Route } from 'react-router-dom';
import { getQuotes } from '../../ApiCalls';

const App = () => {
  const [quotes, setQuotes] = useState([])

  useEffect(() => {
    getQuotes()
      .then(data => setQuotes(data))
      .catch(error => console.log('error', error))
  })

  return (
    <>
      <Header />
      <Route exact path='/' component={Home}/>
      <Route path='/how-to-play' component={HowTo}/>
      <Route path='/game' render={() => <Game quotes={quotes}/>}/>
    </>
  );
}

export default App;
