import { div, link } from "framer-motion/client";
import { useState, useEffect } from "react";
import { useProducts } from "../../../hooks/useProducts";
import { SuggestionCard } from "../../ui/SuggestionCard";
import { Links }  from "../../ui/Links";
const  mobileLogo = <div className="flex gap-2 items-center pt-9 mx-auto w-min">
        <svg className={` w-13 h-13 text-zinc-200 cursor-pointer z-50  `} onClick={()=> setMenu(!menu)} >
        <use xlinkHref={'#icon-logo'} />
        </svg>
        <span className={`text-white text-3xl`}>NIFLIX</span>
        
</div>


export function Header() {
  const [menu, setMenu] = useState(false);
  const [open, setOpen] = useState("#icon-menu");
  const [size, setSize] = useState(window.innerWidth);
  const [searcher, setSearcher] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [products, setProducts] = useState(false);
  const [suggestions, setSuggestions] = useState(null);
  const setSearchIcon = size < 768 ? '' : '#icon-close'
  const mobileMenu = searcher && size < 768 ?
    <svg className={` w-6.5 h-6.5 text-zinc-200 cursor-pointer  `} onClick={()=> setSearcher(!searcher)} >
          <use xlinkHref={`#icon-arrow-back`} />
      </svg> : <svg className={` w-6.5 h-6.5 text-zinc-200 cursor-pointer  `} onClick={()=> setMenu(!menu)} >
          <use xlinkHref={size < 1024 ? '#icon-menu' : '#icon-logo'} />;
        </svg>

  useEffect(()=>{ 
    fetch(`https://dummyjson.com/products/`)
    .then(res => res.json())
    .then(data => setProducts(data))
    addEventListener('resize', ()=>{
      setSize(window.innerWidth)
      size >= 1024 ? setMenu(false) : '';
      size >= 1024 ? setSearcher(false) : '';
    })
  },[])
  console.log(suggestions);
  
  useEffect(()=>{
    if(!products) return
    if(!searchText) return
    setSuggestions(products.products.filter(e => (e.title.toLowerCase().startsWith(searchText.toLowerCase()) || e.category.toLowerCase().startsWith(searchText.toLowerCase()))));
  }, [searchText]) 
  
  return(
    <header className={`w-full bg-gray-950 h-20 flex items-center justify-between  fixed lg:relative `}>
      <div className="flex items-center gap-2 px-2">
        {mobileMenu}
        <span className={`text-white text-3xl ${searcher && size <= 768 ? 'hidden' : 'flex'}`}>NIFLIX</span>
      </div>

      <div className={`flex  flex-col lg:flex-row fixed  lg:relative top-0 lg:top-auto gap-13 lg:gap-8 ${menu ? 'w-64 ': 'w-0 '} lg:w-max  ${menu ? '' : 'overflow-hidden'} lg:overflow-visible ${searcher && size >= 1024 ? 'hidden' : 'flex'} h-dvh z-50 lg:h-auto text-zinc-500 text-2xl bg-black items-center transition-[width] duration-200 ease `}>
        
        {size <= 1024 ? mobileLogo : ''}

        {menu && size < 1024 ? <svg className={` w-9 h-9 text-zinc-200 cursor-pointer z-50 absolute -right-5 top-2  `} onClick={()=> setMenu(!menu)} >
          <use xlinkHref={'#icon-close'} />
        </svg> : ''}
        {menu || size >=1024  ? <Links/> : ''}
      </div>

      {menu ? <div className="inset-0 z-20 fixed " onClick={()=> setMenu(!menu)}></div> : ''}

      <div className=" mr-3 lg:mr-9 flex gap-2 sm:gap-3 text-zinc-200 items-center">

        <div className={`flex bg-zinc-900 ${searcher ? 'border-emerald-400 border-2 py-3 px-7 gap-5  justify-center rounded-2xl w-[80dvw] sm:w-[70dvw]' : ''}`}>
          <svg className={`w-4.5 h-4.5 text-emerald-400 mt-0.5 ${searcher ? '' : 'hidden'}`}>
            <use xlinkHref="#icon-search"/>
          </svg>
          <input type="text" value={searchText} onChange={(e)=> setSearchText(e.target.value)} name="" id="" className={` caret-emerald-500 focus:border-0 focus:outline-0 overflow-hidden  ${searcher ? 'w-4/4' : 'w-0'} `}/>

          {(suggestions !== null && searcher) && searchText ? <div className="absolute top-17 w-[80dvw] sm:w-[70dvw]  flex flex-col rounded-xl overflow-hidden bg-gray-600">{suggestions.map(e => <SuggestionCard size={size} info={e} key={e.id}/> )} <h2 className="text-emerald-600 ml-4 p-1.5 sm:text-2xl">{suggestions.length > 1 ? `See all results for  "${searchText}"`: 'No results'}</h2></div>: ''}
          </div>


        <svg className={`w-6.5 h-6.5 ${searcher && size < 768 ? 'hidden' : ''}` }onClick={()=> setSearcher(!searcher)}>
            <use xlinkHref={`${searcher  ? setSearchIcon : '#icon-search'}`}/>
          </svg>
        <svg className='w-6.5 h-6.5 hidden lg:block'>
          <use xlinkHref="#icon-user"/>
        </svg>

        <svg className='w-6.5 h-6.5'>
          <use xlinkHref="#icon-cart"/>
        </svg>

      </div>
    </header>
  )
}