import { Button } from './Button'
import { optimizedImg } from '../product/ProductCard'
export function Slide({product, size}) {
  
  return(
    <article 
    className={` z-0 relative  overflow-hidden h-2/4 `}   
    aria-label={`Slide for ${product?.title}`}
    style={{width: `${size}px`}}
    >
      <div className="relative ml-auto   w-4/7 sm:w-2/4  lg:w-3/7 xl:w-2/6 ">
        <div className="inset-0 absolute z-10 mt-14 lg:mt-35 xl:mt-17"
        style={{background : 'radial-gradient(circle at center, #10b981 0%, transparent 59%)',}}
        >
        </div>
        <img 
        src={optimizedImg(product?.images[0], 820, 820)} 
        alt={`img from ${product?.title}`} 
        fetchpriority='high' 
        className=" object-cover z-10 pb-8 aspect-16/15 xl:max-w-120 m-auto relative" 
         />
      </div>
      <div className="z-10 w-6/10  top-0 sm:top-10 lg:top-15 absolute ml-4 sm:ml-10 flex flex-col gap-2 sm:gap-6 h-full " >
        <h2 
        className="text-shadow-amber-500 text-2xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-zinc-300  font-light text-balance "
        aria-label={`Title for ${product?.title}`}
        style={{textShadow: '0px 0px 10px rgba(255, 255, 255, 0.1)', width: `${size * 0.6}px`}}
        >
          {product?.title}
          
        </h2>
        <p 
        className="text-zinc-500  line-clamp-2 sm:line-clamp-3 text-pretty "
        aria-label={`Description for ${product?.title}`}
        style={{textShadow: '0px 0px 10px rgba(255, 255, 255, 0.1)', width: `${size * 0.4}px`}}
        >
          {product?.description}
        </p>
        <Button title={'Shop Collection'} href={`/product/${product.id}/${product?.title.toLowerCase().replace(/\s/g, '-')}`} />
      </div>
    </article>
  )
}