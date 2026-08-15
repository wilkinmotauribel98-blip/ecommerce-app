import { Button } from "../components/ui/Button";
import { useState, useEffect } from "react";
import { optimizedImg } from "../components/product/ProductCard";

export default function ProductHeroSection({ product }){
  const [counter, setCounter] = useState(0);
  const review = (product.reviews.reduce((acc, r) =>  acc + r.rating, 0) / product.reviews.length)
  const stars = Math.round(review)
  const index = [0,1,2,3,4];
  useEffect(()=> setCounter(1), [product])
  return(
    <section className="flex flex-col md:flex-row mt-5 max-w-5xl gap-4  m-auto">
      <div className="bg-zinc-900 flex-1 mt-0 max-w-110 m-auto h-max border border-zinc-600 rounded-xl">
        <img 
          className="cover w-full"
          src={optimizedImg(product?.images[0], 720, 800)} 
          alt={`image of ${product.title}`} />
      </div>
    
      <article className="text-white m-auto max-w-150 flex-1 flex flex-col px-3 gap-3">
      {product.stock > 0 ? <span className="text-emerald-500 flex items-center gap-1.5"><div className="w-2 h-2 bg-emerald-500 rounded-full "></div> In stock</span> : <span className="text-red-500 flex items-center gap-1.5"><div className="w-2 h-2 bg-red-500 rounded-full "></div>No stock</span>}
        <h2 className="text-2xl lg:text-4xl p-0 m-0">{product.title}</h2>
        {product.brand ? <h3 className="p-0 m-0 text-lg text-zinc-400">{product?.brand}</h3> : ''}
        
        <div className="flex gap-1.5">
          {index.map(e => e < stars  ?   <svg className="w-6 h-6 text-amber-400" key={e} ><use xlinkHref="#icon-star"></use> </svg> : <svg className="w-6 h-6 text-amber-300" key={e} ><use xlinkHref="#icon-void-star"></use> </svg> )}
          <div>
            <span>{review.toFixed(2)} ({product.reviews.length} reviews)</span>
          </div>
        </div>

        <div className="flex gap-4">
          <span className="text-xl text-emerald-400">${ (product.price - (product.price / 100 * product.discountPercentage)).toFixed(2) }</span>
          <span className="relative text-zinc-400">${product.price} <span className="absolute w-6/5 -left-1 h-0.5 bg-zinc-400 top-2/5 "></span></span>
          <span className="rounded text-emerald-500 bg-emerald-900 px-3 ">{Math.round(product.discountPercentage)}% OFF</span>
        </div>

        <p className="text-zinc-400 text-sm lg:text-lg">{product.description}</p>

         <div className="text-zinc-400 flex flex-col gap-1">

            <span>Weight {product.weight} g</span> 
            <span>Dimensions {product.dimensions.width} x {product.dimensions.height}  x {product.dimensions.depth} cm </span>  
            <span>Minimum order quantity: {product.minimumOrderQuantity}</span> 
            <span>Availabity: in stock ({product.stock} units)</span>
        </div>

        <div className="flex w-full">
          <div className="flex h-min">
          <button className="bg-zinc-800 text-zinc-100 w-14 h-12 text-center" onClick={()=> {if(counter > 1) setCounter(s => s - 1)}}>-</button>
          <button className="bg-zinc-800 text-zinc-100 w-14 h-12 border-x border-zinc-700  text-center">{counter}</button>
          <button className="bg-zinc-800 text-zinc-100 w-14 h-12  text-center" onClick={()=> {if(counter < product.stock) setCounter(s => s + 1)}}>+</button>
          </div>
          <Button title={'Add to Cart'}/>
        </div>
        <button className="border border-zinc-600 py-2 cursor-pointer rounded">Buy Now</button>
      </article>
    </section>
  )
}