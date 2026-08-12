import { useEffect, useState } from "react";
import { useProducts } from "../hooks/useProducts";
import { ProductCard } from "../components/product/ProductCard";
import Skeleton from "../components/ui/Skeleton";
const newIds = [0,1,2,3,4];

function getIdsForWidth(width) {
  if (width < 640) return [newIds[0]]
  if (width < 875) return newIds.slice(0, 2);
  if (width < 1000) return newIds.slice(0, 3);
  if (width < 1200) return newIds.slice(0, 4);
  return newIds;
}
export default function NewArrivalsSection(params) {
  const [ids, setIds] = useState(()=> getIdsForWidth(window.innerWidth))
  const products = useProducts((state)=> state.newArrivalsProducts);
  const loading = useProducts((state) => state.newArrivalsLoading);
  
  
  useEffect(()=>{ 
      const handleSizer = ()=> setIds(getIdsForWidth(window.innerWidth))
      addEventListener('resize', handleSizer)
      return ()=> removeEventListener('resize', handleSizer)
    },[])
  return (
    <section 
      className="border mt-10 w-[95%] sm:w-[calc(100%-2rem)] gap-5 flex m-auto rounded-2xl border-zinc-700 px-4  py-6 bg-linear-0 to-t from-black to-zinc-800" 
     >
      <div className="w-50 sm:w-60 flex flex-col gap-1 py-2">
        <h3 className="text-emerald-500 text-sm sm:text-lg lg:text-xl">NEW ARRIVALS</h3>
        <h2 className="text-white text-xl sm:text-2xl lg:text-4xl w-min">Just Launched.</h2>
        <p className="text-zinc-500 text-sm sm:text-lg  text-prety" aria-label="New arrivals description">Discover the latest products handpicked for you.</p>
        <span className="text-emerald-500 text-sm sm:text-lg lg-text-xl" aria-label="Discover now">Discover Now</span>
      </div>
      <div className="flex gap-4 ml-auto">
        {loading || !products.length
          ? ids.map(i => <Skeleton key={i} className="h-55 w-43" />)
          : ids.map(e => <ProductCard key={`arrival ${products[e]?.id}`} newProduct={true} newArrivals={true} product={products[e]} />)}
      </div>
    </section>  
  )
}