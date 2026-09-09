import { Button } from './Button'
import { optimizedImg } from '../product/ProductCard'
import AverageRating from './AverageRating'
import PriceSection from './PriceSection'
export function Slide({product, size}) {
  return(
    <article 
    className={` z-0 relative  overflow-hidden pt-3 sm:pt-0`}   
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
      <div className="z-10 bottom-0  justify-end pb-5 absolute ml-4 sm:ml-10 flex flex-col gap-0.5 sm:gap-2 lg:gap-3 xl:gap-4.5  " >
        {
          product.brand &&
          <span className='bg-emerald-700 sm:block border border-emerald-500 text-emerald-400 rounded-full py-1 px-3 w-fit'>{product.brand}</span>
          }
        <h2 
        className="text-shadow-amber-500  text-xl sm:text-3xl  md:text-4xl lg:text-5xl text-zinc-100  font-light text-balance "
        aria-label={`Title for ${product?.title}`}
        style={{textShadow: '0px 0px 10px rgba(255, 255, 255, 0.1)', width: `${size * 0.6}px`}}
        >
          {product?.title}
        </h2>
        <div className='flex gap-2'>
          <span className='text-amber-500 hidden sm:block bg-amber-900 py-1 px-2 rounded-full border border-amber-700'> Only {product.stock} Available</span>
        </div>
        
          <div className='hidden md:flex flex-col gap-2'>
            <AverageRating reviews={product.reviews}/>
            <PriceSection product={product}/>
          </div>
        <p 
        className="text-zinc-500 line-clamp-2 xl:line-clamp-3  text-pretty "
        aria-label={`Description for ${product?.title}`}
        style={{textShadow: '0px 0px 10px rgba(255, 255, 255, 0.1)', width: `${size * 0.4}px`}}
        >
          {product?.description}
        </p>
        <Button title={'Shop Collection'} href={`/ecommerce-app/product/${product.id}/${product?.title.toLowerCase().replace(/\s/g, '-')}`} slide={true} />
      </div>
    </article>
  )
}