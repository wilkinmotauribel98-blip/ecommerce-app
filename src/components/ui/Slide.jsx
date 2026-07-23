import { Button } from './Button'
export function Slide({product}) {
  
  return(
    <article className="w-dvw z-0 relative overflow-hidden h-2/4  ">
      <div className="relative ml-auto   w-4/7 sm:w-2/4  lg:w-3/7 xl:w-2/6 ">
        <div className="inset-0 absolute z-10 mt-14 lg:mt-35 xl:mt-17"
        style={{background : 'radial-gradient(circle at center, #10b981 0%, transparent 59%)',}}
        >
        </div>
        <img src={product.images} alt={`img from ${product.title}`} loading='lazy' className=" object-cover z-10 pb-8 aspect-16/15 xl:max-w-120 m-auto relative "/>
      </div>
      <div className="z-10 w-6/10  top-6 lg:top-15 absolute ml-4 sm:ml-10 flex flex-col gap-2 sm:gap-6 h-full " >
        <h2 className="text-shadow-amber-500 text-xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-zinc-300  font-light text-balance " >
          {product.title}
        </h2>
        <p 
        className="text-zinc-500 w-5/6 sm:w-3/6 line-clamp-2 sm:line-clamp-3 text-pretty ">
          {product.description}
        </p>
        <Button title={'Shop Collection'} />
      </div>
    </article>
  )
}