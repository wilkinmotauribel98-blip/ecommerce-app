
export function SuggestionCard({info, size}) {
  return(
    <article className="flex items-center  cursor-pointer  bg-gray-900 border-b border-b-gray-500 z-90 ">
        <img src={info.images[0]} alt={`this is the image of the ${info.title}`} className="w-2/12 min-w-16 aspect-square"/>
      <div className="flex flex-col mr-10">
        <span className="sm:text-xl lg:text-2xl">{info.title}</span>
        <div className="flex items-center gap-1 text-zinc-500">
          <p>{info.category}</p>
          {size < 500 || !info.brand  ? '' :<>
          <span className="w-1 h-1 rounded-full bg-zinc-600"></span>
          <p>{info.brand}</p> </> } 
        </div>
      </div>
      <div className="w-min ml-auto pr-4 mb-4">
          <span className="m-0 p-0 text-emerald-600">${info.price}</span>
      </div>
    </article>
  )
}