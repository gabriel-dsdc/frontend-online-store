import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import Amount from '../components/Amount';

export default class Cart extends React.Component {
  state = {
    actualAmount: 1,
  }

  handleCallback = (id, index) => {
    const { cartItems } = this.props;
    const { actualAmount } = this.state;
    const products = cartItems.find((product) => product.id === id);
    products.quantity += index;
    this.setState({ actualAmount: actualAmount < 1 ? 1 : products.quantity });
  };

  render() {
    const { cartItems } = this.props;
    return (
      <div>
        <Link to="/">Home</Link>
        <h1>
          Carrinho de Compras
        </h1>
        {cartItems.length > 0 ? (
          <>
            {cartItems.map(({ id, name, price, quantity, stock }) => (
              <div key={ id }>
                <p data-testid="shopping-cart-product-name">{name}</p>
                <p data-testid="shopping-cart-product-quantity">
                  { quantity }
                </p>
                <Amount
                  id={ id }
                  price={ Number(price) }
                  qtdMin={ quantity }
                  qtdMax={ stock }
                  callback={ this.handleCallback }
                />
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
