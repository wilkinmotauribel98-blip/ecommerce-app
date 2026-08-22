export async function fetchProduct(id) {
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const json = await res.json();
  return json
}

export async function fetchCategories() {
  const res = await fetch(`https://dummyjson.com/products/categories`);
  const json = await res.json();
  return json
}

export async function fetchProductsByCategory(category) {
  const res = await fetch(`https://dummyjson.com/products/category/${category}`);
  const json = await res.json();
  return json
}

export async function searchProducts(query) {
  const res = await fetch(`https://dummyjson.com/products/search?q=${query}`);
  const json = await res.json();
  return json
}
