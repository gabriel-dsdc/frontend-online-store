import React from 'react';

class Checkout extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label htmlFor="inputName">
            Nome:
            <input
              data-testid="checkout-fullname"
              type="text"
              id="inputName"
              name="name"
            />
          </label>
          <br />
          <label htmlFor="inputEmail">
            Email:
            <input
              data-testid="checkout-email"
              type="email"
              id="inputEmail"
              name="email"
            />
          </label>
          <br />
          <label htmlFor="cpfInput">
            CPF:
            <input
              data-testid="checkout-cpf"
              type="text"
              id="cpfInput"
              name="cpf"
            />
          </label>
          <br />
          <label htmlFor="PhoneInput">
            Telefone:
            <input
              data-testid="checkout-phone"
              type="text"
              id="PhoneInput"
              name="phone"
            />
          </label>
          <br />
          <label htmlFor="cepInput">
            CPF:
            <input
              data-testid="checkout-cep"
              type="text"
              id="cepInput"
              name="cep"
            />
          </label>
          <br />
          <label htmlFor="inputAddress">
            Address:
            <input
              data-testid="checkout-address"
              type="text"
              id="inputAddress"
              name="address"
            />
          </label>
        </form>
      </div>
    );
  }
}

export default Checkout;
