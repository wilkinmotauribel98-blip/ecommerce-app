import YouMayAlsoLikeCard from "../cart/YouMayAlsoLikeCard"
import { useState, useEffect, useMemo } from "react"
const arr = Array.from({length: 5}).map((_,i) => i + 1)

export default function CategoryContent ( { content, brands}){
  const [filters, setFilters] = useState([]);
  const [open, setOpen] = useState(window.innerWidth > 768);

const toggleFilter = (key) => {
  setFilters(prev =>
    prev.includes(key) ? prev.filter(f => f !== key) : [...prev, key]
  );
};

const isChecked = (key) => filters.includes(key);

const getRatingKey = (key) => `${Math.floor(key)} stars`

const getPriceKey = (n)=>{
      if(n < 100) return '1';
      if(n < 200) return '2';
      if(n < 300) return '3';
      return '4'
  }

const products = useMemo(()=> {
  const brandsSel =  filters.filter(f => brands.includes(f)) 
  const ratingsSel = filters.filter(f => f.includes('stars'))
  const priceSel = filters.filter(f => !isNaN(Number(f)))
  
  return content.filter(p => {
    const okBrand = !brandsSel.length || brandsSel.includes(p.brand);
    const okRating = !ratingsSel.length || ratingsSel.includes(getRatingKey(p.rating))
    const okPrice = !priceSel.length || priceSel.includes(getPriceKey(p.price))

    return okBrand && okPrice && okRating
  })

  }, [filters, content, brands])


    useEffect(()=>{
      const sizer = () => {
        if(window.innerWidth < 768) setOpen(false)
      };
      addEventListener('resize', sizer);
      return ()=> removeEventListener('resize', sizer)
    },[])

  const handleChange = (event)=>{
    const data = event.target;
    toggleFilter(data.name);
  }

  const handleClear = ()=>{
    const inputs = document.querySelectorAll('input[type="checkbox"]');
    inputs.forEach(input => input.checked = false);
    setFilters([])
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
        <button className="ml-auto text-green-400" onClick={handleClear}>
          Clear All
        </button>
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
                  <input type="checkbox" name={b} checked={isChecked(b)}/>
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