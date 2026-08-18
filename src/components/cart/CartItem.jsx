import { useCart } from "@/hooks/useCart";

export default function CartItem() {
   const total = useCart((state)=> state.total);

   return(
     <div className="w-6.5 h-6.5 relative mr-3 select-none">
          <svg 
            className='w-6.5 h-6.5 cursor-pointer absolute' 
            aria-label="Shopping cart">
            <use href="/sprite-core.svg#icon-cart"/>
          </svg>
         {
          total ? <span className={`rounded-full text-black ${total > 99 ? '-right-5 -top-2.5 min-w-7 w-fit py-0.5   min-h-7 ' : '-right-4.5 -top-3 min-w-7 w-fit  min-h-6  py-0.5'} bg-emerald-500 absolute   z-10   text-center text-balance  h-auto`}>
          {total > 99 ? '99+' : total}</span>
          : <></>
         }
        </div>
   )

}
