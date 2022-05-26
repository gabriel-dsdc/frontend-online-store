import React from 'react';
import { Link } from 'react-router-dom';
import Categories from '../components/Categories';
import ProductCard from '../components/ProductsCard';
import { getProductsFromCategoryAndQuery } from '../services/api';

export default class Home extends React.Component {
  constructor() {
    super();
    this.onInputChange = this.onInputChange.bind(this);
    this.getProducts = this.getProducts.bind(this);
    this.state = {
      searchQuery: '',
      isListEmpty: true,
      productsList: [],
      prodCategory: '',
    };
  }

  onInputChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  async getProducts() {
    const { searchQuery, prodCategory } = this.state;
    const searchResult = await getProductsFromCategoryAndQuery(prodCategory, searchQuery);
    if (searchResult.results) {
      this.setState({ isListEmpty: false });
    }
    this.setState({ productsList: searchResult.results });
  }

  render() {
    const { searchQuery, isListEmpty, productsList } = this.state;
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
        <Link data-testid="shopping-cart-button" to="/cart">
          Carrinho
        </Link>
        <br />
        <Categories />
        <div>
          {isListEmpty ? <p>Nenhum produto foi encontrado</p> : (
            productsList.map((product) => (
              <ProductCard
                key={ product.id }
                name={ product.title }
                img={ product.thumbnail }
                price={ product.price }
              />
            )))}
        </div>
      </div>
    );
  }
}

/* function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </p>
      <input data-testid="query-input" />
      <button type="button" data-testid="query-button">Buscar</button>
      <br />
      <Link data-testid="shopping-cart-button" to="/cart">Carrinho</Link>
      <Categories />
    </div>
  );
}

export default Home;
 */
