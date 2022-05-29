import React from 'react';
import PropTypes from 'prop-types';

class Evaluation extends React.Component {
  state = {
    email: '',
    description: '',
    note: 1,
    evaluations: [],
  };

  componentDidMount() {
    const { id } = this.props;
    this.setState({
      evaluations: JSON.parse(localStorage.getItem(id))
        ? JSON.parse(localStorage.getItem(id))
        : [],
    });
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  };

  handleButton = () => {
    const { evaluations, email, description, note } = this.state;
    const { id } = this.props;
    const newForm = {
      userEmail: email,
      userDescription: description,
      userNote: note,
    };
    const newEvaluations = [...evaluations, newForm];
    this.setState({
      evaluations: newEvaluations,
      email: '',
      description: '',
      note: 1,
    });
    localStorage.setItem(id, JSON.stringify(newEvaluations));
  };

  render() {
    const { email, description, note, evaluations } = this.state;
    return (
      <div>
        <div>
          <h2>Avaliações</h2>
        </div>
        <form>
          <label htmlFor="email">
            Email
            <input
              name="email"
              value={ email }
              onChange={ this.handleChange }
              id="email"
              data-testid="product-detail-email"
              type="email"
            />
          </label>
          <br />
          <label htmlFor="note">
            Nota:
            <select
              id="note"
              onChange={ this.handleChange }
              name="note"
              value={ note }
            >
              <option data-testid="1-rating" value="1">
                1
              </option>
              <option data-testid="2-rating" value="2">
                2
              </option>
              <option data-testid="3-rating" value="3">
                3
              </option>
              <option data-testid="4-rating" value="4">
                4
              </option>
              <option data-testid="5-rating" value="5">
                5
              </option>
            </select>
          </label>
          <br />
          <label htmlFor="description">
            Descrição:
            <textarea
              name="description"
              value={ description }
              onChange={ this.handleChange }
              id="description"
              data-testid="product-detail-evaluation"
              cols="50"
              rows="5"
            />
          </label>
          <br />
          <button
            data-testid="submit-review-btn"
            type="button"
            onClick={ this.handleButton }
          >
            Enviar
          </button>
        </form>
        <div>
          {evaluations.length > 0 ? (
            evaluations.map((evaluation, index) => (
              <div key={ index }>
                <h2>{ evaluation.userEmail }</h2>
                <h3>{ evaluation.userNote }</h3>
                <p>{ evaluation.userDescription }</p>
              </div>
            ))
          ) : (
            <span>Nenhuma avaliação</span>
          )}
        </div>
      </div>
    );
  }
}

Evaluation.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Evaluation;
