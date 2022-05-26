import React from 'react';
import { getCategories } from '../services/api';

export default class Categories extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  async componentDidMount() {
    const categoriesList = await getCategories();
    this.setState({ categories: categoriesList });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        {categories.map((category) => (
          <button
            data-testid="category"
            type="button"
            key={ category.id }
          >
            {category.name}
          </button>
        ))}
      </div>
    );
  }
}
