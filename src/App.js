import React from 'react';
import Navbar from './components/NavBar';
import Jumbotron from './components/pages/jumbotron/jumbotron';
import Card from './components/pages/cards/cards';

function App() {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <Card />
    </div>
  );
}

export default App;
