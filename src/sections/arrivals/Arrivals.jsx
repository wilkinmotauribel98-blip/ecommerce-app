import { useEffect, useState } from "react";
import { useProducts } from "../../hooks/useProducts";
import { ProductCard } from "../../components/product/ProductCard";
const newIds = [99, 87, 34, 35, 50]

function getIdsForWidth(width) {
  if (width < 640) return [newIds[0]]
  if (width < 900) return newIds.slice(0, 2);
  if (width < 1100) return newIds.slice(0, 3);
  return newIds;
}
export function Arrivals(params) {
  const [ids, setIds] = useState(()=> getIdsForWidth(window.innerWidth))
  const products = useProducts((state)=> state.products);
  
  useEffect(()=>{ 
      const handleSizer = ()=> setIds(getIdsForWidth(window.innerWidth))
      addEventListener('resize', handleSizer)
      return ()=> removeEventListener('resize', handleSizer)
    },[])

  return (
    <section 
      className="border mt-10 w-[97%] gap-5 flex m-auto rounded-2xl border-zinc-700 px-4 py-6 " 
      style={{background : `linear-gradient(to top, #000 0%, #111111ee 40% )`}}>
      <div className="w-50 sm:w-60 flex flex-col gap-1 py-2">
        <span className="text-emerald-500 text-sm sm:text-lg lg:text-xl">NEW ARRIVALS</span>
        <h2 className="text-white text-xl sm:text-2xl lg:text-4xl w-min">Just Launched.</h2>
        <p className="text-zinc-500 text-sm sm:text-lg  text-prety">Discover the latest products handpicked for you.</p>
        <span className="text-emerald-500 text-sm sm:text-lg lg-text-xl">Discover Now</span>
      </div>
      <div className="flex gap-4 ml-auto">
        {ids.map(e => <ProductCard key={`arrival ${e + 1}`} product={products.find(p=> p.id == e)} />)}
      </div>
    </section>
  )
}x