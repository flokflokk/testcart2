import React, { Component } from 'react';
import './App.css';

import ProductRoute from './view/products/ProductRoute';
import AppHeader from './components/Appheader/AppheaderSales';
import HomeRoute from './view/home/HomeRoute';
import StockRoute from './view/stock/StockRoute';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader/>
        <HomeRoute/>
        <StockRoute/>
        <ProductRoute/>
      </div>
    );
  }
}

export default App;
