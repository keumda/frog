import React, { Component } from 'react';
import logo from './logo.svg';
import Inventory from './componets/Inventory';
import BookList from './componets/BookList';
import './App.css';

/*
function getAnimals() {
  // TODO
  // fetch('localhost:9000/api/animals').then...
  let animals = [
      { name: '개구리', sound: '개굴개굴' },
      { name: '황소개구리', sound: '개굴개굴' },
      { name: '토끼', sound: '토끼토끼' },
  ]
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(animals)
    }, 5000)
  })
}
*/

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Inventory></Inventory>
          <BookList/>
        </header>
      </div>
    );
  }
}

export default App;
