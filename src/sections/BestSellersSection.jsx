import { useProducts } from "@/hooks/useProducts"
import Skeleton from "@/components/ui/Skeleton"
import ErrorState from "@/components/ui/ErrorState"
import  ProductCard from "@/components/product/ProductCard";

export default function BestSellersSection() {
  const bestSellers = useProducts((state) => state.bestSellersProducts);
  const loading = useProducts((state) => state.bestSellersLoading);
  const error = useProducts((state) => state.error);
  const retry = useProducts((state) => state.fetchHomeProducts);
  
  
  return (
    <section className="w-[97%] h-auto bg-black m-auto mb-3">
      <div className="flex justify-between items-center px-1 py-4">
        <h2 className="text-white text-xl sm:text-2xl">Best Sellers</h2>
      </div>
      <div className='grid gap-4 h- px-3  py-3 grid-cols-[repeat(auto-fill,minmax(300px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(320px,1fr))]  ' >
        {error && !loading && !bestSellers.length
          ? <ErrorState compact title="Couldn't load best sellers" onRetry={retry} />
          : loading || !bestSellers.length
          ? [0, 1, 2, 3].map(i => <Skeleton key={i} className="h-65 w-full" />)
          : bestSellers.map(e =>   <ProductCard key={e.id} product={e} variant='bestSeller' isNew={true}  isLazy={true} />)}
      </div>
    </section>
  )
} 







