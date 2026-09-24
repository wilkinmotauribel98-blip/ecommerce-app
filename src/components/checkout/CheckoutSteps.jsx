import { useCheckout } from "@/hooks/useCheckout";
import { useContext } from "react";
import { CheckoutContext } from "@/context/CheckoutContext";

function Step({step, stepName, isFulfiled}) {
  const { currentStep, setCurrentStep } = useContext(CheckoutContext);
  const onFullFiled = 'bg-emerald-300 text-white';
  const onActive = 'text-black bg-emerald-300'
  const unActive = 'text-zinc-300 border border-zinc-500 '

  return(
    <>
    <button 
      onClick={()=> setCurrentStep(stepName)} 
      className={`${isFulfiled ? onFullFiled : currentStep == stepName ? onActive : unActive} rounded-full w-7 h-7 text-center cursor-pointer `}
      >
      {isFulfiled ? <svg 
            className='w-6.5 h-6.5' 
            aria-label="Check">
            <use href="/ecommerce-app/sprite-extra.svg#icon-check"/>
          </svg> : step}
      </button>
      <span className="capitalize">{stepName}</span>
      {step !== 4 && <hr className="w-20 text-emerald-300"/>}

    </>
  )
}


export default function CheckoutSteps() {
  const isShippingFormFullFiled = useCheckout((state)=> state.isShippingFormFullFiled);
  const isPaymentFormFullFiled = useCheckout((state) => state.isPaymentFormFullFiled);
  const isReviewed = useCheckout((state) => state.isReviewed);
  const isDone = useCheckout((state)=> state.isDone)
  return (
    <section className="text-white flex gap-2 items-center  ">
      <Step step={1} stepName={'shipping'} isFulfiled={isShippingFormFullFiled}/>
      <Step step={2} stepName={'payment'} isFulfiled={isPaymentFormFullFiled}/>
      <Step step={3} stepName={'review'} isFulfiled={isReviewed}/>
      <Step step={4} stepName={'done'} isFulfiled={isDone}/>
    </section>
    
  )
}
