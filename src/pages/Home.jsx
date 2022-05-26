import React from 'react';
import { Link } from 'react-router-dom';
import Categories from '../components/Categories';

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </p>
      <Link data-testid="shopping-cart-button" to="/cart">Carrinho</Link>
      <Categories />
    </div>
  );
}

export default Home;
