import { Country, City } from "country-state-city"
import { useState, useEffect } from "react"
import { useForm } from "react-hook-form";
import { useCheckout } from "@/hooks/useCheckout";
import { useNavigate } from "react-router-dom"



export default function ShippingForm() {
  const countries = Country.getAllCountries();
  const navigate = useNavigate();
  const shippingInfo = useCheckout((state) => state.shippingForm)
  const onShippingFormSubmit = useCheckout((state) => state.onShippingFormSubmit)
  const isSaved = useCheckout((state)=> state.isSaved)
  const { register, handleSubmit, setValue, watch, formState:{ errors } } = useForm({defaultValues: {
    'country' : 'DO' 
  }})
  const [cities, setCities ] = useState(City.getCitiesOfCountry('DO'))

  const handleCountryChange = (event)=>{
    const data = event.target.value;
    setCities(City.getCitiesOfCountry(data))
  } 

  const handlePhoneNumberChange = (event)=>{
    const formatted = event.target.value
    .replace(/\D/g, '')
    .slice(0, 10)
    .match(/(\d{1,3})?(\d{1,3})?(\d{1,4})?/)
    ?.slice(1)
    ?.filter(Boolean)
    ?.join('-') || '';     
    setValue('phoneNumber', formatted, {shouldValidate: true} )
  }


  const onSubmit = (data)=> {
    onShippingFormSubmit(data)
    navigate('/checkout/payment')
  };

  useEffect(()=>{
  if(isSaved){
    setValue('phoneNumber', shippingInfo.phoneNumber, {shouldValidate: true});
    setValue('postalCode', shippingInfo.postalCode, {shouldValidate: true})
    setValue('email', shippingInfo.email, {shouldValidate: true})
    setValue('firstName', shippingInfo.firstName, {shouldValidate: true})
    setValue('lastName', shippingInfo.lastName , {shouldValidate: true})
    setValue('address', shippingInfo.address, {shouldValidate: true})
    setValue('city', shippingInfo.city, {shouldValidate: true})
    setValue('country', shippingInfo.country, {shouldValidate: true})
  }
  },  [])

  

  return (
    <section className="text-zinc-200 flex-1 w-full max-w-2xl flex flex-col  ">
   
      <h1 className="text-2xl font-bold">Shipping Information</h1>
      <p className="text-zinc-400">Enter your shipping details to ensure your order arrives safely at your doorstep.</p>

      <form
        className="flex flex-col gap-3  bg-gray-900/60 px-4 mt-4 border border-gray-800 rounded-2xl pb-5 pt-5 " 
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-1 ">
          <label htmlFor="email">Email address</label>
          <input 
            type="email" 
            id="email"
            placeholder="you@example.com"
            className="border focus:outline-0 border-gray-800 py-2 px-2 rounded "
            autoComplete="email"
            {...register('email', {
              required: true,
              pattern: /[^@]+@[^@]+\.[^@]+$/,
              value: watch('email') || '',
            })}
            />

            {errors.email?.type == 'pattern' && <p className="text-red-500">Please enter a valid email address.</p>}
            {errors.email?.type == 'required' && <p className="text-red-500">Email address is required.</p>}
        </div>

         <div className="flex flex-col gap-1">
          <label htmlFor="country">Country / Region</label>
          <select 
            id="country" 
            className=" border focus:outline-0 border-gray-800 py-2 px-1 rounded"
            {...register('country',
              { required: true,
                onChange: (e) =>  handleCountryChange(e)
               }
             )}
            >
            {countries.map(e => <option key={e.isoCode} value={e.isoCode} >{e.name}</option>)}
          </select>
        </div>

        <div className="flex flex-col sm:flex-row gap-5 ">
          <div className="flex flex-1  flex-col gap-1">
            <label htmlFor="fname" >First name</label>
            <input type="text"  
            {...register('firstName', {
              required: true,
              minLength: 2,
              value: watch('firstName') || '',
            })} 
            placeholder="Jhon"
            id="fname"
            className=" border focus:outline-0 border-gray-800 py-2 px-2 rounded" />
            {errors.firstName?.type == "minLength" && <p className="text-red-500">First name is too short.</p>}
            {errors.firstName?.type == 'required' && <p className="text-red-500">First name is required.</p>}
          </div>
          <div className="flex flex-1 w-full flex-col gap-1">
            <label htmlFor="lastName">Last name</label>
            <input 
            type="text" 
            id="lastName" 
            placeholder="Doe"
            {...register('lastName', {
              required: true,
              minLength: 2,
              value: watch('lastName') || '',
            })} 
            className=" border focus:outline-0 border-gray-800 py-2 px-2 rounded"/>
            {errors.lname?.type == "minLength" && <p className="text-red-500">Last name is too short.</p>}
            {errors.lname?.type == 'required' && <p className="text-red-500">Last name is required.</p>}
            
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="address" >Address</label>
          <input 
          type="text" 
          id="address" 
          {...register('address', {
            required:true,
            value: watch('address') || '',
          })} 
          className=" border focus:outline-0 border-gray-800 py-2 px-2 rounded"
          placeholder='123 Main St'
          />
          {errors.address?.type == "required" && <p className="text-red-500">Address is required</p>}
          <input type="text" {...register('apartment')} placeholder="Apartment, suit, etc (optional)" id="optional-address" className=" mt-2 border focus:outline-0 border-gray-800 py-2 px-2 rounded"/>
        </div>

          <div className="flex flex-col sm:flex-row gap-5">
            <div className="flex flex-1 flex-col gap-1">
            <label htmlFor="city">City</label>
            <select 
              id="city" 
              {...register('city')} 
              className=" border focus:outline-0 border-gray-800 py-2 px-1 rounded"
              >
              {cities.map(e => <option key={e.name + e.stateCode} value={e.name}> {e.name}</option>)}
            </select>
          </div>

          <div className="flex flex-1 flex-col gap-1">
            <label htmlFor="postalCode">Postal code</label>
            <input 
              type="text"
              {...register('postalCode', {
                required: true,
                pattern:/[0-9]{5}/,
                watch: watch('postalCode') || '',
                onChange: (e)=> setValue('postalCode', e.target.value, {shouldValidate: true})
              })}
              placeholder="12345"  
              id="postalCode"  
              className="border focus:outline-0 border-gray-800 py-2 px-2 rounded"
              />
              {errors.postalCode?.type == "pattern" && <p className="text-red-500">Please enter a valid postal code</p>}
              {errors.postalCode?.type == 'required' && <p className="text-red-500">Postal code is required.</p>}
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input type="tel"  
          {...register('phoneNumber', {
            required: true,
            pattern: /[0-9]{3}-[0-9]{3}-[0-9]{4}/,
            value: watch('phoneNumber') || '',
            onChange: (e)=> handlePhoneNumberChange(e)
          })} 
          placeholder="123-456-7890"
          id="phoneNumber"
          className="border focus:outline-0 border-gray-800 py-2 px-2 rounded"
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
