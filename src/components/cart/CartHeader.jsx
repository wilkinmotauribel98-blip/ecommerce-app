import { useCart } from "@/hooks/useCart";


export default function CartHeader (){
  const cartLength = Object.keys(useCart((state)=> state.cart)).length;

    
  
  
  return(
    <header className="my-8">
      <h1 className="text-white text-3xl">Your Cart ({cartLength})</h1>
      <p className="text-zinc-400">Review your items and proceed to checkout</p>
    </header>
  )
}