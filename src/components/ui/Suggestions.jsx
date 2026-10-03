import { SuggestionCard } from "./SuggestionCard"
import SearchSkeleton from "./SearchSkeleton"
import useFetch from "@/hooks/useFetch";

export default function Suggestions ({query}){
  const { data, loading } = useFetch(`https://dummyjson.com/products/search?q=${query}`)

    if(loading) return <SearchSkeleton count={3} />
    if(!data.products?.length) return
    console.log(typeof data)
    
  return(
    <div 
    className="absolute top-17 w-[70dvw] max-w-4xl flex flex-col rounded-xl overflow-hidden bg-gray-600 z-20">
      {data.products.slice(0,3).map(e => <SuggestionCard info={e} key={e.id} />)}
      <p className="text-emerald-600 ml-4 p-1.5 sm:text-2xl ">
        {query.length > 0 && data.products.length > 0 ? `See all results for "${query}"`: 'No results'}
      </p>
  </div> 
  )
}