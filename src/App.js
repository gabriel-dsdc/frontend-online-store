import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Product from './pages/Product';
import { addItem, getCartItems } from './services/api';

class App extends React.Component {
  state = {
    cartItems: [],
  };

  addToCart = (event) => {
    addItem(event);
    this.setState({ cartItems: getCartItems() });
  }

  render() {
    const { cartItems } = this.state;
    return (
      <div className="App">
        <BrowserRouter>
          <Route
            exact
            path="/"
            render={ () => (
              <Home addToCart={ this.addToCart } />
            ) }
          />
          <Route path="/cart" render={ () => (<Cart cartItems={ cartItems } />) } />
          <Route
            path="/product/:id"
            render={ (routerProps) => (
              <Product { ...routerProps } addToCart={ this.addToCart } />) }
          />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
