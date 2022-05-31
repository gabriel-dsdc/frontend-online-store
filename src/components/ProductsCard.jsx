import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class ProductCard extends React.Component {
  render() {
    const {
      id,
      name,
      img,
      price,
      stock,
      shipping: { free_shipping: freeShipping },
      addToCart } = this.props;
    return (
      <div data-testid="product">
        <Link data-testid="product-detail-link" to={ `/product/${id}` }>
          <img src={ img } alt={ name } />
          <h3>{ name }</h3>
          <h3>{ price }</h3>
        </Link>
        {freeShipping && <span data-testid="free-shipping">Frete Grátis</span>}
        <br />
        <button
          data-testid="product-add-to-cart"
          type="button"
          id={ id }
          data-name={ name }
          data-price={ price }
          data-stock={ stock }
          onClick={ addToCart }
        >
          Adicionar ao Carrinho
        </button>
      </div>
    );
  }
}

ProductCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  stock: PropTypes.number.isRequired,
  shipping: PropTypes.shape({
    free_shipping: PropTypes.bool,
  }).isRequired,
  addToCart: PropTypes.func.isRequired,
};
