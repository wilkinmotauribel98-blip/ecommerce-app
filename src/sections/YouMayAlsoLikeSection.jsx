import { useState, useEffect } from "react";
import { useCart } from "@/hooks/useCart";
import YouMayAlsoLikeCard from "../components/cart/YouMayAlsoLikeCard";
import YouMayAlsoLikeSkeleton from "../components/cart/YouMayAlsoLikeSkeleton";
import { optimizedImg } from "@/components/product/ProductCard";
import { preloadImages, minDelay } from "@/utils/loading";

export default function YouMayAlsoLikeSection(){
  const [products, setProducts ] = useState()
  const [loading, setLoading ] = useState(true)
  const fecthRecomndedProducts = useCart((state)=> state.fecthRecomndedProducts)

  useEffect(()=>{
    let cancelled = false;
    const startedAt = Date.now();
    fecthRecomndedProducts().then(e => {
      if (cancelled) return;
      // Espera a la precarga de imágenes + tiempo mínimo,
      // para que el skeleton sea perceptible y no haya pop-in.
      Promise.all([
        preloadImages((e ?? []).map(p => optimizedImg(p.images?.[0], 400, 400))),
        minDelay(600, startedAt),
      ]).then(()=>{
        if (cancelled) return;
        setProducts(e);
        setLoading(false);
      });
    })
    return ()=> { cancelled = true; };
  },[])

  if(loading || !products) return <YouMayAlsoLikeSkeleton />
  return(
    <section className="p-6 overflow-hidden bg-zinc-950 mb-15 flex flex-col gap-6 rounded-2xl min-w-0">
      <h2 className="text-white text-2xl">You May Also Like</h2>
        <div className="flex  gap-6 overflow-x-auto w-full  scrollbar-none">
        {products.map(e => <YouMayAlsoLikeCard key={e.id} product={e}/>)}
      </div>
    </section>
  )
}