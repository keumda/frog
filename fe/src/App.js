import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { ready: false, selected: null, animals: [] };
    getAnimals().then(animals => {
      this.setState({animals, ready: true})
    })
  }

  selectAnimal = (e) => {
    this.setState({ selected: e });
  }

  render() {
    let mola = { name: 'mola', sound: 'molamola' }
    let selectedAnimal = this.state.selected || mola

    let options = [mola].concat(this.state.animals).map(animal => ({
      label: animal.name,
      value: animal,
    }))

    let num = [1, 2, 3, 4, 5]
    let frogFace = '\u{1F438}'
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>

          Learn Frog
          <Select onChange={this.selectAnimal} value={undefined} options={options} />
          는
            {selectedAnimal.sound}
          !!!!!!!!!!!{frogFace}
        </header>
      </div>
    );
  }
}

class Select extends React.Component {
  constructor(props) {
    super(props);
  }

  helperHandler = (e) => {
    let selectedItem = this.props.options[e.target.value]
    this.props.onChange(selectedItem.value)
  }

  render() {
    return (
      <select name="select" onChange={this.helperHandler}>
        {this.props.options.map((option, idx) => {
          return (<option value={idx} selected={this.props.selected === idx}>{option.label}</option>);
        })}
      </select>
    )
  }
}

export default App;
