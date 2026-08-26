import { optimizedImg } from "@/components/product/ProductCard"
import { useState, useEffect } from "react"
import { useCart } from '@/hooks/useCart'



export default function CartItem ({product, id}) {
  const {image, price, quantity,  stock, title, category} = product;
  const [counter, setCounter] = useState(quantity);
  const setCart = useCart((state)=> state.setCart)
  const deleteProduct = useCart((state)=> state.deleteProduct)
  useEffect(()=>{
    const setProduct = {image:image, price:price, quantity:counter, title:title, stock:stock, category: category}
    setCart(setProduct, id)
  }, [counter])
  
  
  
  return(
    <article className="flex items-center w-full rounded border border-zinc-900 bg-zinc-950 text-white p-2"
    aria-label="Product card"
    >
      <div className="min-w-35 w-2/6 max-w-35 ">
        <img 
          src={optimizedImg(image, 550, 550)} alt={`image of ${title}`} 
          className="w-full"
          
          />
      </div>
      
      <div className="flex flex-col md:flex-row items-center flex-2 gap-3 md:gap-5 ">
        <h2 className="flex-2 text-md xl:text-lg w-fit text-left mr-auto">{title}</h2>

        <div className="w-fit flex-1 mr-auto"> 
          <span className="sr-only">price: </span>
          <data 
            value={`${price}`}
            className="text-green-400 "
            >${price}</data>
        </div>

        <div className="flex-1 flex mr-auto  flex-nowrap ">
          <div className="border-zinc-600 w-34 rounded border overflow-hidden  flex flex-nowrap">
            <button 
              className="bg-zinc-900 cursor-pointer  text-white px-4 py-2" 
              onClick={()=> {if(counter > 1 ) setCounter(s => s - 1)}}
              >-</button>

            <data className="bg-zinc-900 flex-1 py-2 border-x text-center justify-center border-zinc-600  text-white " 
            
            >{counter}</data>

            <button 
            className="bg-zinc-900 cursor-pointer text-white px-4 py-2" 
            onClick={()=> {if(counter <  stock) setCounter(s => s + 1)}}
            >+</button>
          </div>

        </div>

        <span className="flex-1 flex mr-auto gap-1 md:text-center items-center justify-center w-fit  text-green-400">
          <p className="md:hidden text-zinc-400">Total: </p>
          <span className="sr-only">Total: </span>
          ${(counter * price).toFixed(2)}
        </span>

      </div>
      <button className=" w-min m-2 mb-auto" onClick={()=> deleteProduct(id)}>
          <svg 
            className='w-6.5 h-6.5 text-red-500 cursor-pointer ' 
            aria-label="Delete Item">
            <use href="/ecommerce-app/sprite-core.svg#icon-trash"/>
          </svg>
        </button>
    </article>
  )
}