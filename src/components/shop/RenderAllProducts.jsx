import { useSearchParams } from "react-router-dom";
import ProductCard from "@/components/product/ProductCard";
import AllProductsSkeleton from "./AllProductsSkeleton";
import useFetch from "@/hooks/useFetch";
import ErrorState from "@/components/ui/ErrorState";
export default function RenderAllProducts (){
  const [searchParams, setSearchParams] = useSearchParams()
  const page = Number(searchParams.get('page')) || 1;
  const PAGE_URL = `https://dummyjson.com/products?limit=24&skip=${(page - 1) * 24}`
  const { data, error, loading, retry } = useFetch(PAGE_URL)
  
  function goToPage(i) {
      setSearchParams((prev)=>{
        const params = new URLSearchParams(prev);
        params.set('page', i);
        return params
      })
    }
  
  const pages = Array.from({length: Math.ceil(194 / 24)}).map((_,i) => i);
    
  if(loading) return <AllProductsSkeleton />
  if(error) {
      return(
        <ErrorState 
          title={error.message === "HTTP 404" ? "Page not found" : "Couldn't load this page"}
          message="Check your connection and try again."
          onRetry={error.message === "HTTP 404" ? undefined : retry}
        />
      )
    }

   return(
    <section className="flex max-w-360 flex-col gap-10 w-[95%] m-auto mt-10" >
      <section className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))]  sm:grid-cols-[repeat(auto-fill,minmax(255px,1fr))] grid-rows-4  gap-5">
        {data.products?.map((pr, index) => <ProductCard variant="allProducts" product={pr} key={pr.id} isLazy={index > 8} />)}
      </section>
      <div className="flex gap-2 w-fit m-auto">
        {pages.map(e => <button
        key={e}
        className={`py-2 px-2.5 cursor-pointer ${e + 1 == page ? 'bg-green-400' : 'bg-zinc-500'}  rounded`}
        onClick={()=> goToPage(e + 1)}
         >{e + 1}</button>)}
      </div>
    </section>
   )
}