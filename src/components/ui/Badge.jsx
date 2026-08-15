export default function Badge({icon, title, desc, style}) {
  return (
    <>
    <li 
        className={`min-w-35 sm:min-w-57 md:min-w-40 items-center flex-1 flex ${style ? style : "flex-col"} gap-1 text-white text-lg `}
        aria-label={`${title}: ${desc}`}
        >
            <svg className="w-10 text-emerald-400 h-10">
              <use href={`/sprite-extra.svg#${icon}`}></use>
            </svg>
            <div>
              <h3 className={`font-bold text-sm ${style ? '': "text-center"}`}>{title}</h3>
            <p className={`text-zinc-600 text-pretty ${style ? '': "text-center"}`}>{desc}</p>
            </div>
    </li>
    </>
  )
}
