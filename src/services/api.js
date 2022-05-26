export async function getCategories() {
  const result = await fetch('https://api.mercadolibre.com/sites/MLB/categories')
    .then((itemData) => itemData.json())
    .catch((error) => error);
  // console.log(result)
  return result;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const result = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`)
    .then((itemData) => itemData.json())
    .catch((error) => error);
  return result;
}
