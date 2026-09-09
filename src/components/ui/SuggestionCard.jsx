import { optimizedImg } from "../product/ProductCard"
import { Link } from "react-router-dom";


export function SuggestionCard({info}) {

  
  return(
   <Link
   to={`/ecommerce-app/product/${info.id}/${info.title}`}
   >
     <article 
      className="flex items-center hover:bg-zinc-700  cursor-pointer  bg-zinc-800 border-b border-b-gray-500 z-90" 
    >
        <img 
          src={optimizedImg(info.images[0], 200, 200)} 
          alt={`this is the image of the ${info.title}`} 
          className="w-2/12 min-w-16 aspect-square"/>
      <div className="flex flex-col mr-10">
        <span className="sm:text-xl lg:text-2xl">{info.title}</span>
        <div className=" items-center gap-1 text-zinc-400 hidden sm:flex">
          <p>{info.category}</p>
          
          <span className="w-1 h-1 hidden sm:block rounded-full bg-zinc-400"></span>
          <p>{info.brand}</p> 
        </div>
      </div>
      <div className="w-min ml-auto pr-4 mb-4">
          <span className="m-0 p-0 text-emerald-600">${info.price}</span>
      </div>
    </article>
   </Link>
  )
}