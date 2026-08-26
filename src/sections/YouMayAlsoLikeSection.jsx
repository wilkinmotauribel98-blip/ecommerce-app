import { useState, useEffect } from "react";
import { useCart } from "@/hooks/useCart";
import YouMayAlsoLikeCard from "../components/cart/YouMayAlsoLikeCard";
export default function YouMayAlsoLikeSection(){
  const [products, setProducts ] = useState()
  const fecthRecomndedProducts = useCart((state)=> state.fecthRecomndedProducts)
  
  useEffect(()=>{fecthRecomndedProducts().then().then(e => setProducts(e))},[])
    if(!products) return
  return(
    <section className="p-6 overflow-hidden bg-zinc-950 mb-15 flex flex-col gap-6 rounded-2xl min-w-0">
      <h2 className="text-white text-2xl">You May Also Like</h2>
        <div className="flex  gap-6 overflow-x-auto w-full  scrollbar-none">
        {products.map(e => <YouMayAlsoLikeCard key={e.id} product={e}/>)}
      </div>
    </section>
  )
}