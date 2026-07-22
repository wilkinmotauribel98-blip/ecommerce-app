import { Button } from './Button'
export function Slide({product}) {
  
  return(
    <div className="w-dvw z-0 relative overflow-hidden h-2/4  ">
      <div className="relative ml-auto   w-3/6 xl:w2/6">
        <div className="inset-0 absolute z-10"
        style={{background : 'radial-gradient(circle at bottom, #10b981 0%, transparent 49%)',}}
        >

        </div>
        <img src={product.images} alt={`img from ${product.title}`} loading='lazy' className=" object-cover z-10  aspect-16/15 xl:max-w-120 m-auto relative xl:w-full"/>
      </div>
      <div className="z-10 w-6/10  top-0 lg:top-15 absolute ml-4 sm:ml-10 flex flex-col gap-2 sm:gap-6 h-full " >
        
        <h2 className="text-shadow-amber-500 text-xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-zinc-300  font-light text-balance " >
          {product.title}
        </h2>

        <h3 
        className="text-zinc-500 w-5/6 sm:w-3/6 line-clamp-3 sm:line-clamp-3 text-pretty ">
          {product.description}
        </h3>

        <Button title={'Shop Collection'} />
      </div>
    </div>
  )
}