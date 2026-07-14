export function useProducts() {
  fetch(`https://dummyjson.com/products/`)
    .then(res => res.json())
    .then(data => console.log(data)) // esto corre cuando la promesa resuelve
  
  console.log("esto se imprime ANTES que el producto") // no espera nada

}
