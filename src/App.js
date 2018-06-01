import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LineWrapper from './components/LineWrapper'
import MarketPriceUSD from './components/MarketPriceUSD';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <MarketPriceUSD />
      </div>
    );
  }
}

export default App;
