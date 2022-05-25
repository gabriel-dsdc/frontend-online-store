import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <p data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </p>
      <Link data-testid="shopping-cart-button" to="/cart">Carrinho</Link>
    </div>
  );
}

export default Home;
