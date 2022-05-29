import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Amount from '../components/Amount';

export default class Cart extends React.Component {
  state = {
    actualAmount: 1,
  }

  handleCallback = (amount, id) => {
    const { cartItems } = this.props;
    const products = cartItems.find((product) => product.id === id);
    products.quantity = amount;
    this.setState({ actualAmount: products.quantity > 0
      ? products.quantity
      : 1 });
  };

  render() {
    const { cartItems } = this.props;
    const { actualAmount } = this.state;
    return (
      <div>
        <Link to="/">Home</Link>
        <h1>
          Carrinho de Compras
        </h1>
        {cartItems.length > 0 ? (
          <>
            {cartItems.map(({ id, name, price, quantity }) => (
              <div key={ id }>
                <p data-testid="shopping-cart-product-name">{name}</p>
                <p data-testid="shopping-cart-product-quantity">
                  {`Quantidade:${actualAmount > 0 ? actualAmount : quantity}`}
                </p>
                <Amount id={ id } price={ price } callback={ this.handleCallback } />
              </div>
            ))}
            <Link data-testid="checkout-products" to="/checkout">Finalizar</Link>
          </>
        ) : (
          <p data-testid="shopping-cart-empty-message">
            Seu carrinho está vazio
          </p>
        )}
      </div>
    );
  }
}

Cart.propTypes = {
  cartItems: PropTypes.arrayOf(PropTypes.object).isRequired,
};
