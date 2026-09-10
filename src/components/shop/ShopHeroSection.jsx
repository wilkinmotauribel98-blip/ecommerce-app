export default function ShopHeroSection(){
  return(
    <section className="relative w-full ">
      <div className="w-full max-h-80 aspect-video bg-white">
      </div>
      <div className=" w-full inset-0 absolute bg-linear-to-r from-40% from-black  to-transparent"></div>
      <div className="absolute bottom-0 w-60 md:w-80 lg:w-90 mb-3 md:mb-10 py-3 ml-5 md:ml-20 flex flex-col gap-2" >
        <span className="text-emerald-500 text-2xl">shop</span>
        <h1 className="text-white text-4xl">All Products</h1>
        <p className="text-zinc-400">Discover our full collection of premium products.
          Find exactly what you need, all in one place.
        </p>
      </div>
    </section>
  )
}