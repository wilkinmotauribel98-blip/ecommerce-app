import { useCheckout } from "@/hooks/useCheckout";
import { useLocation } from "react-router-dom";

function Step({step, stepName, isFulfiled}) {
  const onFullFiled = 'bg-emerald-400 text-white';
  const onActive = 'text-black bg-emerald-400'
  const unActive = 'text-zinc-300 border border-zinc-500 '
  const { pathname } = useLocation();
  const currentStep = pathname.split('/').pop();
  return(
    <>
    <button 
      className={`${isFulfiled ? onFullFiled : currentStep == stepName ? onActive : unActive} rounded-full w-7 h-7 text-center `}
      >
      {isFulfiled ? <svg 
            className='w-6.5 h-6.5' 
            aria-label="Check">
            <use href="/ecommerce-app/sprite-extra.svg#icon-check"/>
          </svg> : step}
      </button>
      <span className="capitalize text-sm sm:text-lg">{stepName}</span>
      {step !== 4 && <hr className="w-20 hidden md:block text-emerald-300"/>}

    </>
  )
}


export default function CheckoutSteps() {
  const {isShippingFormFullFiled, isPaymentFormFullFiled, isReviewed, isDone} = useCheckout((state)=> state);

  return (
    <section className="text-white flex gap-1.5 items-center  ">
      <Step step={1} stepName={'shipping'} isFulfiled={isShippingFormFullFiled}/>
      <Step step={2} stepName={'payment'} isFulfiled={isPaymentFormFullFiled}/>
      <Step step={3} stepName={'review'} isFulfiled={isReviewed}/>
      <Step step={4} stepName={'done'} isFulfiled={isDone}/>
    </section>
    
  )
}
