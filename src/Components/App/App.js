import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Game from '../Game/Game';
import Home from '../Home/Home';
import Score from '../Score/Score';
import Error from '../Error/Error';
import Loading from '../Loading/Loading';

const App = () => {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Header />
      <Home />
      <Game />
      <Score />
      <Error />
      <Loading />
    </div>
  );
}

export default App;
