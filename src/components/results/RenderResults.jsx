import YouMayAlsoLikeCard from "@/components/cart/YouMayAlsoLikeCard";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
export default function RenderResults({ results, query }){
    const [searchParams, setSearchParams] = useSearchParams();
    const [products, setProducts] = useState();
    const page = Number(searchParams.get('page')) || 1;
    
    function goToPage(i) {
      setSearchParams((prev)=>{
        const params = new URLSearchParams(prev);
        params.set('page', i);
        return params
      })
    }

    useEffect(()=> { 
      setProducts(results?.products.slice((page - 1 ) * 24, page * 24))
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
            className={`cursor-pointer p-4 rounded text-white ${i + 1  == page ? 'bg-green-400' : 'bg-zinc-600'}`}
            onClick={()=> goToPage(i + 1)}
            >{i + 1}</button>
          )
          }
        </div>
    </>
  )
}