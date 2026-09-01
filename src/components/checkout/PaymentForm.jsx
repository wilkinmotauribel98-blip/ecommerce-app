import { useState, useEffect, useRef } from "react"
export default function PaymentForm() {
  const [expiryValue, setExpireValue] = useState('');
  const [cvcValue, setCvcValue] = useState('');
  const [cardValue, setCardValue ] = useState('');
  const prevWord = useRef('')
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
                setExpireValue(a.join(""))
  }

  return (
    <form action="" className="text-zinc-200 py-5 px-3  flex flex-col gap-2 rounded-xl bg-zinc-900">
      <div className="flex flex-col gap-1">
        <label htmlFor="payment-numberInput">Card number</label>
        <div className="flex items-center w-full border-zinc-700 bg-zinc-950 border ">
          <input 
            type="text" 
            id="payment-numberInput" 
            placeholder="1234 5678 9012 3456" 
            autoComplete="cc-number"
            value={cardValue} 
            className="focus:outline-0 w-full  py-2 px-2 rounded"
            onChange={(e)=>{
               setCardValue(e.target.value.replace(/\D/g, '').slice(0, 16).match(/.{1,4}/g)?.join(' ') || '')
            }}
            />

          <svg 
            className='w-19 h-10 bg-amber-50 rounded' >
            <use href="/ecommerce-app/payment-icons.svg#icon-visa"/>
          </svg>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex flex-1 flex-col gap-1">
          <label htmlFor="payment-expiryInput">Expiry date</label>
          <input 
            type="text" 
            name="" id="payment-expiryInput" 
            placeholder="MM/YY" 
            className="bg-zinc-950 border focus:outline-0 border-zinc-700 py-2 px-2 rounded"
            inputMode="numeric"
            pattern="[0-9]{2}/[0-9]{4}"
            autoComplete="cc-exp"
            onChange={handleChange}
            value={expiryValue}
            required
            />
        </div>

        <div className="flex  flex-1 flex-col gap-1">
          <label htmlFor="payment-cvcInput">CVV</label>
          <input 
            type="text" 
            name="" id="payment-cvcInput" 
            placeholder="123" 
            className="bg-zinc-950 border focus:outline-0 border-zinc-700 py-2 px-2 rounded"
            inputMode="numeric"
            required
            value={cvcValue}
            pattern="[0-9]{3}"
            onChange={(e)=>setCvcValue(e.target.value.replace(/\D/g, '').split('').slice(0, 3).join(''))}
            
            />
        </div>
      </div>
    </form>
  )
}
