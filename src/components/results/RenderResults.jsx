import YouMayAlsoLikeCard from "@/components/cart/YouMayAlsoLikeCard";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { searchProducts } from "@/api/products";
export default function RenderResults({ results }){
    const [page, setPage] = useState(0)
    const [products, setProducts] = useState()
    
  
    useEffect(()=> { 
      setProducts(results?.products.slice(page * 24, (page + 1) * 24))
    }, [page, results])
    
  return(
    <>
      <p className="text-zinc-400 text-xl font-medium ">{results.products.length} Results found</p>
      <section className="grid mt-7  w-full grid-cols-[repeat(auto-fill,minmax(150px,1fr))] grid-rows-3 md:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-5"> 
            {products?.map((product) => (
              <YouMayAlsoLikeCard category={true} key={product.id} product={product} />
            ))}
      </section>

      <div className="flex gap-2 w-fit m-auto mt-10">
          {
            results.products.length > 24 && Array.from({length: Math.ceil(results?.products.length / 24)}, (_,i) => 
            <button
            aria-label={`Page ${i + 1}`}
            key={i} 
            className={` cursor-pointer p-4 rounded text-white ${i == page ? 'bg-green-400' : 'bg-zinc-600'}`}
            onClick={()=> setPage(i)}
            
            >{i + 1}</button>
          )
          }
        </div>
    </>
  )
}