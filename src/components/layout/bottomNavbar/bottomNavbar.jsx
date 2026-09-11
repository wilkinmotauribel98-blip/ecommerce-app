import { Link } from "react-router-dom";
import Cart from "../../cart/Cart";
import { PageContext } from "@/context/PageContext";
import { useContext } from "react";

export default function BottomNavbar() {
  const {actualPage} = useContext(PageContext)
  
  
  return (
    <nav 
      className="w-dvw h-20 fixed bottom-0 bg-black z-50 justify-center items-center flex lg:hidden"
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
            <Link to="ecommerce-app" 
              className={`flex flex-col ${actualPage !== 'shop' && actualPage !== 'support' && actualPage !== 'categories' && actualPage !== 'new-arrivals' && 'text-emerald-400'}  items-center`}
              aria-label="Navigate to Home page"
            >
              <svg className={` w-7 h-7 sm:w-9 sm:h-8  cursor-pointer`} aria-label="Home">
                <use href="/ecommerce-app/sprite-core.svg#icon-home"/>
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
            <Link to="/ecommerce-app/shop" 
              className={`flex flex-col ${actualPage === 'shop' && 'text-emerald-400'}  items-center`}
              aria-label="Navigate to Shop page"
            >
              <svg className={` w-7 h-7 sm:w-9 sm:h-8 cursor-pointer `} aria-label="Products">
                <use href="/ecommerce-app/sprite-core.svg#icon-shop"/>
              </svg >
              <p className='text-md sm:text-lg'>
                Shop
              </p>
            </Link>
          </li>

          <li className="text-zinc-400 flex-1 cursor-pointer"
          aria-label="Categories link"
          >
            <Link to="/ecommerce-app/categories" 
              className={`flex flex-col ${actualPage === 'categories'  && 'text-emerald-400'}  items-center`}
              aria-label="Navigate to Categories page"
            >
              <svg className={` w-7 h-7 sm:w-9 sm:h-8  cursor-pointer`} aria-label="About">
                <use href="/ecommerce-app/sprite-core.svg#icon-grid"/>
              </svg >
              <p className='text-md sm:text-lg'>
                Categories
              </p>
            </Link>
          </li>

        

            <li className=" text-zinc-400 flex-1 w-min  cursor-pointer" aria-label="Account link">
            <Link 
            to="/ecommerce-app/new-arrivals" 
            aria-label="Navigate to new arrivals page"
            className={`flex flex-col  ${actualPage === 'new-arrivals'  && 'text-emerald-400'}  items-center`}
            >
              <svg className={` w-7 h-7 sm:w-9  sm:h-8  cursor-pointer`} aria-label="User Account">
                <use href="/ecommerce-app/sprite-core.svg#icon-new-arrivals"/>
              </svg >
              <p className='text-md sm:text-lg'>
                Arrivals
              </p>
            </Link>
          </li>

        </ul>
      
    </nav>
  );
} 

