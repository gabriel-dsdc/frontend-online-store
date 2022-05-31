import React from 'react';
import PropTypes from 'prop-types';
import CartButton from '../components/CartButton';
import Categories from '../components/Categories';
import ProductCard from '../components/ProductsCard';
import { getProductsFromCategoryAndQuery } from '../services/api';

export default class Home extends React.Component {
  state = {
    searchQuery: '',
    isListEmpty: true,
    productsList: [],
    prodCategory: '',
  };

  onInputChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }

  getProducts = async () => {
    const { searchQuery, prodCategory } = this.state;
    const searchResult = await getProductsFromCategoryAndQuery(prodCategory, searchQuery);
    if (searchResult.results.length > 0) {
      this.setState({ isListEmpty: false, productsList: searchResult.results });
    } else {
      this.setState({ isListEmpty: true });
    }
  }

  filterCategory = ({ target: { name } }) => {
    const categorySelected = name;
    this.setState({ prodCategory: categorySelected }, () => this.getProducts());
  }

  render() {
    const { searchQuery, isListEmpty, productsList } = this.state;
    const { addToCart } = this.props;
    return (
      <div>
        <h1>Home</h1>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <input
          name="searchQuery"
          data-testid="query-input"
          value={ searchQuery }
          onChange={ this.onInputChange }
        />
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.getProducts }
        >
          Buscar
        </button>
        <br />
        <CartButton />
        <br />
        <Categories onCategoryClick={ this.filterCategory } />
        <div>
          {isListEmpty ? (
            <p>Nenhum produto foi encontrado</p>
          ) : (
            productsList.map((product) => (
              <ProductCard
                key={ product.id }
                id={ product.id }
                name={ product.title }
                img={ product.thumbnail }
                price={ product.price }
                stock={ product.available_quantity }
                addToCart={ addToCart }
                shipping={ product.shipping }
              />
            ))
          )}
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  addToCart: PropTypes.func.isRequired,
};
