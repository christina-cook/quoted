import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Game from '../Game/Game';
import Home from '../Home/Home';

const App = () => {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Header />
      <Home />
      <Game />
    </div>
  );
}

export default App;
