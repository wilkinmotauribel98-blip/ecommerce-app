import { useParams } from "react-router-dom"
import { useState, useEffect  } from "react";
import BreadCrumbSection from "@/sections/BreadCrumbSection"
import CategoryContent from "@/components/category/CategoryContent";
import CategoryContentSkeleton from "@/components/category/CategoryContentSkeleton";

import useFetch from "@/hooks/useFetch";
import ErrorState from "@/components/ui/ErrorState";


export default function CategoryPage() {
  const [products, setProducts] = useState();
  const [brands, setBrands ] = useState()
  const { category } = useParams();
  const CATEGORY_URL = `https://dummyjson.com/products/category/${category}`
  const { error, data, loading, retry } = useFetch(CATEGORY_URL)

  useEffect(()=>{
    if(data){
      setProducts(data.products)
      setBrands(()=>{
        return data.products.map(p => p.brand).reduce((acc, p)=>  { 
        if(!acc.includes(p)) acc.push(p)
      return acc
   },[])
      })
    }
  },[data] )

  if(error) {
        return(
          <ErrorState 
            title={error.message === "HTTP 404" ? "Category not found" : "Couldn't load this category"}
            message="Check your connection and try again."
            onRetry={error.message === "HTTP 404" ? undefined : retry}
          />
        )
      }


  return(
    <main className="max-w-360 relative m-auto w-[95%] ">
      <BreadCrumbSection title={category?.replace(/-/g," ") ?? ''} cart={true} loading={loading && !products}/>
      <h1 className="text-white text-2xl my-5 pl-2 capitalize">{category?.replace(/-/g,' ')}</h1>
      {(loading || !products)
        ? <CategoryContentSkeleton />
        : <CategoryContent content={products} brands={brands}/>}

    </main>
  )
}