import { useCart } from "@/hooks/useCart";
import { useState, useEffect } from "react";

export default function AddToCard({product, price}){
  const [counter, setCounter] = useState(0);
  const cart = useCart((state)=> state.cart)
  const setCart = useCart((state)=> state.setCart);
  const productQuantity = ()=>{
    if (cart[product.id]) {
    if(cart[product.id].quantity + counter <= product.stock) return cart[product.id].quantity + counter
    return product.stock
    }
    return counter
  }

  const cartProduct = {
      image: product.images[0],
      title: product.title,
      price: price,
      quantity: productQuantity()
    }

  useEffect(()=> setCounter(1), [product])
  return(
    <div className="flex w-full">
          <div className="flex h-min">
          <button className="bg-zinc-800 cursor-pointer text-zinc-100 w-14 h-12 text-center" onClick={()=> {if(counter > 1) setCounter(s => s - 1)}}>-</button>
          <button className="bg-zinc-800 text-zinc-100 w-14 h-12 border-x border-zinc-700  text-center">{counter}</button>
          <button className="bg-zinc-800 cursor-pointer text-zinc-100 w-14 h-12  text-center" onClick={()=> {if(counter < product.stock) setCounter(s => s + 1)}}>+</button>
          </div>
          <button 
            className={`bg-emerald-500 py-3 w-fit px-2 flex-1  text-zinc-100 sm:px-10 hover:opacity-50 cursor-pointer sm:mt-0`}
            aria-label={`Add to cart`}
            onClick={()=> setCart(cartProduct, product.id)}
            >Add to cart</button>
    </div>
  )
}