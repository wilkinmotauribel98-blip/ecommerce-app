import { useCheckout } from "@/hooks/useCheckout";
import { useLocation } from "react-router-dom";
import { publicUrl } from "@/utils/publicUrl";

function Step({step, stepName, isFulfilled}) {
  const onFulfilled = 'bg-emerald-400 text-white';
  const onActive = 'text-black bg-emerald-400'
  const unActive = 'text-zinc-300 border border-zinc-500 '
  const { pathname } = useLocation();
  const currentStep = pathname.split('/').pop();
  return(
    <article className="flex items-center gap-1.5 ">
    <button 
      className={`${isFulfilled ? onFulfilled : currentStep == stepName ? onActive : unActive} rounded-full w-7 h-7 text-center `}
      >
      {isFulfilled ? <svg 
            className='w-6.5 h-6.5' 
            aria-label="Check">
            <use href={publicUrl('sprite-extra.svg#icon-check')}/>
          </svg> : step}
      </button>
      <span className="capitalize text-sm sm:text-lg">{stepName}</span>
      {step !== 4 && <hr className="w-15 md:w-25 lg:w-40 hidden sm:block text-emerald-300"/>}

    </article>
  )
}


export default function CheckoutSteps() {
  const {isShippingFormFulfilled, isPaymentFormFulfilled, isReviewed, isDone} = useCheckout((state)=> state);

  return (
    <section className="text-white flex gap-2  items-center justify-center sm:justify-start">
      <Step step={1} stepName={'shipping'} isFulfilled={isShippingFormFulfilled}/>
      <Step step={2} stepName={'payment'} isFulfilled={isPaymentFormFulfilled}/>
      <Step step={3} stepName={'review'} isFulfilled={isReviewed}/>
      <Step step={4} stepName={'done'} isFulfilled={isDone}/>
    </section>
    
  )
}
