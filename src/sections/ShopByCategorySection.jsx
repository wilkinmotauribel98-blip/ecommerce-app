import {useEffect, useState} from 'react';
import { useProducts } from '../hooks/useProducts';
import { ProductCard } from '../components/product/ProductCard';



export default function ShopByCategorySection() {
  const products = useProducts((state) => state.categoryProducts);
  const isLoading = useProducts((state) => state.isLoading);
  

  
  const categories = products.map((category) => {
      return {
        products: category.total ,
        title: category.category,
        images: category.images,
      };
    });
   if (categories.length === 0) return
  
  return (
    <section className="w-[95%] sm:w-[calc(100%-2rem)] h-auto bg-black m-auto   ">
      <div className="flex justify-between items-center px-1 py-4">
        <h2 className="text-white text-xl sm:text-2xl">Shop by Category</h2>
        <span className="text-emerald-500 text-sm sm:text-lg lg:text-xl">View All</span>
      </div>
      <div className='grid gap-4 h-62 overflow-y-hidden p-2 grid-cols-[repeat(auto-fill,minmax(160px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(172px,1fr))]  ' >
        {categories.map((i) => (
        <ProductCard key={i.title} product={i} shopStyle={true} />
      )) }
      </div>
    </section>
  )

}