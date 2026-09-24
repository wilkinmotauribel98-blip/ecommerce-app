import { useForm } from "react-hook-form";
import CardForm from "./CardForm";
import { CheckoutContext } from "@/context/CheckoutContext";
import { useContext, useEffect } from "react";
import { useCheckout } from "@/hooks/useCheckout";

const PayButton = ({title, symbol})=>{
  return(
    <a href="" className="w-full" >
      <button className="bg-emerald-400 w-full py-1 mt-3 flex  items-center justify-center text-center cursor-pointer rounded " readOnly >
        <svg className="w-13 h-7 hidden sm:block rounded">
          <use href={`/ecommerce-app/payment-icons.svg#icon-${symbol}`} />
        </svg>
        {title}
      </button>
    </a> 
  )
}


export default function PaymentForm() {
  const onPaymentFormSubmit = useCheckout((state) => state.onPaymentFormSubmit)
  const { register, setValue, watch, handleSubmit } = useForm({defaultValues: {'payment-method': 'card'}})
  const paymentMethod = watch('payment-method');
  const { setCurrentStep } = useContext(CheckoutContext);

  const onSubmit = (data)=> {
    setCurrentStep('review');
    onPaymentFormSubmit(data)
  }
  
  return (
    <section className="">
      <h1 className="text-3xl text-white font-bold">Payment</h1>
      <p className="text-zinc-400 mb-5">Enter your shipping details to ensure your order arrives safely at your doorstep.</p>

      <form 
      className="text-zinc-200 py-5 px-3 border border-zinc-800 flex flex-col gap-2 rounded-xl bg-gray-950" 
      onSubmit={handleSubmit(onSubmit)}
      >
      <div>
      <fieldset className="flex flex-col gap-3" 
      >
        
          <label htmlFor="payment-card" className="flex gap-3 items-center cursor-pointer" >
            
            <span className="relative size-5 shrink-0 rounded-full border-2 border-white/20 has-checked:border-emerald-500 transition-colors">
              <input
                type="radio"
                id="payment-card"
                value="card"
                className="peer absolute inset-0 opacity-0 cursor-pointer"
                {...register('payment-method', { required: true })}
              />
             
              <span className="absolute inset-0 m-auto size-2.5 rounded-full bg-emerald-500 scale-0 peer-checked:scale-100 transition-transform pointer-events-none" />
            </span>

            <svg className="w-18 h-9 rounded">
              <use href="/ecommerce-app/sprite-core.svg#icon-credit-card" />
            </svg>

            <span className="flex flex-col">
              <span>Credit / Debit Card</span>
              <span className="text-zinc-400">Visa, Mastercard, American Express</span>
            </span>

            <div className="flex gap-2 px-3 ml-auto">
              <svg className="w-13 h-7 hidden sm:block bg-amber-50 rounded">
                <use href="/ecommerce-app/payment-icons.svg#icon-visa" />
              </svg>
              <svg className="w-13 h-7 hidden sm:block rounded">
                <use href="/ecommerce-app/payment-icons.svg#icon-mastercard" />
              </svg>
              <svg className="w-13 h-7 hidden sm:block rounded">
                <use href="/ecommerce-app/payment-icons.svg#icon-amex" />
              </svg>
            </div>
          </label>

          <label htmlFor="paypal" className="flex gap-3 items-center cursor-pointer">
            
            <span className="relative size-5 shrink-0 rounded-full border-2 border-white/20 has-checked:border-emerald-500 transition-colors">
              <input
                type="radio"
                id="paypal"
                value="paypal"
                className="peer absolute inset-0 opacity-0 cursor-pointer"
                {...register('payment-method', { required: true })}
              />
             
              <span className="absolute inset-0 m-auto size-2.5 rounded-full bg-emerald-500 scale-0 peer-checked:scale-100 transition-transform pointer-events-none" />
            </span>

            <svg className="w-18 h-9 rounded">
              <use href="/ecommerce-app/payment-icons.svg#icon-paypal-mark" />
            </svg>

            <span className="flex flex-col">
              <span>PayPal</span>
              <span className="text-zinc-400">Pay with your PayPal account.</span>
            </span>

            <div className="flex gap-2 px-3 ml-auto">
              <svg className="w-13 h-7 hidden sm:block rounded">
                <use href="/ecommerce-app/payment-icons.svg#icon-paypal-badge" />
              </svg>
              
            </div>
          </label>


           <label htmlFor="applePay" className="flex gap-3 items-center cursor-pointer">
            
            <span className="relative size-5 shrink-0 rounded-full border-2 border-white/20 has-checked:border-emerald-500 transition-colors">
              <input
                type="radio"
                id="applePay"
                value="applePay"
                className="peer absolute inset-0 opacity-0 cursor-pointer"
                {...register('payment-method', { required: true })}
              />
             
              <span className="absolute inset-0 m-auto size-2.5 rounded-full bg-emerald-500 scale-0 peer-checked:scale-100 transition-transform pointer-events-none" />
            </span>

            <svg className="w-18 h-9 rounded">
              <use href="/ecommerce-app/payment-icons.svg#icon-apple-pay-mark" />
            </svg>

            <span className="flex flex-col">
              <span>Apple Pay</span>
              <span className="text-zinc-400">Pay with Apple Pay.</span>
            </span>

            <div className="flex gap-2 px-3 ml-auto">
              <svg className="w-13 h-7 hidden sm:block rounded">
                <use href="/ecommerce-app/payment-icons.svg#icon-apple-pay-badge" />
              </svg>
              
            </div>
          </label>


           <label htmlFor="googlePay" className="flex gap-3 items-center cursor-pointer">
            
            <span className="relative size-5 shrink-0 rounded-full border-2 border-white/20 has-checked:border-emerald-500 transition-colors">
              <input
                type="radio"
                id="googlePay"
                value="googlePay"
                className="peer absolute inset-0 opacity-0 cursor-pointer"
                {...register('payment-method', { required: true })}
              />
             
              <span className="absolute inset-0 m-auto size-2.5 rounded-full bg-emerald-500 scale-0 peer-checked:scale-100 transition-transform pointer-events-none" />
            </span>

            <svg className="w-19 h-9 rounded">
              <use href="/ecommerce-app/payment-icons.svg#icon-google-pay-badge" />
            </svg>

            <span className="flex flex-col">
              <span>Google Pay</span>
              <span className="text-zinc-400">Pay with Google Pay.</span>
            </span>

            <div className="flex gap-2 px-3 ml-auto">
              <svg className="w-13 h-7 hidden sm:block rounded">
                <use href="/ecommerce-app/payment-icons.svg#icon-google-pay-badge" />
              </svg>
              
            </div>
          </label>
      </fieldset>
        </div>

      {paymentMethod == 'card' && <CardForm watch={watch} setValue={setValue} register={register}/>}
      {paymentMethod == 'paypal' && <PayButton title={'Pay with PayPal'} symbol={'paypal-logomark'} />}
      {paymentMethod == 'applePay' && <PayButton title={'Pay with Apple Pay'} symbol={'apple-logomark'}/>}
      {paymentMethod == 'googlePay' && <PayButton title={'Pay with Google Pay'} symbol={'google-logomark'} />}
    </form>
    </section>
  )
}
