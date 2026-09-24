import { useCheckout } from "../../hooks/useCheckout"



export default function Review(){
  const shippingForm = useCheckout((state) => state.shippingForm);
  console.log(shippingForm);
  
  return (
    <section className="text-white w-full">
      <h1 className="text-3xl font-bold ">Review Your Order</h1>
      <p className="text-zinc-400">Please review your order details before completing your purchase.</p>
      <article className="flex gap-2">
         <svg 
            className='w-6.5 h-6.5' 
            aria-label="Check">
            <use href="/ecommerce-app/sprite-extra.svg#icon-check"/>
          </svg>
          <div>
            <h2 className="text-lg mb-1">Shipping Address</h2>
            <h3 className="text-zinc-200">{shippingForm.name}</h3>
            <p className="text-zinc-400">{shippingForm.address}</p>
            <p className="text-zinc-400">{shippingForm.city}, {shippingForm.country}</p>
            <span className="text-zinc-400">{shippingForm.pcode}</span>
          </div>
          
      </article>
    </section>
  )
}