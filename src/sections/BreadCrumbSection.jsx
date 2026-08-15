import { Link } from "react-router-dom"

export default function BreadCrumbSection({ category, brand, title}) {
  return(
    <section 
      className="px-3 text-zinc-400 flex gap-2 items-center w-full flex-wrap"
      aria-label="BreadCrumb"
    >
      <Link 
        to={'/'} 
        aria-label="Link to Home"
      >Home</Link>
      <svg className="w-7 h-7">
        <use xlinkHref="#chevron-right"></use>
      </svg>
      <Link 
        className="capitalize" 
        to={`/category/${category}`}
        aria-label={`Link to Category ${category}`}
        >{category}
        
      </Link>
      
      <svg className="w-7 h-7 ">
        <use xlinkHref="#chevron-right"></use>
      </svg>
      <h2 
        className="text-emerald-400"
        
        >{title}</h2>
    </section>
  )
  
}
