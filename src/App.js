import React, { Component } from 'react';
import './App.css';
import MarketPriceUSD from './components/MarketPriceUSD';
import BTCinCirculation from './components/BTCinCirculation';
import MarketCapitalization from './components/MarketCapitalization';
import USDExchangeTradeVolume from './components/USDExchangeTradeVolume';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MarketPriceUSD />
        <BTCinCirculation />
        <MarketCapitalization />
        <USDExchangeTradeVolume />
      </div>
    );
  }
}

export default App;
