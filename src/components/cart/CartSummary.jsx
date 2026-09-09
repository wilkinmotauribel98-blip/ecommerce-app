import { useCart } from '@/hooks/useCart'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
export default function CartSummary({checkout}) {
  const recalcTotal = useCart((state) => state.recalcTotal)
  const navigate = useNavigate();
  const { subtotal, tax, total } = recalcTotal();
  
  
  return (
    <section className="text-white  lg:max-w-75 w-full mb-10 p-6 h-min flex flex-col gap-6 rounded-2xl border border-zinc-800"
    aria-label='Chekout section'
    >
      <div className='flex flex-col gap-2 text-zinc-400 pb-7 border-b border-zinc-700'>
        <div className='flex justify-between items-center pb-7 border-b border-zinc-800'>
          <h2 className='text-xl  text-white' >Order Summary</h2>
          {
            !checkout || <Link to={'/ecommerce-app/cart'}
            className=' text-green-400'
            >
              Edit cart
            </Link>
          }
        </div>
        <div className='flex justify-between'>
          <span>
            Subtotal(3 Items)
          </span>

          <data value={subtotal.toFixed(2)} className=''>${subtotal.toFixed(2)}</data>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span className="text-green-400 text-lg">Free</span>
        </div>
        <div className='flex justify-between'>
          <p>
            Taxes
          </p>
          <data value={tax.toFixed(2)} className=' text-zinc-400'>${tax.toFixed(2)}</data>
        </div>
      </div>
      <div className=' py-2 flex flex-col gap-8'>
        <div className='flex'>
          <span className='text-xl'>Total</span>
          <data value={total.toFixed(2)} className='text-green-400 ml-auto text-lg' >${total.toFixed(2)}</data>
        </div>
        

      {
        checkout || 
        <>
        <button 
          className='w-full py-3 bg-green-500 rounded flex gap-2 items-center  justify-center cursor-pointer'
          onClick={()=> navigate('/ecommerce-app/checkout')}
        >
          <svg 
            className='w-6.5 h-6.5 text-zinc-100 cursor-pointer' >
            <use href="/ecommerce-app/sprite-extra.svg#icon-lock"/>
          </svg>
          Proceed to Checkout
        </button>
        
        <div className='flex flex-col gap-3 '>
        <h3 className='text-white text-lg pl-3 '>Payment Methods</h3>
        <div className='flex gap-2 px-3'>
          
          <svg 
            className='w-18 h-9 bg-amber-50 rounded' >
            <use href="/ecommerce-app/payment-icons.svg#icon-visa"/>
          </svg>
          <svg 
            className='w-18 h-9  rounded' >
            <use href="/ecommerce-app/payment-icons.svg#icon-mastercard"/>
          </svg>
          <svg 
            className='w-18 h-9  rounded' >
            <use href="/ecommerce-app/payment-icons.svg#icon-amex"/>
          </svg>
          <svg 
            className='w-18 h-9 bg-amber-50 rounded' >
            <use href="/ecommerce-app/payment-icons.svg#icon-paypal"/>
          </svg>
          <svg 
            className='w-18 h-9 bg-amber-50 rounded' >
            <use href="/ecommerce-app/payment-icons.svg#icon-apple-pay"/>
          </svg>
          
        </div>
      </div>
        </>
      }
    </div>

    </section>
  )
}
