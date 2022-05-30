import React from 'react';
import PropTypes from 'prop-types';
import { getProduct } from '../services/api';

class Amount extends React.Component {
  state = {
    iten: [0],
    priceActual: 0,
  };

  buttonUp = () => {
    const { id, price, callback } = this.props;
    const { iten } = this.state;
    const ONE = 1;
    getProduct(id).then((product) => {
      const newState = {
        iten: [...iten, product],
        amount: iten.length ? iten.length + 1 : 1,
        priceActual: iten.length ? price * (iten.length + 1) : price,
      };
      this.setState(newState);
    });
    return callback && callback(id, ONE);
  }

  buttonDown = () => {
    const LAST = -1;
    const { id, price, callback } = this.props;
    const { iten } = this.state;
    const newState = {
      iten: iten.slice(0, LAST),
      amount: iten.length > 1 ? iten.length - 1 : 1,
      priceActual: iten.length > 1 ? price * (iten.length - 1) : price,
    };
    this.setState(newState, callback && callback(id, LAST));
  }

  render() {
    const { priceActual } = this.state;
    const { price, disable } = this.props;
    return (
      <div>
        <button
          type="button"
          onClick={ this.buttonDown }
          data-testid="product-decrease-quantity"
          disabled={ disable <= 1 }
        >
          -
        </button>
        <button
          type="button"
          onClick={ this.buttonUp }
          data-testid="product-increase-quantity"
        >
          +
        </button>
        { priceActual > 0
          ? <p>{`Preço: R$ ${priceActual}`}</p>
          : <p>{`Preço: R$ ${price}`}</p>}
      </div>
    );
  }
}

Amount.propTypes = {
  id: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  callback: PropTypes.func.isRequired,
  disable: PropTypes.number.isRequired,
};

export default Amount;
