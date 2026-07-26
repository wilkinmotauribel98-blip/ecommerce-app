export  function ProductCard({ product }) {
  
  return (
    <article className='relative rounded-2xl h-55 border border-zinc-700 flex flex-col gap-1 w-40 px-3 bg-linear-to-t from-black to-zinc-500'  >
      <span className="rounded-4xl bg-emerald-800/50 0 w-min  px-2 mt-2  text-emerald-500">New</span>
        <div className="w-35 absolute top-7">
          <img src={product?.images[0]} alt={`image of a ${product?.title}`} className="object-top"/>
        </div>
        <div className="absolute bottom-3">
          <h2 className="text-white  p-0 ">{product?.title}</h2>
          <span className="text-zinc-500">${product?.price.toString().replace(/\..*/, "")}</span>
        </div>

    </article>
  )
}
