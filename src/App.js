import React, { Component } from "react";
import {Switch,Route, Link,} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Product from './components/Product';
import Details from './components/Details';
import Cart from './components/Cart/Cart';
import Modal from './components/Modal';
import Default from './components/Default';

class App extends Component {
  render() {
    return (
      <React.Fragment>
         <Navbar/>
         <Switch>
          <Route exact path="/" component={ProductList}></Route>
          <Route exact path="/details" component={Details}></Route>
          <Route exact path="/cart" component={Cart}></Route>
          <Route component={Default}></Route>
         </Switch>
         <Modal/>
      </React.Fragment>
      
    );
  }
}

export default App;
