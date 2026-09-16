export default function SupportCard({icon, description, title}){
  return(
    <article className="flex gap-4 items-center py-2.5 px-2 w-full bg-gray-900/50 border border-zinc-800 rounded cursor-pointer">
        <svg className={`w-15 h-15 text-emerald-300 mt-0.5`}>
          <use href={`/ecommerce-app/sprite-core.svg#icon-${icon}`}/>
        </svg>
        <div className="flex flex-col gap-1">
          <h3 className="text-zinc-200 text-lg">{title}</h3>
          <p className="text-zinc-400 max-w-60 text-pretty">{description}</p>
        </div>
    </article>
  )
}