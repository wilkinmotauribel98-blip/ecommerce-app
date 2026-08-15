import { svg } from "framer-motion/client";

// utils/img.js
export function optimizedImg(src, w, h) {
  if (!src) return '';
  return `https://wsrv.nl/?url=${encodeURIComponent(src)}&w=${w}&h=${h}&fit=cover&q=80`;
}

export  function ProductCard({ product, shopStyle, newProduct, bestSeller, newArrivals }) {
  return (
    <article
      onClick={() => {
        if (shopStyle) {
          window.location.href = `/category/${product?.title.toLowerCase()}`;
        } else {
          window.location.href = `/product/${product.id}/${product?.title.toLowerCase().replace(/\s/g, '-')}`;
        }
      }}
      className={
        `
        border border-zinc-800 rounded-2xl flex flex-col gap-1 cursor-pointer relative hover:scale-105
        ${newArrivals ? 'min-h-55  w-43 bg-linear-0 to-t from-black to-zinc-500' : ''}
        ${shopStyle ? 'h-57 max-w-50 lg:max-w-48 bg-black border-zinc-800 ' : ''}
        ${bestSeller ? 'h-58  ' : ''}
        `
      }  
      aria-label={
        `${shopStyle ? `category: ${product?.title.replace(/-/g, ' ')}` : product?.title.replace(/-/g, ' ')} 
        ${shopStyle ? `${product?.products}+ products` : 
        `$${product?.price.toString().replace(/\..*/, "")}`}`
      }
      >

      {newProduct ? <span className="rounded-4xl bg-emerald-800/50 0 w-min  px-2 mt-2  text-emerald-500 ml-3">New</span> : '' }
      

      <div className={`
        ${newArrivals ? 'absolute top-7 w-35 ml-3' : ''}
        ${shopStyle ? ' w-full max-w-45 mx-auto' : ''} 
        ${bestSeller ? 'w-full max-w-45 mx-auto -mt-10 ' : ''} 
        
        `}>
          <img 
          src={optimizedImg(product?.images[0], 280, 280)} 
          alt={`${product?.title}`} 
          className="object-cover  relative z-10"/>
        </div>
        {shopStyle && <div className={`w-full h-20 inset-y-2/8 inset-x-0 absolute bg-radial-[at_50%_50%] from-emerald-700  to-transparent to-60%` } ></div>}

        <div className="absolute bottom-3 w-full">
          <h3 
            className={`text-white  p-0 ${shopStyle ? 'text-center capitalize w-full' : 'ml-3'}` }
            aria-label={
              `${shopStyle ? `category: ${product?.title.replace(/-/g, ' ')}` : product?.title.replace(/-/g, ' ')}`
            }
            >
            {product?.title.replace(/-/g, ' ')}
          </h3>

          <span 
            className={`
            ${newArrivals ? 'text-zinc-400' : ''}
            ${shopStyle ? 'text-center ml-3  w-full text-zinc-400' : 'ml-3'}
            ${bestSeller ? 'text-emerald-500 flex gap-2' : ''}
            `
           }
           aria-label={
            `${shopStyle ? `${product?.products}+ products` : 
            `$${product?.price.toString().replace(/\..*/, "")}`}`
           }
            >
            {shopStyle ? `${product?.products}+ products`:  ``}
            {newArrivals ? `$${product?.price.toString().replace(/\..*/, "")}` : ''}
            {bestSeller ? `$${product?.price}` : ''}
            {bestSeller ? 
            <span 
              className="text-zinc-400  flex gap-1.5 items-center"
              aria-label={`Rating ${product?.rating}`}
              >Rating {<svg className="w-6 h-6 text-emerald-500"><use href="/sprite-extra.svg#icon-star"></use> </svg>} {product?.rating}</span> : ''}
          </span>
         
        </div>
    </article>
  )
}
