import { useRef } from "react"
import { useCheckout } from "@/hooks/useCheckout"



export default function CardForm({register, setValue, watch}){
  const onPaymentFormSubmit = useCheckout((state) => state.onPaymentFormSubmit)
  const expiryValue = watch('expiry-date')
    const cvcValue = watch('ccv')
    const cardValue = watch('card-number')
    const permiso = useRef(true)


  const handleChange = (e)=>{
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
                  if(a.length == 0 || a.length == 1) permiso.current = true;
                  if((a.length == 3 ) && !value.includes('/')) {

                    a[3] = a[2]
                    a[2] = '/'
                  } 
                  if(a.length === 2 && permiso.current) {
                    permiso.current = false 
                    a[2] = '/'
                  }
                
                setValue('expiry-date', a.join(''), { shouldValidate: true})
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
            value={cardValue || ''} 
            className="focus:outline-0 w-full  py-2 px-2 rounded"
            {...register('card-number', {
              required: true,
              pattern: /[0-9]{4}\s[0-9]{4}\s[0-9]{4}\s[0-9]{4}/
            })}
            onChange={(e)=>{
               const formated = e.target.value.replace(/\D/g, '').slice(0, 16).match(/.{1,4}/g)?.join(' ') || '';
               setValue('card-number', formated, { shouldValidate: true })
            }}
            
            />

          
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex flex-1 flex-col gap-1">
          <label htmlFor="payment-expiryInput">Expiration Date</label>
          <input 
            type="text" 
            id="payment-expiryInput" 
            placeholder="MM/YY" 
            className=" border focus:outline-0 border-zinc-800 py-2 px-2 rounded"
            autoComplete="cc-exp"
            {...register('expiry-date', {
              required: true,
              pattern: /[0-9]{2}\/[0-9]{4}/
            } )}
            onChange={handleChange}
            value={expiryValue || ''}
            
            />
        </div>

        <div className="flex flex-1 flex-col gap-1">
          <label htmlFor="payment-cvcInput">CVV</label>
          <input 
            type="text" 
            name="" id="payment-cvcInput" 
            placeholder="123" 
            className=" border focus:outline-0 border-zinc-800 py-2 px-2 rounded"
            inputMode="numeric"
            required
            value={cvcValue || ''}
            pattern="[0-9]{3}"
            {...register('ccv')}
            onChange={(e)=> setValue('ccv', e.target.value.replace(/\D/g, '').split('').slice(0, 3).join(''), {shouldValidate: true})}  
            />
        </div>
      </div>
      <input type="submit" value="Save & continue" className="bg-emerald-400 py-1 mt-3 cursor-pointer rounded" onSubmit={(data)=>onPaymentFormSubmit(data)}/>
      <p className="text-emerald-400 text-center">Your payment information is encrypted and secure.</p>
    </>
  )
}
