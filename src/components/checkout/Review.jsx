import { useCheckout } from "@/hooks/useCheckout"
import { useCart } from "@/hooks/useCart";
import { useNavigate } from "react-router-dom";
import { useEffect, useMemo } from "react";
import { getCountryName } from "@/utils/location";
import Item from "@/components/checkout/Item";
import { publicUrl } from "@/utils/publicUrl";


const PAYPAL = 'paypal';
const APPLE_PAY = 'applePay';
const GOOGLE_PAY = 'googlePay';
const CARD = 'card' 


function PaymentCard({cardType, last4}){
  const dots = Array.from({length: 4}).map((_, i) => <span key={i} className='w-1.5 h-1.5 bg-white rounded-full inline-block mr-1'></span>)
  return(
    <span className="text-zinc-200 flex items-center">
              <svg className="w-10 h-10 mr-2">
                {cardType !== null
                 ? 
                <use href={publicUrl(`payment-icons.svg#icon-${cardType}`) } />
                : <use href={publicUrl('sprite-core.svg#icon-credit-card')} />}
              </svg>
              {dots}
              {last4}
            </span>
  )
}
export default function Review(){
  const navigate = useNavigate();
  const cartItems = useCart((state) => state.cart);
  const { subtotal, tax, total } = useMemo(() => useCart.getState().recalcTotal(), [cartItems]);
  const { setOrderNumber, setIsReviewed, setIsDone, isPaymentFormFulfilled, isShippingFormFulfilled, placeOrder } = useCheckout((state) => state);
  const { firstName, address, city, postalCode, lastName, country } = useCheckout((state)=> state.shippingForm)
  const { paymentMethod, last4, cardType  } = useCheckout((state)=> state.paymentForm)
  useEffect(()=>{
    if(!isShippingFormFulfilled) navigate('/checkout/shipping');
    else if(!isPaymentFormFulfilled) navigate('/checkout/payment');
  },[])

  
  
  return (
    <section className="text-white w-full max-w-2xl flex flex-col gap-3  ">
      <h1 className="text-2xl font-bold "> Review Your Order </h1>
      <p className="text-zinc-400">Please review your order details before completing your purchase.</p>
      <div className="bg-gray-900/50 border border-gray-800 rounded-xl  mt-5 ">
        <article className="flex gap-6 border border-gray-800 rounded  p-2" >
         <svg 
            className='w-7.5 h-7.5' 
            aria-label="Location">
            <use href={publicUrl('sprite-extra.svg#icon-location')}/>
          </svg>
          <div>
            <h2 className="text-lg mb-1">Shipping Address</h2>
            <h3 className="text-zinc-200">{firstName} {lastName}</h3>
            <p className="text-zinc-400">{address}</p>
            <p className="text-zinc-400">{city}, {getCountryName(country)}</p>
            <span className="text-zinc-400">{postalCode}</span>
          </div>
        <button 
          type="button" 
          className="text-emerald-400 ml-auto mb-auto cursor-pointer"
          onClick={()=> navigate('/checkout/shipping')}
          >Edit</button>
      </article>

      <article className="flex gap-3 border border-gray-800  rounded p-2" >
         <svg 
            className='w-10 h-10' 
            aria-label="Payment Card">
            {paymentMethod === CARD && <use href={publicUrl('sprite-core.svg#icon-credit-card')} />}
            {paymentMethod === PAYPAL &&  <use href={publicUrl('payment-icons.svg#icon-paypal-mark')} />}
            {paymentMethod === APPLE_PAY && <use href={publicUrl('payment-icons.svg#icon-apple-pay-mark')} />}
            {paymentMethod === GOOGLE_PAY &&  <use href={publicUrl('payment-icons.svg#icon-google-pay-badge')} />}
            
          </svg>
          <div>
            <h2 className="text-lg mb-1">Payment Method</h2>
            {paymentMethod === CARD && <PaymentCard last4={last4} cardType={cardType}/>}
            
            
          </div>
        <button 
          type="button" 
          className="text-emerald-400 ml-auto mb-auto cursor-pointer"
          onClick={()=> navigate('/checkout/payment')}
          >Edit</button>
      </article>

      <section className="flex flex-col gap-2    p-3" >
         <h2 className="text-xl mb-1">Order Items</h2> 
          <div>
            {Object.entries(cartItems).map(([key, item]) => (
              <Item key={key} item={item} id={key} />
            ))} 
            <div className='border-gray-800 border-t mt-2 pt-2 px-2'>
            <div className="flex justify-between mt-2">
              <span className="text-zinc-300">Subtotal:</span>
              <span className="text-zinc-200">
                ${subtotal.toFixed(2)}
              </span>
            </div> 

            <div className="flex justify-between mt-2">
              <span className="text-zinc-300">Shipping</span>
              <span className="text-emerald-400 font-semibold">
                FREE
              </span>
            </div>  

            <div className="flex justify-between mt-2">
              <span className="text-zinc-300">Taxes (18%)</span>
              <span className="text-zinc-200">
                ${tax.toFixed(2)}
              </span>
            </div> 
          </div>
        </div>
    
          <div className="border-t border-gray-800 mt-2 pt-2 px-2">
            <div className="flex justify-between mt-2">
              <span className="text-white text-xl">Total</span>
              <span className="text-emerald-300">
                ${total.toFixed(2)}
              </span>
            </div> 

            <button 
              className='bg-emerald-400 w-full py-1 mt-3 flex  items-center justify-center text-center cursor-pointer rounded'
              onClick={()=> {
                setIsReviewed();
                navigate('/checkout/done');
                setOrderNumber(Math.floor(Math.random() * 1000000).toString().padStart(6, '0'));
                setIsDone(true)
                placeOrder();
              }}
            >
              Place Order
            </button>
            <p className="text-emerald-400 text-center mt-2">Your payment information is encrypted and secure.</p>
          </div>
      </section>
      </div>
    </section>
  )
}
