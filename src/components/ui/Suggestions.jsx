import { SuggestionCard } from "./SuggestionCard"
import { useProducts } from "../../hooks/useProducts"
import { use, useEffect, useMemo, useState } from "react";
async function searcher(query) {
  const res = await fetch(`https://dummyjson.com/products/search?q=${query}`);
  const data = await res.json();
  return data
}
export default function Suggestions ({search, size}){
  const [suggestions, setSuggestions] = useState([])
    useEffect(()=>{fetch(`https://dummyjson.com/products/search?q=${search}`).then(res => res.json()).then(e=> setSuggestions(e.products))},[search]);
    
    
    if(!suggestions.length) return

  return(
    <div className="absolute top-17 w-[80dvw] sm:w-[70dvw] max-w-4xl flex flex-col rounded-xl overflow-hidden bg-gray-600 z-20">
                  {suggestions.slice(0,3).map(e => <SuggestionCard size={size} info={e} key={e.id}/>)}
                  <h2 className="text-emerald-600 ml-4 p-1.5 sm:text-2xl">
                    {suggestions.length > 0 ? `See all results for  "${search}"`: 'No results'}
                  </h2>
              </div> 
  )
}