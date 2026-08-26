


export default function Filters( { brands} ){
  



  return(
    <aside className="text-white shrink-0 w-60 h-dvh border border-zinc-800 rounded-2xl">
      <div className="flex border-b border-zinc-800 py-5 px-3">
        <h2 className="text-xl">filters</h2>
        <span className="ml-auto text-green-400">Clear All</span>
      </div>
      <div className="px-3 flex flex-col gap-5 border-b py-5 border-zinc-800">
        <h3>Price</h3>
        <form action="" onChange={handleChange} className="flex flex-col text-zinc-400 gap-3">
          <div>
            <div className="flex gap-2 items-center">
              <input type="checkbox" name="$0-$99" id="" />
              <span>$0-$99</span>
            </div>
            <div className="flex gap-2 items-center">
              <input type="checkbox" name="$100-$199" id="" className="bg-amber-200" />
              <span>$100-$199</span>
            </div>
            <div className="flex gap-2 items-center">
              <input type="checkbox" name="$200-$299" id="" />
              <span>$200-$299</span>
            </div>
            <div className="flex gap-2 items-center">
              <input type="checkbox" name="$300+" id="" />
              <span>$300+</span>
            </div>
          </div>

          <div className="flex flex-col gap-2 border-t py-5 border-zinc-800">
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
          </div>

        </form>
      </div>
    </aside>
  )
  
}