import { useRef, useState, useEffect } from "react"
import { useCheckout } from "@/hooks/useCheckout"
import { detectCardTypeLive } from "@/utils/detectCardTypeLive";
import { publicUrl } from "@/utils/publicUrl";


export default function CardForm({register, setValue, watch, errors, allowChanges, setAllowChanges}) {
  const { isPaymentFormFulfilled, paymentForm, setIsPaymentFormFulfilled} = useCheckout((state) => state);
  const [cardType, setCardType] = useState('visa')
  const expiryValue = watch('expiryDate')
  const cvvValue = watch('cvv')
  const cardValue = allowChanges ? watch('cardNumber') || '' : `**** **** **** ${paymentForm.last4}`
  const isAllowed = useRef(true)


  const handleExpiryDateChange = (e)=>{
     const value = e.target.value.split("")
                let arr = []
                 if(value.length > 7) arr = value.slice(0, 7)
                else arr = value
                
                const c = []
                if(arr[0] > 1) arr.unshift('0')

                const a = c.concat(arr).filter(e =>{  
                  if(parseInt(e) || e.includes('/') || e == '0') return e
                }) 
                  if(a[0] == 1 && a[1] > 2) a[1] = 2  
                  if(a.length == 0 || a.length == 1) isAllowed.current = true;
                  if((a.length == 3 ) && !value.includes('/')) {

                    a[3] = a[2]
                    a[2] = '/'
                  } 
                  if(a.length === 2 && isAllowed.current) {
                    isAllowed.current = false 
                    a[2] = '/'
                  }
                
                setValue('expiryDate', a.join(''), { shouldValidate: true})
  }

  const handleCvvChange = (e)=>{
    setValue('cvv', e.target.value.replace(/\D/g, '').split('').slice(0, 3).join(''), {shouldValidate: true})
  }

  const handleCardChange = (e)=>{
    setCardType(detectCardTypeLive(e.target.value))
    const formated = e.target.value.replace(/\D/g, '').slice(0, 16).match(/.{1,4}/g)?.join(' ') || '';
    setValue('cardNumber', formated, { shouldValidate: true })
  }


  useEffect(()=>{
    if(isPaymentFormFulfilled){
      setValue('cardNumber',paymentForm.cardNumber, {shouldValidate: false})
      setValue('expiryDate', paymentForm.expiryDate, {shouldValidate: false})
      setValue('cvv', paymentForm.cvv, {shouldValidate: false})
    }
  }, [])

const cardChange = (e)=>{
  e.preventDefault();
  setAllowChanges(true);
  setValue('cardNumber', '', { shouldValidate: true })
  setValue('expiryDate', '', { shouldValidate: true })
  setValue('cvv', '', { shouldValidate: true })
  setIsPaymentFormFulfilled(false);

}

  return(
    <>
      <div className="flex flex-col gap-1 mt-5">
        <label htmlFor="payment-numberInput">Card Number</label>
        <div className="flex items-center w-full border-zinc-800  border ">
          <input 
            type="text" 
            id="payment-numberInput" 
            placeholder="1234 5678 9012 3456" 
            autoComplete="cc-number"
            className="focus:outline-0 w-full  py-2 px-2 rounded"
            value={cardValue}
            disabled={!allowChanges}
            {...register('cardNumber', {
              required: allowChanges,
              pattern: /^[0-9]{4}(\s?[0-9]{4}){2,3}\s?[0-9]{1,4}$/,
              
              onChange: (e)=> handleCardChange(e)
            })}
            
            
            />

          <svg className="w-10 h-10 mr-2">
                {cardType
                 ? 
                <use href={publicUrl(`payment-icons.svg#icon-${cardType}`) } />
                : <use href={publicUrl('sprite-core.svg#icon-credit-card')} />}
              </svg>

        </div>
        { !allowChanges && <a href="#" className="text-zinc-300/80 hover:underline" onClick={cardChange}>
          Use a different card
        </a>}
        {errors.cardNumber?.type === 'pattern' && <p className="text-red-500">Enter a valid Card number</p>}
        {errors.cardNumber?.type === 'required' && <p className="text-red-500">Card Number is required </p>}
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex flex-1 flex-col gap-1">
          <label htmlFor="payment-expiryInput">Expiration Date</label>
          <input 
            type="text" 
            id="payment-expiryInput" 
            placeholder="MM/YY" 
            className="border focus:outline-0 border-zinc-800 py-2 px-2 rounded"
            autoComplete="cc-exp"
            disabled={!allowChanges}
            {...register('expiryDate', {
              required: true,
              pattern: /^(0[1-9]|1[0-2])\/([0-9]{2})$/,
              onChange: (e) => handleExpiryDateChange(e),
            } )}
            
            />
            {errors.expiryDate?.type === 'pattern' && <p className="text-red-500">Enter a valid expiration date (MM/YY)</p>}
            {errors.expiryDate?.type === 'required' && <p className="text-red-500">Expiration date is required </p>}
        </div>

        <div className="flex flex-1 flex-col gap-1">
          <label htmlFor="payment-cvcInput">CVV</label>
          <input 
            type="text" 
            id="payment-cvcInput" 
            placeholder="123" 
            className=" border focus:outline-0 border-zinc-800 py-2 px-2 rounded"
            inputMode="numeric"
            {...register('cvv', {
              pattern: /^[0-9]{3,4}$/,
              required: true,
              value: cvvValue || '',
              onChange: (e)=> handleCvvChange(e)

            })}
            
            />
            {errors.cvv?.type === 'pattern' && <p className="text-red-500">Enter a valid cvv</p>}
            {errors.cvv?.type === 'required' && <p className="text-red-500">cvv is required </p>}
        </div>
      </div>
      <input type="submit" value="Save & continue" className="bg-emerald-400 py-1 mt-3 cursor-pointer rounded" />
      <p className="text-emerald-400 text-center">Your payment information is encrypted and secure.</p>
    </>
  )
}
