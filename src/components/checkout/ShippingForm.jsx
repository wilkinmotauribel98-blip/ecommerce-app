import { Country, City } from "country-state-city"
import { useState, useEffect, useContext } from "react"
import { useForm } from "react-hook-form";
import { useCheckout } from "@/hooks/useCheckout";
import { CheckoutContext } from "@/context/CheckoutContext";
export default function ShippingForm() {
  const countries = Country.getAllCountries();
  const shippingInfo = useCheckout((state) => state.shippingForm)
  const onShippingFormSubmit = useCheckout((state) => state.onShippingFormSubmit)
  const isSaved = useCheckout((state)=> state.isSaved)
  const { setCurrentStep } = useContext(CheckoutContext)
  const { register, handleSubmit, setValue, watch, formState:{ errors } } = useForm({defaultValues: {
    'country' : 'DO' 
  }})
  const [cities, setCities ] = useState(City.getCitiesOfCountry('DO'))

  const handleChange = (event)=>{
    const data = event.target.value;
    setCities(City.getCitiesOfCountry(data))
  } 

  const onSubmit = (data)=> {
    onShippingFormSubmit(data)
    setCurrentStep('payment')
  };

  useEffect(()=>{
  if(isSaved){
    setValue('phoneNumber', shippingInfo.phoneNumber, {shouldValidate: true});
    setValue('postalCode', shippingInfo.postalCode, {shouldValidate: true})
    setValue('email', shippingInfo.email, {shouldValidate: true})
    setValue('firstName', shippingInfo.firstName, {shouldValidate: true})
    setValue('lastName', shippingInfo.lastName , {shouldValidate: true})
    setValue('address', shippingInfo.address, {shouldValidate: true})
  }
  
  },  [])

  

  return (
    <section className="text-zinc-200 flex-1 w-full flex flex-col  ">
   
      <h1 className="text-3xl font-bold">Shipping Information</h1>
      <p className="text-zinc-400">Enter your shipping details to ensure your order arrives safely at your doorstep.</p>

      <form
        className="flex flex-col gap-3  rounded-2xl pb-5 pt-7 " 
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-1 ">
          <label htmlFor="email">Email address</label>
          <input 
            type="email" 
            name="email"
            id="email"
            placeholder="you@example.com"
            className="border focus:outline-0 border-zinc-800 py-2 px-2 rounded "
            autoComplete="email"
            value={watch('email') || ''}
            {...register('email', {
              required: true,
              pattern: /[^@]+@[^@]+\.[^@]+$/
            })}
            />

            {errors.email?.type == 'pattern' && <p className="text-red-500">Please enter a valid email address.</p>}
            {errors.email?.type == 'required' && <p className="text-red-500">Email address is required.</p>}
        </div>

         <div className="flex flex-col gap-1">
          <label htmlFor="country">Country / Region</label>
          <select 
            id="country" 
            onChange={handleChange} 
            className=" border focus:outline-0 border-zinc-800 py-2 px-1 rounded"
            {...register('country')}
            >
            {countries.map(e => <option key={e.isoCode} value={e.isoCode} >{e.name}</option>)}
          </select>
        </div>

        <div className="flex flex-col sm:flex-row gap-5 ">
          <div className="flex flex-1  flex-col gap-1">
            <label htmlFor="fname" >First name</label>
            <input type="text" 
            placeholder="Jhon" 
            {...register('firstName', {
              required: true,
              minLength: 2,
            })} 
            id="fname"
            value={watch('firstName') || ''} 
            className=" border focus:outline-0 border-zinc-800 py-2 px-2 rounded" />
            {errors.firstName?.type == "minLength" && <p className="text-red-500">First name is too short.</p>}
            {errors.firstName?.type == 'required' && <p className="text-red-500">First name is required.</p>}
          </div>
          <div className="flex flex-1 w-full flex-col gap-1">
            <label htmlFor="lname">Last name</label>
            <input 
            type="text" 
            id="lname" 
            {...register('lastName', {
              required: true,
              minLength: 2,
            })} 
            value={watch('lastName') || ''}
            placeholder="Doe" 
            className=" border focus:outline-0 border-zinc-800 py-2 px-2 rounded"/>
            {errors.lname?.type == "minLength" && <p className="text-red-500">Last name is too short.</p>}
            {errors.lname?.type == 'required' && <p className="text-red-500">Last name is required.</p>}
            
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="addres" >Address</label>
          <input 
          type="text" 
          id="addres" 
          {...register('address', {required:true})} 
          placeholder="Street address" 
          value={watch('address') || ''}
          className=" border focus:outline-0 border-zinc-800 py-2 px-2 rounded"
          
          />
          {errors.address?.type == "required" && <p className="text-red-500">Address is required</p>}
          <input type="text" {...register('apartment')} placeholder="Apartment, suit, etc (optional)" id="optional-addres" className=" mt-2 border focus:outline-0 border-zinc-800 py-2 px-2 rounded"/>
        </div>

          <div className="flex flex-col sm:flex-row gap-5">
            <div className="flex flex-1 flex-col gap-1">
            <label htmlFor="city">City</label>
            <select name="" id="city" {...register('city')} className=" border focus:outline-0 border-zinc-800 py-2 px-1 rounded">
              {cities.map(e => <option key={e.name + e.stateCode} value={e.name}> {e.name}</option>)}
            </select>
          </div>

          <div className="flex flex-1 flex-col gap-1">
            <label htmlFor="pcode">Postal code</label>
            <input 
              type="text" name="pcode" 
              {...register('postalCode', {required: true, pattern:/[0-9]{5}/ })}  
              id="pcode"  
              placeholder="10100"
              value={watch('postalCode') || ''} 
              className=" border focus:outline-0 border-zinc-800 py-2 px-2 rounded"
              onChange={(e)=> setValue('postalCode', e.target.value, {shouldValidate: true})}
              />
              {errors.postalCode?.type == "pattern" && <p className="text-red-500">Please enter a valid postal code</p>}
              {errors.postalCode?.type == 'required' && <p className="text-red-500">Postal code is required.</p>}
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="phone-number">Phone Number</label>
          <input type="tel"  
          {...register('phoneNumber', {
            required: true,
            pattern: /[0-9]{3}-[0-9]{3}-[0-9]{4}/
          })} 
          id="phone-number"
          placeholder="809-123-4567" 
          value={watch('phoneNumber') || ''}
          className=" border focus:outline-0 border-zinc-800 py-2 px-2 rounded"
          onChange={(e)=>{
            const formatted = e.target.value
            .replace(/\D/g, '')
            .slice(0, 10)
            .match(/(\d{1,3})?(\d{1,3})?(\d{1,4})?/)
            ?.slice(1)
            ?.filter(Boolean)
            ?.join('-') || '';     
            setValue('phoneNumber', formatted, {shouldValidate: true} )
          }}
          />
          {errors.phoneNumber?.type == "pattern" && <p className="text-red-500">Please enter a valid phone number</p>}
          {errors.phoneNumber?.type == 'required' && <p className="text-red-500">Phone number is required.</p>}
        </div>
       

        <div>
          <input type="submit" value="Save & Continue" className="w-full mt-3 cursor-pointer bg-emerald-400 py-1 rounded" />
        </div>
      </form>
      
      
    </section>
  )
}
