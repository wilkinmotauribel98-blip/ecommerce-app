
import { useCheckout } from '@/hooks/useCheckout'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { publicUrl } from "@/utils/publicUrl";
export default function Done(){
  const { orderNumber, isPaymentFormFulfilled, isShippingFormFulfilled, isReviewed } = useCheckout((state) => state);
  const navigate = useNavigate()
  const handleCopyClick = (orderNumber) => {
    navigator.clipboard.writeText(orderNumber)
  }

  useEffect(()=>{
    if(!isShippingFormFulfilled) navigate('/checkout/shipping');
    else if(!isPaymentFormFulfilled) navigate('/checkout/payment');
    else if(!isReviewed) navigate('/checkout/review');

  },[])

  
  return(
    <section className="flex items-center flex-col justify-center gap-3 mb-30 mt-20">
      <svg className="w-50 h-50 rounded">
        <use href={publicUrl('sprite-core.svg#icon-check-circle')} />
      </svg>
      <h1 className='text-4xl text-white'>Order Confirmed!</h1>
      <p className='text-zinc-400 text-center text-lg'>Thank you for your purchase. Your order has been placed successfully.</p>
      <article className="flex flex-col gap-1 w-full max-w-md relative ">

        <div className="border border-gray-500 bg-gray-800 p-2 rounded flex flex-col gap-1 w-full ">
          <h2 className='text-zinc-400 text-lg' >Order Number</h2>
          <p className='text-white text-lg'>#{orderNumber}</p>
          <button 
            className=" text-white cursor-pointer py-2 px-4  mt-2 absolute right-2 top-2 flex items-center gap-1 bg-gray-700 hover:bg-gray-600 transition-colors"
            onClick={() => handleCopyClick(orderNumber)}
          >
           <svg className="w-5 h-5" aria-label="Copy order number">
            <use href={publicUrl('sprite-core.svg#icon-copy')} />
           </svg>
          </button>
        </div>
        
        <button className="border border-emerald-400 w-full py-2 mt-3 flex text-white  items-center justify-center text-center cursor-pointer rounded " 
        onClick={()=> navigate('/')}
        >
          Continue Shopping
        </button>
      </article>

      <p className='text-zinc-400 '>Your order will be delivered soon.</p>
    </section>
  )
}
