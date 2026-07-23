import { article } from "framer-motion/client";

export function FeatureCard({className, icon, title, description}) {
  return(
    <article className="flex flex-col w-max flex-1 lg:flex-row md:border-l border-zinc-800 sm:gap-0  items-center text-zinc-400 lg:gap-4 ">
      <svg className={`${className} `}>
        <use xlinkHref={icon}></use>
      </svg>

      <div className="flex flex-col "> 
        <h2 className="text-zinc-400 text-sm sm:text-lg p-0 m-0 ">{title}</h2>
        <p className="text-zinc-500 hidden lg:block">{description}</p>
      </div>
    </article>
  )
}