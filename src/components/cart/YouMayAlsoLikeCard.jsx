import { optimizedImg } from "../product/ProductCard";
import { useNavigate } from "react-router-dom";
export default function YouMayAlsoLikeCard({product, category}){
  const navigate = useNavigate()
  return(
    <article 
      className={`text-white cursor-pointer ${category || 'lg:min-w-50 w-55 shrink-0 grow-0'} bg-zinc-900 p-2 rounded-2xl`}
      onClick={()=> navigate(`/ecommerce-app/product/${product.id}/${product.title.replace(/\s/g, '-')}`)}
    > 
      <div>
        <img src={optimizedImg(product.images[0], 400, 400)} alt={`image of ${product.title}`} />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-zinc-400">{product.title}</h3>
        <span className="sr-only">Price:</span>
        <data value={product.price}>${product.price}</data>
        <span className="flex gap-1">
          <svg className="w-6 h-6 text-amber-300"><use href="/ecommerce-app/sprite-extra.svg#icon-star"></use></svg> 
          {product.rating} ({product.reviews.length})
          </span>
      </div>
    </article>
  )
}