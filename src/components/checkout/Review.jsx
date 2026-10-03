import { useCheckout } from "@/hooks/useCheckout"
import { useCart } from "@/hooks/useCart";
import { useNavigate } from "react-router-dom";
import Item from "@/components/checkout/Item";



export default function Review({title, description}){
  const navigate = useNavigate();
  const { subtotal, tax, total } = useCart((state) => state.recalcTotal());
  const { shippingForm, paymentForm, setOrderNumber, setIsReviewed, setIsDone } = useCheckout((state) => state);
  const cartItems = useCart((state) => state.cart);
  const {isPaymentFormFullFiled, isShippingFormFullFiled} = useCheckout((state) => state);

  
  if(!isPaymentFormFullFiled || !isShippingFormFullFiled) return null;
  
  return (
    <section className="text-white w-full ">
      <h1 className="text-3xl font-bold ">{title || 'Review Your Order'} </h1>
      <p className="text-zinc-400">{description || 'Please review your order details before completing your purchase.'}</p>
      <div className="bg-gray-900/20 border border-gray-800 rounded-xl  mt-5 ">
        <article className="flex gap-2 border border-gray-800 rounded  p-2" >
         <svg 
            className='w-6.5 h-6.5' 
            aria-label="Check">
            <use href="/ecommerce-app/sprite-extra.svg#icon-location"/>
          </svg>
          <div>
            <h2 className="text-lg mb-1">Shipping Address</h2>
            <h3 className="text-zinc-200">{shippingForm.firstName} {shippingForm.lastName}</h3>
            <p className="text-zinc-400">{shippingForm.address}</p>
            <p className="text-zinc-400">{shippingForm.city}, {shippingForm.country}</p>
            <span className="text-zinc-400">{shippingForm.pcode}</span>
          </div>
        <button 
          type="button" 
          className="text-emerald-400 ml-auto mb-auto cursor-pointer"
          onClick={()=> navigate('/checkout/shipping')}
          >Edit</button>
      </article>

      <article className="flex gap-5 border border-gray-800  rounded p-2" >
         <svg 
            className='w-8 h-8' 
            aria-label="Payment Card">
            <use href="/ecommerce-app/sprite-core.svg#icon-credit-card" />
          </svg>
          <div>
            <h2 className="text-lg mb-1">Payment Method</h2>
            <span className="text-zinc-200 flex items-center">
              <svg className="w-10 h-10 mr-2">
                {paymentForm.cardType !== null
                 ? 
                <use href={`/ecommerce-app/payment-icons.svg#icon-${paymentForm.cardType}` } />
                : <use href="/ecommerce-app/sprite-core.svg#icon-credit-card" />}
              </svg>
              
            
              <span className='w-1.5 h-1.5 bg-white rounded-full inline-block mr-1'></span>
              <span className='w-1.5 h-1.5 bg-white rounded-full inline-block mr-1'></span>
              <span className='w-1.5 h-1.5 bg-white rounded-full inline-block mr-1'></span>
              <span className='w-1.5 h-1.5 bg-white rounded-full inline-block mr-1'></span>
              {paymentForm.lastNumbers}
            </span>
            
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