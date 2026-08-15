import { useState } from "react"
import ReviewCard from "../components/ui/ReviewCard";

export default function ProductTabsSection({product}){
  const [tab, setTab] = useState({description:true, especifications:false, reviews:false});
  
  
  return(
    <section className="mt-5 flex flex-col gap-5">
      <div className="text-white flex ">
        <button 
          className={`flex-1 py-3 ${tab.description ? 'border-b-4 border-emerald-400' : ''}`} 
          onClick={()=> setTab({description:true, especifications:false, reviews:false})}
          aria-label="Description tab"
        >Description</button>
        <button 
          className={`flex-1 py-3 ${tab.especifications ? 'border-b-4 border-emerald-400' : ''}`} 
          onClick={()=> setTab({description:false, especifications:true, reviews:false})}
          aria-label="Specifitions tab"
          >Specifications</button>
        <button 
          className={`flex-1 py-3 ${tab.reviews ? 'border-b-4 border-emerald-400' : ''}`} 
          onClick={()=> setTab({description:false, especifications:false, reviews:true})}
          aria-label="Reviews tab"
          >Reviews</button>
      </div>

       {tab.description ? 
       <section className="text-zinc-400 ">
        <p aria-label={`${product.description}`}>{product.description}</p>
        <div>
          <h3 className="text-white">Customer Reviews</h3>
          {product.reviews.map((e)=> <ReviewCard review={e}/>)}
        </div>
      </section> 
      
      : ''
      }
    </section>
  )
}