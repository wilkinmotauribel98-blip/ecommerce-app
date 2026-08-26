import { optimizedImg } from "@/components/product/ProductCard";
import AddToCard from "@/components/ui/AddToCard";
import Skeleton from "@/components/ui/Skeleton";


export default function ProductHeroSection({ product, loading }){
  if (loading) {
    return(
      <section className="flex flex-col md:flex-row mt-5 max-w-7xl gap-4 m-auto" aria-label="Product hero loading">
        <div className="bg-zinc-900 flex-1 mt-0 max-w-150 m-auto max-h-140 border  rounded-xl overflow-hidden">
          <Skeleton className="w-full h-full rounded-xl" />
        </div>
        <article className="m-auto max-w-150 flex-1 flex flex-col px-3 gap-3">
          <Skeleton className="h-3 w-16" />
          <Skeleton className="h-8 lg:h-10 w-3/4" />
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-5 w-32" />
          <Skeleton className="h-6 w-40" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-2/3" />
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-12 w-full" />
          <Skeleton className="h-12 w-full" />
        </article>
      </section>
    )
  }

  const review = (product.reviews.reduce((acc, r) =>  acc + r.rating, 0) / product.reviews.length)
  const price = (product.price - (product.price / 100 * product.discountPercentage)).toFixed(2);
  const stars = Math.round(review);

  const index = [0,1,2,3,4];
  
  return(
    <section className="flex flex-col md:flex-row mt-5 gap-4  m-auto">
      <div className="bg-zinc-950 flex-1 mt-0  lg:max-w-140 m-auto  border border-zinc-600 rounded-xl">
        <img 
          className="cover w-full"
          src={optimizedImg(product?.images[0], 720, 720)} 
          alt={`image of ${product.title}`} />
      </div>
    
      <article className="text-white m-auto  flex-1 flex flex-col px-3 gap-3">
        
      {product.stock > 0 ? <span className="text-emerald-500 flex text-lg items-center gap-1.5"><div className="w-2 h-2 bg-emerald-500 rounded-full "></div> In stock</span> : <span className="text-red-500 flex items-center gap-1.5"><div className="w-2 h-2 bg-red-500 rounded-full "></div>No stock</span>}
        <h2 className="text-3xl lg:text-5xl p-0 m-0">{product.title}</h2>


        {product.brand && <h3 className="p-0 m-0 text-lg text-zinc-400">{product?.brand}</h3>}
        
        <div className="flex gap-1.5">
          {index.map(e => e < stars  ?   <svg className="w-6 h-6 text-amber-400" key={e} ><use href="/sprite-extra.svg#icon-star"></use> </svg> : <svg className="w-6 h-6 text-amber-300" key={e} ><use href="/sprite-extra.svg#icon-void-star"></use> </svg> )}
          <div>
            <span>{review.toFixed(2)} ({product.reviews.length} reviews)</span>
          </div>
        </div>

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

        <p className="text-zinc-400 text-sm lg:text-lg">{product.description}</p>

        <div className="text-zinc-400 flex flex-col gap-1">
            <span>Weight {product.weight} g</span> 
            <span>Dimensions {product.dimensions.width} x {product.dimensions.height}  x {product.dimensions.depth} cm </span>  
            <span>Minimum order quantity: {product.minimumOrderQuantity}</span> 
            <span>Availabity: in stock ({product.stock} units)</span>
        </div>
        <AddToCard product={product} price={price}/>
        <button className="border border-zinc-600 py-2 cursor-pointer rounded">Buy Now</button>
      </article>
    </section>
  )
}