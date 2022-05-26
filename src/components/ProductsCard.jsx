import React from 'react';
import PropTypes from 'prop-types';

export default class ProductCard extends React.Component {
  render() {
    const { name, img, price } = this.props;
    return (
      <div data-testid="product">
        <img src={ img } alt={ name } />
        <h3>{ name }</h3>
        <h3>{ price }</h3>
      </div>
    );
  }
}

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
