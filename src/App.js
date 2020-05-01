import React from 'react';
import Navbar from './components/NavBar';
import Jumbotron from './components/pages/jumbotron/jumbotron';
import Game from './components/pages/game';

function App() {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <Game />
    </div>
  );
}

export default App;
