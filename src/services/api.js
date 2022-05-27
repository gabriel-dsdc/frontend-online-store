export async function getCategories() {
  const result = await fetch('https://api.mercadolibre.com/sites/MLB/categories')
    .then((itemData) => itemData.json())
    .catch((error) => error);
  return result;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const result = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`)
    .then((itemData) => itemData.json())
    .catch((error) => error);
  return result;
}

export const getProduct = (productId) => (
  fetch(`https://api.mercadolibre.com/items/${productId}`)
    .then((response) => response.json()
      .then((productDetails) => (productDetails)))
    .catch((error) => error)
);

export const getCartItems = () => JSON.parse(localStorage.getItem('cart_items')) || [];

export const addItem = ({ target: { id, dataset: { name, price } } }) => {
  const prevItems = getCartItems();
  const foundEqual = prevItems.find((item) => (id === item.id)) || {};
  const invalidIndex = -1;
  if (prevItems.indexOf(foundEqual) !== invalidIndex) {
    prevItems[prevItems.indexOf(foundEqual)].quantity += 1;
    const newItem = JSON.stringify([...prevItems]);
    localStorage.setItem('cart_items', newItem);
  } else {
    const newItem = JSON.stringify([...prevItems, { id, name, price, quantity: 1 }]);
    localStorage.setItem('cart_items', newItem);
  }
};
