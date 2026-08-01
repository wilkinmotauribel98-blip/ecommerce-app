import {useEffect, useState} from 'react';
import { useProducts } from '../../hooks/useProducts';
import { ProductCard } from '../../components/product/ProductCard';



export function ShopByCategory() {
  const products = useProducts((state) => state.products);
  const isLoading = useProducts((state) => state.isLoading);
  

  const index = [9, 6, 7, 5, 2,0,1, 8];
  const categories = products.reduce((acc, product,) => {
      if (!acc.includes(product.category)) {
        acc.push(product.category);
      }
      return acc;
    }, []).map((category) => {
      return {
        products: products.filter((product) => product.category === category).length,
        title: category,
        images: products.find((product) => product.category === category).images,
      };
    });
   if (categories.length === 0) return
  
  return (
    <section className="w-[95%] sm:w-[calc(100%-2rem)] h-auto bg-black m-auto   ">
      <div className="flex justify-between items-center px-1 py-4">
        <h2 className="text-white  text-xl sm:text-2xl">Shop by Category</h2>
        <span className="text-emerald-500 text-sm sm:text-lg lg:text-xl">View All</span>
      </div>
      <div className='grid gap-4 h-62 overflow-y-hidden p-2 grid-cols-[repeat(auto-fill,minmax(150px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(172px,1fr))]  ' >
        {index.map((i) => (
        <ProductCard key={categories[i].title} product={categories[i]} shopStyle={true} />
      )) }
      </div>
    </section>
  )

}