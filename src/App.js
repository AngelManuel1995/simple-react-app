import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>console.log('Esto se debería ver reflejado')</code> and save to reload.
          </p>
          <p>HOLA Cómo estas?</p>
          <p>Muy bien gracias y tú?</p>
          <p>I waw change on the feature branch</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
