import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Cart extends React.Component {
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
            {cartItems.map(({ id, name, price, quantity }) => (
              <div key={ id }>
                <p data-testid="shopping-cart-product-name">{name}</p>
                <p data-testid="shopping-cart-product-quantity">
                  {`Quantidade: ${quantity}`}
                </p>
                <p>{`Preço: R$ ${price}`}</p>
              </div>
            ))}
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
