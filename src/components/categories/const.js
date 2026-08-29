export const categories = [
 {
 image: 
 'https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/1.webp',
 total: 5,
 category: 'fragrances'
 },
 {
 image: 
 'https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/1.webp',
 total: 5,
 category: 'furniture'
 },
 {
 image: 'https://cdn.dummyjson.com/product-images/groceries/apple/1.webp',
 total: 27,
 category: 'groceries'
 },
 {
 image: 
 'https://cdn.dummyjson.com/product-images/mens-shoes/nike-air-jordan-1-red-and-black/1.webp',
 total: 5,
 category: 'mens-shoes'
 },
 {
 image: 
 'https://cdn.dummyjson.com/product-images/home-decoration/decoration-swing/1.webp',
 total: 5,
 category: 'home-decoration'
 },
 {
 image: 
 'https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp',
 total: 5,
 category: 'beauty'
 },
 {
 image: 
 'https://cdn.dummyjson.com/product-images/womens-shoes/black-&-brown-slipper/1.webp',
 total: 5,
 category: 'womens-shoes'
 },
 {
 image: 
 'https://cdn.dummyjson.com/product-images/mobile-accessories/amazon-echo-plus/1.webp',
 total: 14,
 category: 'mobile-accessories'
 },
 {
 image: 
 'https://cdn.dummyjson.com/product-images/mens-shirts/blue-&-black-check-shirt/1.webp',
 total: 5,
 category: 'mens-shirts'
 },
 {
 image: 
 'https://cdn.dummyjson.com/product-images/womens-dresses/black-women\'s-gown/1.webp',
 total: 5,
 category: 'womens-dresses'
 },
 {
 image: 
 'https://cdn.dummyjson.com/product-images/motorcycle/generic-motorcycle/1.webp',
 total: 5,
 category: 'motorcycle'
 },
 {
 image: 'https://cdn.dummyjson.com/product-images/smartphones/iphone-5s/1.webp',
 total: 16,
 category: 'smartphones'
 },
 {
 image: 
 'https://cdn.dummyjson.com/product-images/mens-watches/brown-leather-belt-watch/1.webp',
 total: 6,
 category: 'mens-watches'
 },
 {
 image: 
 'https://cdn.dummyjson.com/product-images/sports-accessories/american-football/1.webp',
 total: 17,
 category: 'sports-accessories'
 },
 {
 image: 'https://cdn.dummyjson.com/product-images/tops/blue-frock/1.webp',
 total: 5,
 category: 'tops'
 },
 {
 image: 
 'https://cdn.dummyjson.com/product-images/womens-watches/iwc-ingenieur-automatic-steel/1.webp',
 total: 5,
 category: 'womens-watches'
 },
 {
 image: 
 'https://cdn.dummyjson.com/product-images/kitchen-accessories/bamboo-spatula/1.webp',
 total: 30,
 category: 'kitchen-accessories'
 },
 {
 image: 
 'https://cdn.dummyjson.com/product-images/laptops/apple-macbook-pro-14-inch-space-grey/1.webp',
 total: 5,
 category: 'laptops'
 },
 {
 image: 
 'https://cdn.dummyjson.com/product-images/tablets/ipad-mini-2021-starlight/1.webp',
 total: 3,
 category: 'tablets'
 },
 {
 image: 
 'https://cdn.dummyjson.com/product-images/sunglasses/black-sun-glasses/1.webp',
 total: 5,
 category: 'sunglasses'
 },
 {
 image: 'https://cdn.dummyjson.com/product-images/vehicle/300-touring/1.webp',
 total: 5,
 category: 'vehicle'
 },
 {
 image: 
 'https://cdn.dummyjson.com/product-images/womens-jewellery/green-crystal-earring/1.webp',
 total: 3,
 category: 'womens-jewellery'
 },
 {
 image: 
 'https://cdn.dummyjson.com/product-images/womens-bags/blue-women\'s-handbag/1.webp',
 total: 5,
 category: 'womens-bags'
 },
 {
 image: 
 'https://cdn.dummyjson.com/product-images/skin-care/attitude-super-leaves-hand-soap/1.webp',
 total: 3,
 category: 'skin-care'
 }
 ]

 
 export  const recolector = async ()=>{
  const w = [];
   await Promise.all(categories.map(e => fetch(`${e.url}`).then(e => e.json()).then(e => w.push(e))))
   const b = w.map(e => {
    return {image: e.products[0].images[0], total : e.total , category: e.products[0].category}
   })
   console.log(b);
   
 }  