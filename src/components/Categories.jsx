import React from 'react';
import PropTypes from 'prop-types';
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
    const { onCategoryClick } = this.props;
    return (
      <div>
        {categories.map((category) => (
          <button
            data-testid="category"
            name={ category.id }
            type="button"
            key={ category.id }
            onClick={ onCategoryClick }
          >
            {category.name}
          </button>
        ))}
      </div>
    );
  }
}

Categories.propTypes = {
  onCategoryClick: PropTypes.func.isRequired,
};
