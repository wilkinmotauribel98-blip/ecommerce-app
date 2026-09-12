import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchPageProducts } from "../../api/products";
import ProductCard, { optimizedImg } from "../product/ProductCard";
import AllProductsSkeleton from "./AllProductsSkeleton";
import { preloadImages, minDelay } from "@/utils/loading";

export default function RenderAllProducts (){
  const [searchParams, setSearchParams] = useSearchParams()
  const [products, setProducts] = useState()
  const [loading, setLoading] = useState(true)
  const page = Number(searchParams.get('page')) || 1;
  useEffect(()=>{
    let cancelled = false;
    setLoading(true);
    const startedAt = Date.now();
    fetchPageProducts(page - 1).then(e=>{
      if (cancelled) return;
      // Espera al fetch + precarga de imágenes + tiempo mínimo,
      // para que el skeleton sea perceptible y no haya pop-in.
      Promise.all([
        preloadImages(e.products.map(p => optimizedImg(p.images?.[0], 280, 280))),
        minDelay(600, startedAt),
      ]).then(()=>{
        if (cancelled) return;
        setProducts(e.products);
        setLoading(false);
      });
    })
    window.scrollTo(0, 0);
    return ()=> { cancelled = true; };
  }, [page])
  
  function goToPage(i) {
      setSearchParams((prev)=>{
        const params = new URLSearchParams(prev);
        params.set('page', i);
        return params
      })
    }
  
  
  const pages = Array.from({length: Math.ceil(194 / 24)}).map((_,i) => i);
    
  if(loading || !products) return <AllProductsSkeleton />
  
   return(
    <section className="flex max-w-360 flex-col gap-10 w-[95%] m-auto mt-10" >
      <section className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))]  sm:grid-cols-[repeat(auto-fill,minmax(255px,1fr))] grid-rows-4  gap-5">
        {products.map(pr =><ProductCard variant="allProducts" product={pr} key={pr.id} />)}
      </section>
      <div className="flex gap-2 w-fit m-auto">
        {pages.map(e => <button
        key={e}
        className={`py-2 px-2.5 cursor-pointer ${e+ 1 == page ? 'bg-green-400' : 'bg-zinc-500'}  rounded`}
        onClick={()=> goToPage(e + 1)}
         >{e + 1}</button>)}
      </div>
    </section>
   )
}