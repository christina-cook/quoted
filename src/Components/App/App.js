import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Game from '../Game/Game';
import Home from '../Home/Home';
import Score from '../Score/Score';
import Error from '../Error/Error';
import Loading from '../Loading/Loading';
import { Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Header />
      <Route exact path='/' component={Home}/>
      <Route path='/game' component={Game}/>
      <Route path='/score' component={Score}/>
    </>
  );
}

export default App;
