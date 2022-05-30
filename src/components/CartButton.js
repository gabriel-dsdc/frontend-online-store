import React from 'react';
import { Link } from 'react-router-dom';

class CartButton extends React.Component {
  state = {
    itens: [],
  };

  componentDidMount() {
    this.setCartQuantity();
  }

  componentDidUpdate(__prevProps, prevState) {
    const { itens } = this.state;
    if (itens === prevState.itens) {
      this.setCartQuantity();
    }
  }

  setCartQuantity = () => {
    this.setState({
      itens: JSON.parse(localStorage.getItem('cart_items'))
        ? JSON.parse(localStorage.getItem('cart_items'))
        : [],
    });
  };

  render() {
    const { itens } = this.state;
    return (
      <Link data-testid="shopping-cart-button" to="/cart">
        Carrinho
        <span data-testid="shopping-cart-size">
          {itens.reduce((acc, iten) => acc + iten.quantity, 0)}
        </span>
      </Link>
    );
  }
}

export default CartButton;
