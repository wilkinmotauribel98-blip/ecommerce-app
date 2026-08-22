import { object } from "framer-motion/client";
import CartItem from "./CartItem"
import CartSummary from "./CartSummary";
import { useCart } from '@/hooks/useCart'

export default function CartItems(){
  const cart = useCart((state) => state.cart);
  
  return (
    <section className="lg:flex gap-5">
      <div className="border mb-10 flex-1  border-zinc-800 flex flex-col rounded-2xl overflow-hidden">
        <div className=" text-white bg-zinc-900 hidden md:flex px-3 py-3" >
        <h2 className="flex-2">Product</h2>
        <div className="flex-2 flex  mr-8">
          <h3 className="flex-1 ml-10 ">Price</h3>
          <h3 className="flex-1 text-center ">Quantity</h3>
          <h3 className="flex-1 text-center">Total</h3>
        </div>
      </div>
      {
        Object.entries(cart).map(([key, value]) => <CartItem key={key} id={key} product={value}/>)
      } 
        
      </div>
      <CartSummary />
    </section>
  )
} 