import { useState } from "react"
import ReviewCard from "../components/ui/ReviewCard";

const TableItem = ({title, content})=>{
  return(
  <tr className="text-white border border-zinc-600">
    <th className="p-3 text-left border border-zinc-600">{title}</th>
    <td className="px-3 text-zinc-300">{content}</td>
  </tr>
  )
}

export default function ProductTabsSection({product}){
  const [tab, setTab] = useState({description:true, especifications:false, reviews:false});
  const tableMap = [
    {title:'Brand', content: product?.brand },
    {title:'SKU', content: product?.sku },
    {title:'Weight', content: product?.weight },
    {title:'Dimentions', content: product?.dimentions },
    {title:'Minimum order quantity', content: product?.minimumOrderQuantity },
    {title:'Availability', content: product?.availabilityStatus },
    {title:'Category', content: product?.category },
    {title:'Tags', content: product?.tags },
  ]

  return(
    <section className="my-5 flex flex-col gap-5 max-w-7xl m-auto">
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
          >Reviews ({product.reviews.length})</button>
      </div>

       {tab.description ? 
       <section className="text-zinc-400 flex flex-col lg:flex-row gap-10">
        <p aria-label={`${product.description}`} className="flex-1">{product.description}</p>
        <div className="flex-1 flex flex-col gap-5">
          <h3 className="text-white text-lg">Customer Reviews</h3>
          {product.reviews.slice(0,3).map((e)=> <ReviewCard key={e.comment} review={e}/>)}
        </div>
      </section> 
      : ''
      }

      {
        tab.especifications ?
        <table>
            {tableMap.map((e)=> e.content ? <TableItem key={e.title} title={e.title} content={e.content}/> : '')}
        </table>
        : <></>
      }

      {
        tab.reviews ? 
        <section className="flex flex-col gap-5 text-zinc-400 w-full sm:ml-10 md:ml-20 lg:ml-25 xl:ml-37">
          <h3 className="text-white text-xl">Customer Reviews</h3>
          {product.reviews.map((e)=> <ReviewCard key={e.comment} review={e}/>)}
        </section> 
        : <></>
      }

    </section>
  )
}