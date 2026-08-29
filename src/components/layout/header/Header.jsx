import { useState, useEffect, useMemo, lazy, Suspense } from "react"; 
import Cart from "@/components/cart/Cart.jsx";
import SearchSkeleton from "@/components/ui/SearchSkeleton.jsx";
import { Link } from "react-router-dom";

export default function  Header() {
  const [size, setSize] = useState(window.innerWidth);
  const [searcher, setSearcher] = useState(false);
  const [searchText, setSearchText] = useState('');
  const setSearchIcon = size < 768 ? '' : '/ecommerce-app/sprite-core.svg#icon-close'
  const Suggestions = lazy(()=> import('../../ui/Suggestions.jsx'))


  
  useEffect(()=>{ 
    const sizer =()=>{
      setSize(window.innerWidth)
      if(size >= 1024) setSearcher(false);
}
    addEventListener('resize', sizer)
    return ()=> removeEventListener('resize', sizer)
  },[]);

  
  return(
    <header className={`w-full max-w-400 m-auto bg-black h-17  flex items-center justify-between   lg:relative  z-50`}>
      <div className="flex items-center gap-2 px-2">
        {searcher && size < 768 
          ?
            <svg 
              className={` w-6.5 h-6.5 text-zinc-200 cursor-pointer  `} 
              onClick={()=> setSearcher(!searcher)}
              aria-label="search opened, click to close"
            >
              <use href="/ecommerce-app/sprite-core.svg#icon-arrow-back"/>
            </svg> 
          : 
            <svg 
              className={` w-6.5 h-6.5 text-zinc-200 cursor-pointer`}
              aria-label="Niflix logo"
            >
            <use href="/ecommerce-app/sprite-core.svg#icon-logo"/>
          </svg>}
        <h1 className={`text-white text-3xl ${searcher && size <= 768 ? 'hidden' : 'flex'}`}>NIFLIX</h1>
      </div>

      {size >= 1024 && 
        <ul className={`flex  relative gap-8 w-max overflow-visible ${searcher && size >= 1024 ? 'hidden' : 'flex'} h-dvh z-50 lg:h-auto text-zinc-500 text-2xl bg-black items-center transition-[width] duration-200 ease `}
          aria-label="Navigation links"
        >
          <li  className="text-emerald-500 hover:text-gray-400  cursor-pointer" aria-label="Home">
              <Link to={'/ecommerce-app'}>
              Home
              </Link>
            </li>
          <li  className="text-white hover:text-gray-400" aria-label="Shop">
            <a href="/shop">Shop</a>
          </li>
          <li  className="text-white hover:text-gray-400" aria-label="Categories">
            <a href="/ecommerce-app/categories">Categories</a>
          </li>
          <li  className="text-white hover:text-gray-400" aria-label="Discover">
            <a href="/discover">Discover</a>
          </li>
          <li  className="text-white hover:text-gray-400" aria-label="Support">
            <a href="/support">Support</a>
          </li>
          </ul>
      }

      <div className="mr-3 lg:mr-9 flex gap-2 sm:gap-3 text-zinc-200 items-center">
        <div className={`flex bg-zinc-900 ${searcher ? 'border-emerald-400 border-2 py-3 px-7 gap-5 mt-2 justify-center rounded-full w-[70dvw] max-w-4xl' : ''}`}>
          <svg className={`w-4.5 h-4.5 text-emerald-400 mt-0.5 ${searcher ? '' : 'hidden'}`}>
            <use href="/ecommerce-app/sprite-core.svg#icon-search"/>
          </svg>

          <form 
            action="search" 
            className={`flex items-center w-full ${searcher ? 'justify-center' : ''}`}
            aria-label="Search form"
            >
            <input  
            type="text"
            label="Search for articles"
            aria-label="Search for articles" 
            value={searchText} 
            onChange={(e)=> setSearchText(e.target.value)} 
            placeholder="Search for articles" 
            className={`caret-emerald-500 focus:border-0 focus:outline-0 overflow-hidden   ${searcher ? 'w-4/4' : 'w-0'} `}
          />
          </form>

          {
            (searchText.length > 0 && searcher)  
            &&
              <Suspense fallback={<SearchSkeleton count={3} />}>
                <Suggestions query={searchText} onClose={()=> setSearcher(false)}/>
              </Suspense>
              
          }
        </div>

          <svg 
            className={`w-6.5 h-6.5 cursor-pointer ${searcher && size < 768 ? 'hidden' : ''}` }
            onClick={()=> setSearcher(!searcher)}
            aria-label="Search">
            <use href={searcher ? setSearchIcon : '/ecommerce-app/sprite-core.svg#icon-search'}/>
          </svg>
          
          <svg 
            className='w-6.5 h-6.5 hidden lg:block'
            aria-label="User profile">
            <use href="/ecommerce-app/sprite-core.svg#icon-user"/>
          </svg>
         
          <Cart />
      </div>
    </header>
  )
}