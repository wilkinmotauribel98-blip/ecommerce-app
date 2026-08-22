import { SuggestionCard } from "./SuggestionCard"
import SearchSkeleton from "./SearchSkeleton"
import {  useEffect, useState } from "react";
import { searchProducts } from "@/api/products";

export default function Suggestions ({query, onClose}){
  const [suggestions, setSuggestions] = useState([])
  const [loading, setLoading] = useState(true)
    
    useEffect(()=>{
      setLoading(true)
      searchProducts(query).then(e => {
        setSuggestions(e.products)
        setLoading(false)
      })
    },[query]);
    
    if(loading) return <SearchSkeleton count={3} />
    
    if(!suggestions.length) return

  return(
    <div className="absolute top-17 w-[70dvw] max-w-4xl flex flex-col rounded-xl overflow-hidden bg-gray-600 z-20">
                  {suggestions.slice(0,3).map(e => <SuggestionCard info={e} key={e.id} select={onClose}/>)}
                  <h2 className="text-emerald-600 ml-4 p-1.5 sm:text-2xl ">
                    {suggestions.length > 0 ? `See all results for  "${query}"`: 'No results'}
                  </h2>
              </div> 
  )
}