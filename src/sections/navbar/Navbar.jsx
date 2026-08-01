export function Navbar() {
  return (
    <nav 
      className=" w-full h-20 fixed bottom-0 bg-black z-50 justify-center items-center flex lg:hidden"
      aria-label="Mobile navigation bar"
    >
        <ul 
          className="flex w-full  px-4 items-center gap-2" 
          aria-label="Navigation links for Home, Shop, Categories, Cart, and Account"
        >
          <li 
            className="text-zinc-400 flex-1 cursor-pointer"
            aria-label="Home link"
          >
            <a href="" 
              className="flex flex-col items-center"
              aria-label="Navigate to Home page"
            >
              <svg className={` w-7 h-7 sm:w-9 sm:h-8  cursor-pointer`} aria-label="Home">
                <use xlinkHref="#icon-home" />
              </svg>
              <h3 className='text-md sm:text-lg'>
                Home
              </h3>
            </a>
          </li>

          <li 
            className="text-zinc-400 flex-1 cursor-pointer"
            aria-label="Shop link"
          >
            <a href="" 
              className="flex flex-col items-center"
              aria-label="Navigate to Shop page"
            >
              <svg className={` w-7 h-7 sm:w-9 sm:h-8 cursor-pointer `} aria-label="Products">
                <use xlinkHref="#icon-shop" />
              </svg >
              <h3 className='text-md sm:text-lg'>
                Shop
              </h3>
            </a>
          </li>

          <li className="text-zinc-400 flex-1 cursor-pointer"
          aria-label="Categories link"
          >
            <a href="" 
              className="flex flex-col items-center"
              aria-label="Navigate to Categories page"
            >
              <svg className={` w-7 h-7 sm:w-9 sm:h-8 text-zinc-400 cursor-pointer`} aria-label="About">
                <use xlinkHref="#icon-grid" />
              </svg >
              <h3 className='text-md sm:text-lg'>
                Categories
              </h3>
            </a>
          </li>

          <li className="text-zinc-400 flex-1 cursor-pointer"
          aria-label="Cart link"
          >
            <a href="" 
              className="flex flex-col items-center"
              aria-label="Navigate to Cart page"
            >
              <svg className={` w-7 h-7 sm:w-9 sm:h-8  cursor-pointer`} aria-label="Contact">
                <use xlinkHref="#icon-cart" />
              </svg >
              <h3 className='text-md sm:text-lg'>
                Cart
              </h3>
            </a>
          </li>

            <li className=" text-zinc-400 flex-1  cursor-pointer" aria-label="Account link">
            <a href="" className="flex flex-col items-center"
              aria-label="Navigate to Account page"
            >
              <svg className={` w-7 h-7 sm:w-9 sm:h-8 cursor-pointer`} aria-label="Contact">
                <use xlinkHref="#icon-user" />
              </svg >
              <h3 className='text-md sm:text-lg'>
                Account
              </h3>
            </a>
          </li>

        </ul>
      
    </nav>
  );
} 