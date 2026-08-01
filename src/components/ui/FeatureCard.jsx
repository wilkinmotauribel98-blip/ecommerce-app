

export function FeatureCard({className, icon, title, description}) {
  return(
    <article 
      className="flex flex-col w-max flex-1 lg:flex-row md:border-l border-zinc-800 sm:gap-0  items-center text-zinc-400 lg:gap-4 "
      aria-label={`Feature: ${title} - ${description}`}
    >
      <svg className={`${className} `}>
        <use xlinkHref={icon}></use>
      </svg>

      <div className="flex flex-col "> 
        <h2 className="text-zinc-400 text-[11px] sm:text-lg p-0 m-0 md:text-center ">{title}</h2>
        <p className="text-zinc-500 hidden md:block text-sm">{description}</p>
      </div>
    </article>
  )
}