import { Link } from "react-router-dom";


export default function BottomNavbar() {
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
            <Link to="/" 
              className="flex flex-col items-center"
              aria-label="Navigate to Home page"
            >
              <svg className={` w-7 h-7 sm:w-9 sm:h-8  cursor-pointer`} aria-label="Home">
                <use href="/sprite-core.svg#icon-home"/>
              </svg>
              <p className='text-md sm:text-lg'>
                Home
              </p>
            </Link>
          </li>

          <li 
            className="text-zinc-400 flex-1 cursor-pointer"
            aria-label="Shop link"
          >
            <Link to="/" 
              className="flex flex-col items-center"
              aria-label="Navigate to Shop page"
            >
              <svg className={` w-7 h-7 sm:w-9 sm:h-8 cursor-pointer `} aria-label="Products">
                <use href="/sprite-core.svg#icon-shop"/>
              </svg >
              <p className='text-md sm:text-lg'>
                Shop
              </p>
            </Link>
          </li>

          <li className="text-zinc-400 flex-1 cursor-pointer"
          aria-label="Categories link"
          >
            <Link to="/" 
              className="flex flex-col items-center"
              aria-label="Navigate to Categories page"
            >
              <svg className={` w-7 h-7 sm:w-9 sm:h-8 text-zinc-400 cursor-pointer`} aria-label="About">
                <use href="/sprite-core.svg#icon-grid"/>
              </svg >
              <p className='text-md sm:text-lg'>
                Categories
              </p>
            </Link>
          </li>

          <li className="text-zinc-400 flex-1 cursor-pointer"
          aria-label="Cart link"
          >
            <Link to="/" 
              className="flex flex-col items-center"
              aria-label="Navigate to Cart page"
            >
              <svg className={` w-7 h-7 sm:w-9 sm:h-8  cursor-pointer`} aria-label="Contact">
                <use href="/sprite-core.svg#icon-cart"/>
              </svg >
              <p className='text-md sm:text-lg'>
                Cart
              </p>
            </Link>
          </li>

            <li className=" text-zinc-400 flex-1  cursor-pointer" aria-label="Account link">
            <Link to="/" className="flex flex-col items-center"
              aria-label="Navigate to Account page"
            >
              <svg className={` w-7 h-7 sm:w-9 sm:h-8 cursor-pointer`} aria-label="User Account">
                <use href="/sprite-core.svg#icon-user"/>
              </svg >
              <p className='text-md sm:text-lg'>
                Account
              </p>
            </Link>
          </li>

        </ul>
      
    </nav>
  );
} 

