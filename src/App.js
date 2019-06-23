import React, { Component } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Product from './components/Product';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';

class App extends Component {
  render() {
    return (
      <React.Fragment>
         <Navbar/>
         <ProductList/>
      </React.Fragment>
      
    );
  }
}

export default App;
