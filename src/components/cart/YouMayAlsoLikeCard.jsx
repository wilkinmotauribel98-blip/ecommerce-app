import { optimizedImg } from "../product/ProductCard";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function YouMayAlsoLikeCard({product}){
  const navigate = useNavigate()
  return(
    <article 
      className="text-white w-55 shrink-0 grow-0 h-fit cursor-pointer lg:min-w-50 bg-zinc-900 p-2 rounded-2xl" 
      onClick={()=> navigate(`/product/${product.id}/${product.title}`)}
    > 
      <div>
        <img src={optimizedImg(product.images[0], 400, 400)} alt={`image of ${product.title}`} />
      </div>
      <div className="flex flex-col gap-4">
        <h3 className="text-zinc-400">{product.title}</h3>
        <span className="sr-only">Price:</span>
        <data value={product.price}>${product.price}</data>
        <span className="flex gap-1">
          <svg className="w-6 h-6 text-amber-300"><use href="/sprite-extra.svg#icon-star"></use></svg> 
          {product.rating} ({product.reviews.length})
          </span>
      </div>
    </article>
  )
}