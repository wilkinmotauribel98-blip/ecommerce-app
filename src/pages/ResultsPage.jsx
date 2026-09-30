import { useSearchParams } from "react-router-dom"

import useFetch from "@/hooks/useFetch";
import BreadCrumbSection from "@/sections/BreadCrumbSection";
import RenderResults from "@/components/results/RenderResults";
import ResultsSkeleton from "@/components/results/ResultsSkeleton";


export default function ResultsPage(){
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q');
  const { loading, data } = useFetch(`https://dummyjson.com/products/search?q=${query}`)
 

  if(!query) return null
  return(
    <main className="mb-10 min-h-dvh max-w-360 w-[95%] m-auto z-0 bg-black overflow-hidden  " aria-label="Results Page Main Content">
      <BreadCrumbSection loading={ loading } cart={true} title={'Search Results'} />
      <h1 className="text-white mt-2  text-3xl sm:text-4xl l">Search Results</h1>
      <p className="text-zinc-400">Results for <span className="text-green-400 text-xl">"{query}"</span></p>
      {(loading )
        ? <ResultsSkeleton />
        : <RenderResults results={data} query={query}/>}

    </main>
  )
}
