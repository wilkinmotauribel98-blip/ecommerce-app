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
  const products = json.products
  const brands = json.products.map(e => e.brand).reduce((acc, p)=>  { 
    if(!acc.includes(p)) acc.push(p)
      return acc
   },[])
  
  return {products, brands}
}

export async function fetchAllProducts(limit = 194) {
  const res = await fetch(`https://dummyjson.com/products?limit=${limit}&select=id,title,price,discountPercentage,rating,stock,brand,category,thumbnail,images,description`);
  if (!res.ok) throw new Error(`Failed to fetch products: ${res.status}`);
  const json = await res.json();
  return json.products ?? [];
}

export async function searchProducts(query) {
  const q = encodeURIComponent(query.trim());
  if (!q) return { products: [] };
  const res = await fetch(`https://dummyjson.com/products/search?q=${q}&limit=10&select=id,title,price,thumbnail,category`);
  if (!res.ok) throw new Error(`Search failed: ${res.status}`);
  const json = await res.json();
  return json
}
