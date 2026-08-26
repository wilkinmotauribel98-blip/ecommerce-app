import { useParams } from "react-router-dom"
import { fetchProductsByCategory } from '@/api/products.js'
import { useState, useEffect  } from "react";
import BreadCrumbSection from "@/sections/BreadCrumbSection"
import CategoryContent from "@/components/category/CategoryContent";

export default function CategoryPage() {
  const [products, setProducts] = useState();
  const [brands, setBrands ] = useState()
  const { category } = useParams();
  useEffect(()=>{fetchProductsByCategory(category).then(e=>{
    setProducts(e.products)
    setBrands(e.brands);
    
  })},[] )

  if(!products) return
  return(
    <main className="max-w-360 relative m-auto w-[95%] ">
      <BreadCrumbSection title={category.replace(/-/g," ")} cart={true}/>
      <h1 className="text-white text-2xl my-5 pl-2">{category.replace(/-/g,' ')}</h1>
      <CategoryContent content={products} brands={brands}/>

    </main>
  )
}