import { useCart } from "@/hooks/useCart";

export default function Cart(){
   const total = useCart((state)=> state.total)

   return(
     <div className="w-6.5 h-6.5 relative mr-3 select-none">
          <svg 
            className='w-6.5 h-6.5 absolute' 
           aria-label="Shopping cart">
            <use href="/sprite-core.svg#icon-cart"/>
            
          </svg>
        <span className="rounded-full bg-emerald-500 absolute -top-3 z-10 -right-4.5  text-center justify-items-center min-w-7 w-fit  min-h-6 p-0.5 h-auto"><span>{total > 99 ? '99+' : total}</span></span>
        </div>
   )
}