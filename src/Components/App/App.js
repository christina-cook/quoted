import React from 'react';
import Header from '../Header/Header';
import Game from '../Game/Game';
import Home from '../Home/Home';
import HowTo from '../HowTo/HowTo';
import { Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Header />
      <Route exact path='/' component={Home}/>
      <Route path='/how-to-play' component={HowTo}/>
      <Route path='/game' component={Game}/>
    </>
  );
}

export default App;
