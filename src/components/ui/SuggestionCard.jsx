
export function SuggestionCard({info, size}) {
  return(
    <article className="flex items-center  cursor-pointer  bg-gray-900 border-b border-b-gray-500 z-90 ">
        <img src={info.images[0]} alt={`this is the image of the ${info.title}`} className="w-2/12 min-w-16 aspect-square"/>
      <div className="flex flex-col mr-10">
        <h2 className="sm:text-xl lg:text-2xl">{info.title}</h2>
        <div className="flex items-center gap-1 text-zinc-500">
          <h3>{info.category}</h3>
          {size < 500 ? '' :<>
          <span className="w-1 h-1 rounded-full bg-zinc-600"></span>
          <h3>{info.brand}</h3> </> } 
        </div>
      </div>
      <div className="w-min ml-auto pr-4 mb-4">
          <h2 className="m-0 p-0 text-emerald-600">${info.price}</h2>
      </div>
    </article>
  )
}