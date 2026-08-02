export default function WhyChooseUsSection() {
  return (
    <section className="w-[97%] h-auto bg-black m-auto mb-6">
      <h2 className="text-xl   text-white mb-5">Why Choose Us</h2>
      <div className="flex flex-wrap gap-4 justify-center border border-zinc-800 p-4 rounded-lg">
        <ul className="flex flex-wrap gap-4">

          <li className="min-w-35 sm:min-w-57 md:min-w-40 items-center flex-1   flex flex-col gap-1 text-white text-lg mb-2">
            <svg className="w-10 text-emerald-400 h-10">
              <use xlinkHref="#icon-premium-quality"></use>
            </svg>
            <h3 className="font-bold text-center text-sm ">Premium Quality</h3>
            <p className="text-zinc-600 text-pretty text-center">Curated top quality products.</p>
          </li>
            
          <li className="min-w-35 sm:min-w-57 md:min-w-40 items-center flex-1  flex flex-col gap-1 text-white text-lg mb-2">
            <svg className="w-10 text-emerald-400 h-10">
              <use xlinkHref="#icon-free-shipping"></use>
            </svg>
            <h3 className="font-bold text-center text-sm ">Fast & Free Shipping</h3>
            <p className="text-zinc-600 text-pretty text-center">Free shipping on orders over $99.</p>
          </li>

          <li className="min-w-35 sm:min-w-57 md:min-w-40 items-center flex-1 flex flex-col gap-1 text-white text-lg mb-2">
            <svg className="w-10 text-emerald-400 h-10">
              <use xlinkHref="#icon-easy-returns"></use>
            </svg>
            <h3 className="font-bold text-center text-sm ">Easy Returns </h3>
            <p className="text-zinc-600 text-pretty text-center">30-day return policy for your peace of mind.</p>
          </li>

          <li className="min-w-35 sm:min-w-57 md:min-w-40 items-center flex-1 flex flex-col gap-1 text-white text-lg mb-2">
            <svg className="w-10 text-emerald-400 h-10">
              <use xlinkHref="#icon-customer-support  "></use>
            </svg>
            <h3 className="font-bold text-center text-sm ">24/7 Customer Support</h3>
            <p className="text-zinc-600 text-pretty text-center">Our dedicated team is always here to help you.</p>
          </li>

          
        </ul>
      </div>
      
    </section>
  );
} 