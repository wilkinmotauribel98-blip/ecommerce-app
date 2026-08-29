import { optimizedImg } from "../product/ProductCard"
import { useNavigate } from "react-router-dom"
export default function CategoryCard ({category}){
  const navigate = useNavigate()
  return(
    <article 
      className="bg-zinc-950 border border-zinc-800 rounded pb-2  flex flex-col cursor-pointer"
      onClick={()=> navigate(`/ecommerce-app/category/${category.category}`)}
      aria-label={`${category.category} category Link`}
    >
      <div >
        <img className="w-full" src={optimizedImg(category.image, 300, 300)} alt={`${category.category} image`} />
      </div>

      <h2 className="text-white pl-3 capitalize">{category.category.replace(/-/g, ' ')}</h2>
      <p className="text-zinc-400 pl-3 text-md">{category.total} products</p>
    </article>
  )
}