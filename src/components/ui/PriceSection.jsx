export default function PriceSection({product}){
  const price = (product.price - (product.price / 100 * product.discountPercentage)).toFixed(2);

  return(
    <div className="flex gap-4">
          <span>
            <span className="sr-only">Discounted price: </span>
            <data className="text-xl text-emerald-400" value={`${price}`}>${price}</data>
          </span>
          <span className="line-through decoration-2 decoration-zinc-400 ">
            <span className="sr-only">Original pirce:</span>
            <data className="relative text-zinc-400">${product.price}</data>
          </span>
          <span className="rounded text-emerald-400 bg-emerald-900 px-3 py-0.5">
            <span className="sr-only">Discount of:</span>
            {Math.round(product.discountPercentage)}% OFF
            </span>
      </div>
  )
}