import { Link } from "react-router-dom"
import Skeleton from "@/components/ui/Skeleton"

export default function BreadCrumbSection({ category, brand, title, loading, product, cart}) {
  if (loading) {
    return (
      <section 
        className="px-3 flex gap-2 items-center w-full flex-wrap py-1"
        aria-label="BreadCrumb loading"
      >
        <Skeleton className="h-4 w-10" />
        <Skeleton className="h-3 w-3" />
        <Skeleton className="h-4 w-16" />
        <Skeleton className="h-3 w-3" />
        <Skeleton className="h-4 w-28" />
      </section>
    )
  }
  
  
  return(
    <section 
      className="px-3 text-zinc-400 flex mt-5 gap-2 items-center w-full flex-wrap"
      aria-label="BreadCrumb"
    >
      <Link 
        className=""
        to={'/ecommerce-app'} 
        aria-label="Link to Home"
      >Home</Link>
      <svg className="w-7 h-7">
        <use href="/ecommerce-app/sprite-core.svg#chevron-right"></use>
      </svg>
      
      {cart &&
      <>
      
      <h2 
        className="text-zinc-400"
        >{title}</h2>
    </>}
      {product &&
      <>
      <Link 
        className="capitalize " 
        to={`/ecommerce-app/category/${category}`}
        aria-label={`Link to Category ${category}`}
        >{category}
      </Link>
      
      <svg className="w-7 h-7 ">
        <use href="/ecommerce-app/sprite-core.svg#chevron-right"></use>
      </svg>
      <h2 
        className="text-emerald-400"
        
        >{title}</h2>
      </>}
    </section>
  )
  
}
