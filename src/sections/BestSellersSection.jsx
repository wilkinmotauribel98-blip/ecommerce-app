import { ProductCard } from "@/components/product/ProductCard"
import { useProducts } from "@/hooks/useProducts"
import Skeleton from "@/components/ui/Skeleton"

export default function BestSellersSection() {
  const bestSellers = useProducts((state) => state.bestSellersProducts);
  const loading = useProducts((state) => state.bestSellersLoading);
  
  
  return (
    <section className="w-[97%] h-auto bg-black m-auto mb-3">
      <div className="flex justify-between items-center px-1 py-4">
        <h2 className="text-white p0 text-xl sm:text-2xl">Best Sellers</h2>
        <span className="text-emerald-500 text-sm sm:text-lg lg:text-xl">View All</span>
      </div>
      <div className='grid gap-4 h-65 overflow-y-hidden px-3  py-3 grid-cols-[repeat(auto-fill,minmax(300px,1fr))] lg:grid-cols-[repeat(auto-fill,minmax(320px,1fr))]  ' >
        {loading || !bestSellers.length
          ? [0, 1, 2, 3].map(i => <Skeleton key={i} className="h-65 w-full" />)
          : bestSellers.map((product) => (
            <ProductCard key={product.id} product={product}  newProduct={true} bestSeller={true} />
          ))}
      </div>
    </section>
  )
} 







