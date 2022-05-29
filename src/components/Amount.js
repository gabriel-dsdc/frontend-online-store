import React from 'react';
import PropTypes from 'prop-types';
import { getProduct } from '../services/api';

class Amount extends React.Component {
  state = {
    iten: [0],
    amount: 1,
    priceActual: 0,
  };

  buttonUp = () => {
    const { id, price, callback } = this.props;
    console.log(id);
    const { iten, amount } = this.state;
    getProduct(id).then((product) => this.setState({
      iten: [...iten, product],
      amount: iten.length ? iten.length + 1 : 1,
      priceActual: iten.length ? price * (iten.length + 1) : price,
    })).then(() => callback(amount, id));
  };

  buttonDown = () => {
    const LAST = -1;
    const { price } = this.props;
    const { iten } = this.state;
    this.setState({
      iten: iten.slice(0, LAST),
      amount: iten.length > 1 ? iten.length - 1 : 1,
      priceActual: iten.length > 1 ? price * (iten.length - 1) : price,
    });
  };

  render() {
    const { amount, priceActual } = this.state;
    const { price } = this.props;
    return (
      <div>
        <button
          type="button"
          onClick={ this.buttonDown }
          data-testid="product-decrease-quantity"
        >
          -
        </button>
        <span>{ amount }</span>
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
};

export default Amount;
