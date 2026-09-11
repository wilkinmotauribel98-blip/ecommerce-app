import YouMayAlsoLikeCard from "../cart/YouMayAlsoLikeCard"
import { useState, useEffect } from "react"
const arr = [1,2,3,4,5]

export default function CategoryContent ( { content, brands}){
  const [dates, setDates ] = useState();
  const [filters, setFilters] = useState([]);
  const [products, setProducts] = useState(content);
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState(window.innerWidth)
  useEffect(()=>{
    if(!brands) return
    brands.map((e)=> {
      setDates((prev) => ({...prev, [e]: false}))
    })
  },[brands])
    useEffect(()=>{
      if(!dates) return
      setFilters(() => {
      return Object.entries(dates).filter(([key, value]) => value === true).map(e => e[0])
    })
    }, [dates])

    useEffect(()=>{
      if(!filters.length) return setProducts(content)
        const a = filters.filter(e => {
        if (!isNaN(Number(e))) return e
      })


      const priceFilter= (n)=>{
      let p;
      if(n > 0 && n < 100) p = '1';
      if(n > 99 && n < 200) p = '2';
      if(n > 199 && n < 300) p = '3';
      if(n > 300) p = '4';
      if(!a.length) return true;
      return a.includes(p)
  }

const c = filters.filter(e => e.includes('stars'))
      
  
  const ratingFilter = (n)=>{
      let p;
      if(n >= 1) p = '1 stars';
      if(n >= 2) p = '2 stars';
      if(n >= 3) p = '3 stars';
      if(n >= 4) p = '4 stars';
      if(n >= 5) p = '5 stars';
      if(!c.length) return true;
      return c.includes(p)
  }
const v = filters.filter(e => {
        if (brands.includes(e)) return e
      })
      setProducts(() =>{
        return content.filter(p => {
          const brandFilter = ()=>{
            if(v < 1) return true;
            return filters.includes(p.brand)
          }
          
          if((ratingFilter(p.rating) && brandFilter()) && priceFilter(p.price)) return p
        })
      })

    }, [filters])


    useEffect(()=>{
      const sizer = () => {
        setSize(window.innerWidth)
        if(window.innerWidth < 768) setOpen(false)
      };
      addEventListener('resize', sizer);
      return ()=> removeEventListener('resize', sizer)
    },[])

  const handleChange = (event)=>{
    const data = event.target;
    setDates((prev) => ({...prev, [data.name]: data.checked}));
  }
  
 
  return(
    <>
    <button 
          className="text-white hidden md:block border ml-5 border-zinc-700 py-2 px-15 rounded my-3"
          onClick={()=>setOpen(!open)}
        >Filters</button>
    <section className="flex flex-col relative md:flex-row  gap-8 mb-20" >
      
    <div> 
    <aside 
      className="text-white absolute   top-0 md:relative shrink-0 w-60 transition-all bg-black   z-50 overflow-hidden  rounded-2xl"
      style={{height: `${open ? '100dvh' : '0'}`, position: `${open ? 'relative' : 'absolute'}`}}
    >
      <div className="flex border-b border-zinc-800 py-5 px-3">
        <h2 className="text-xl">filters</h2>
        <span className="ml-auto text-green-400">Clear All</span>
      </div>
      <div className="px-3 flex flex-col gap-5 border-b py-5 border-zinc-800">
        <h3>Price</h3>
        <form action="" onChange={handleChange} className="flex flex-col text-zinc-400 gap-3">
          <div>
            <div className="flex gap-2 items-center">
              <input type="checkbox" name="1" id="" />
              <span>$0-$99</span>
            </div>
            <div className="flex gap-2 items-center">
              <input type="checkbox" name="2" id="" className="bg-amber-200" />
              <span>$100-$199</span>
            </div>
            <div className="flex gap-2 items-center">
              <input type="checkbox" name="3" id="" />
              <span>$200-$299</span>
            </div>
            <div className="flex gap-2 items-center">
              <input type="checkbox" name="4" id="" />
              <span>$300+</span>
            </div>
          </div>

          
            { brands.length > 1 && 
          <div className="flex flex-col gap-2 border-y py-5 border-zinc-800 ">
            <h3 className="text-white">Brand</h3> 
              {
                brands.map(b => {
                return (
                <div className="flex gap-2 items-center" key={b}>
                  <input type="checkbox" name={b} id="" />
                  <span>{b}</span>
                </div>
                )
              })
              }
          </div> }

          <div>
            <h3 className="text-white py-2">Rating</h3>
            {arr.map(e=>{
              return(<div key={e} className="flex gap-2 items-center">
              <input type="checkbox" name={`${6 - e} stars`} id="" className="bg-amber-200" />
              <span className="flex">
                {
                  arr.map(a => a < 7 - e ? <svg key={a} className="w-6 h-6 text-amber-300 "><use href="/ecommerce-app/sprite-extra.svg#icon-star"></use> </svg> : <svg  className="w-6 h-6" key={a} ><use href="/ecommerce-app/sprite-extra.svg#icon-void-star"></use> </svg>)
                }
              </span>
            </div>)
            })}
           
          </div>
          

        </form>
      </div>
    </aside>
      </div>
      <section className="grid w-full grid-cols-[repeat(auto-fill,minmax(150px,1fr))] grid-rows-3 md:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-5 "> 
        {products.map(e => <YouMayAlsoLikeCard key={e.id} category={true} product={e}/> )}
      </section>
    </section>
    </>
  )
}