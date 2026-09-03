import { useSearchParams } from "react-router-dom"
import { useState, useEffect } from "react";
import { searchProducts } from "@/api/products";

import BreadCrumbSection from "@/sections/BreadCrumbSection";
import RenderResults from "@/components/results/RenderResults";

export default function ResultsPage(){
  const [searchParams] = useSearchParams();
  const [results, setResults] = useState();
  const query = searchParams.get('q');
  useEffect(()=>{ 
    if(!query) return
    searchProducts(query).then(r => setResults(r))
  },[query])

  if(!results) return
  return(
    <main className="mb-10 min-h-dvh max-w-360 w-[95%] m-auto z-0 bg-black overflow-hidden  " aria-label="Results Page Main Content">
      <BreadCrumbSection loading={!results} cart={true} title={'Search Results'} />
      <h1 className="text-white mt-2  text-3xl sm:text-4xl l">Search Results</h1>
      <p className="text-zinc-400">Results for <span className="text-green-400 text-xl">"{query}"</span></p>
      <RenderResults results={results}/>

    </main>
  )
}
