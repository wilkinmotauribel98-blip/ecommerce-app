import { Link } from "react-router-dom"

export function FeatureCard({className, icon, title, description, hidden}) {
  return(
    <Link
      to={`/ecommerce-app/category/${title.toLowerCase().replace(/\s/g, '-')}`}
      className={`flex flex-col ${hidden} w-max flex-1 lg:flex-row md:border-l border-zinc-800 sm:gap-0  items-center text-zinc-400 lg:gap-4 `}
      aria-label={`Feature: ${title} - ${description}`}
    >
      <svg className={`${className}`}>
        <use href={`/ecommerce-app/sprite-extra.svg#${icon}`}></use>
      </svg>

      <div className="flex flex-col "> 
        <span className="text-zinc-400 text-[12px] sm:text-lg p-0 m-0 md:text-center ">{title}</span>
        <p className="text-zinc-500 hidden md:block text-sm">{description}</p>
      </div>
    </Link>
  )
}