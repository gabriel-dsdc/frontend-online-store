import React from 'react';
import propTypes from 'prop-types';
import { getProduct } from '../services/api';
import CartButton from '../components/CartButton';
import Amount from '../components/Amount';
import Evaluation from '../components/Evaluation';

class Product extends React.Component {
  state = {
    productDetails: {
      attributes: [],
    },
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    getProduct(id).then((productDetails) => this.setState({ productDetails }));
  }

  render() {
    const { productDetails: { title, price, thumbnail, attributes } } = this.state;
    const { match: { params: { id: matchId } }, addToCart } = this.props;
    return (
      <div>
        <CartButton />
        <div>
          <div>
            <p>
              <strong data-testid="product-detail-name">
                {`${title} - R$ ${price}`}
              </strong>

            </p>
            <img src={ thumbnail } alt={ title } />
          </div>
          <div>
            <strong>Especificações Técnicas</strong>
            <ul>
              {attributes.map(({ id, name, value_name: valueName }) => (
                <li key={ id }>
                  <b>{`${name}: `}</b>
                  <span>{valueName}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Amount id={ matchId } price={ price } />
        <button
          data-testid="product-detail-add-to-cart"
          type="button"
          id={ matchId }
          data-name={ title }
          data-price={ price }
          onClick={ addToCart }
        >
          Adicionar ao Carrinho
        </button>
        <Evaluation id={ matchId } />
      </div>
    );
  }
}

Product.propTypes = {
  match: propTypes.shape({
    params: propTypes.shape({
      id: propTypes.string,
    }),
  }).isRequired,
  addToCart: propTypes.func.isRequired,
};

export default Product;
