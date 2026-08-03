import { useState, useEffect } from "react"; 
import { SuggestionCard } from "@/components/ui/SuggestionCard";
import { useProducts } from "@/hooks/useProducts";

export default function  Header() {
  const [size, setSize] = useState(window.innerWidth);
  const [searcher, setSearcher] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [suggestions, setSuggestions] = useState(null);

  const products = useProducts((state)=>state.products);
  const setSearchIcon = size < 768 ? '' : '#icon-close'


  useEffect(()=>{ 
    const sizer =()=>{
      setSize(window.innerWidth)
      size >= 1024 ? setSearcher(false) : '';
}
    addEventListener('resize', sizer)
    return ()=> removeEventListener('resize', sizer)
  },[])
  
  useEffect(()=>{
    if(!products) return
    if(!searchText) return
    setSuggestions(products.filter(e => (e.title.toLowerCase().startsWith(searchText.toLowerCase()) || e.category.toLowerCase().startsWith(searchText.toLowerCase()))));
  }, [searchText]) 
  
  return(
    <header className={`w-full max-w-360 m-auto bg-black h-15 flex items-center justify-between   lg:relative  z-50`}>
      <div className="flex items-center gap-2 px-2">
        {searcher && size < 768 
          ?
            <svg 
              className={` w-6.5 h-6.5 text-zinc-200 cursor-pointer  `} 
              onClick={()=> setSearcher(!searcher)}
              aria-label="search opened, click to close"
            >
              <use xlinkHref={`#icon-arrow-back`} />
            </svg> 
          : 
            <svg 
              className={` w-6.5 h-6.5 text-zinc-200 cursor-pointer`}
              aria-label="Niflix logo"
            >
            <use xlinkHref={'#icon-logo'} />
          </svg>}
        <h1 className={`text-white text-3xl ${searcher && size <= 768 ? 'hidden' : 'flex'}`}>NIFLIX</h1>
      </div>

      {size >=1024 ?
        <ul className={`flex  relative gap-8 w-max overflow-visible ${searcher && size >= 1024 ? 'hidden' : 'flex'} h-dvh z-50 lg:h-auto text-zinc-500 text-2xl bg-black items-center transition-[width] duration-200 ease `}>
          <li  className="text-emerald-400 hover:text-gray-400  cursor-pointer" aria-label="Home">Home</li>
          <li  className="text-white hover:text-gray-400" aria-label="Shop">
            <a href="/shop">Shop</a>
          </li>
          <li  className="text-white hover:text-gray-400" aria-label="Categories">
            <a href="/categories">Categories</a>
          </li>
          <li  className="text-white hover:text-gray-400" aria-label="Discover">
            <a href="/discover">Discover</a>
          </li>
          <li  className="text-white hover:text-gray-400" aria-label="Support">
            <a href="/support">Support</a>
          </li>
          </ul>
      : ''}

      <div className="mr-3 lg:mr-9 flex gap-2 sm:gap-3 text-zinc-200 items-center">
        <div className={`flex bg-zinc-900 ${searcher ? 'border-emerald-400 border-2 py-3 px-7 gap-5  justify-center rounded-2xl w-[80dvw] sm:w-[70dvw] max-w-4xl' : ''}`}>
          <svg className={`w-4.5 h-4.5 text-emerald-400 mt-0.5 ${searcher ? '' : 'hidden'}`}>
            <use xlinkHref="#icon-search"/>
          </svg>

          <form action="search" className={`flex items-center w-full ${searcher ? 'justify-center' : ''}`}>
            <input  
            type="text"
            label="Search for articles"
            aria-label="Search for articles" 
            value={searchText} 
            onChange={(e)=> setSearchText(e.target.value)} 
            placeholder="Search for articles" 
            className={` caret-emerald-500 focus:border-0 focus:outline-0 overflow-hidden   ${searcher ? 'w-4/4' : 'w-0'} `}
          />
          </form>

          {
            (suggestions !== null && searcher) && (searchText.length > 0) 
            ? 
              <div className="absolute top-17 w-[80dvw] sm:w-[70dvw] max-w-4xl flex flex-col rounded-xl overflow-hidden bg-gray-600 z-20">
                  {suggestions.slice(0,3).map(e => <SuggestionCard size={size} info={e} key={e.id}/>)}
                  <h2 className="text-emerald-600 ml-4 p-1.5 sm:text-2xl">
                    {suggestions.length > 0 ? `See all results for  "${searchText}"`: 'No results'}
                  </h2>
              </div> 
              : ''
          }
        </div>

          <svg 
            className={`w-6.5 h-6.5 ${searcher && size < 768 ? 'hidden' : ''}` }
            onClick={()=> setSearcher(!searcher)}
            aria-label="Search">
            <use xlinkHref={`${searcher  ? setSearchIcon : '#icon-search'}`}/>
          </svg>
          
          <svg 
            className='w-6.5 h-6.5 hidden lg:block'
            aria-label="User profile">
            <use xlinkHref="#icon-user"/>
          </svg>
          
          <svg 
            className='w-6.5 h-6.5' 
           aria-label="Shopping cart">
            <use xlinkHref="#icon-cart"/>
          </svg>

      </div>
    </header>
  )
}