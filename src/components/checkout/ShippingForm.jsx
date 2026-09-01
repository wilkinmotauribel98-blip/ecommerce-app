import { Country, State, City } from "country-state-city"
import { useState, useEffect } from "react"
import PaymentForm from "./PaymentForm";
import CartSummary from "../cart/CartSummary";
export default function ShippingForm() {
  const countries = Country.getAllCountries();
  const [cities, setCities ] = useState(City.getCitiesOfCountry('DO'))
  
  
  
  const handleChange = (event)=>{
    const data = event.target.value;
    setCities(City.getCitiesOfCountry(data))
  } 


  return (
    <section className="text-zinc-200 w-full flex flex-col gap-5 ">
      <form action="" className="flex flex-col gap-3 bg-zinc-900 rounded-2xl pb-5 pt-7 px-5" >
        <div className="flex flex-col gap-1 ">
          <label htmlFor="email">Email address</label>
          <input 
            type="email" 
            name="email"
            id="email"
            placeholder="you@example.com"
            className="bg-zinc-950 border focus:outline-0 border-zinc-700 py-2 px-2 rounded "
            pattern=".+@example\.com"
            autoComplete="email"
            />
        </div>

         <div className="flex flex-col gap-1">
          <label htmlFor="country">Country / Region</label>
          <select 
            name="country" 
            id="country" 
            onChange={handleChange} 
            className="bg-zinc-950 border focus:outline-0 border-zinc-700 py-2 px-1 rounded"
            defaultValue={'DO'}
            autoComplete="country"
            >
            {countries.map(e => <option key={e.isoCode} value={e.isoCode} >{e.name}</option>)}
          </select>
        </div>

        <div className="flex flex-col sm:flex-row gap-5 ">
          <div className="flex flex-1  flex-col gap-1">
            <label htmlFor="fname">First name</label>
            <input type="text" name="fname" placeholder="donald" id="fname" className="bg-zinc-950 border focus:outline-0 border-zinc-700 py-2 px-2 rounded" />
          </div>
          <div className="flex flex-1 w-full flex-col gap-1">
            <label htmlFor="lname">Last name</label>
            <input type="text" name="" id="lname" placeholder="trump" className="bg-zinc-950 border focus:outline-0 border-zinc-700 py-2 px-2 rounded"/>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="addres">Address</label>
          <input type="text" id="addres" placeholder="Street adress" className="bg-zinc-950 border focus:outline-0 border-zinc-700 py-2 px-2 rounded"/>
          <input type="text"  placeholder="Apartment, suit, etc (optional)" id="optional-addres" className="bg-zinc-950 mt-2 border focus:outline-0 border-zinc-700 py-2 px-2 rounded"/>
        </div>

          <div className="flex flex-col sm:flex-row gap-5">
            <div className="flex flex-1 flex-col gap-1">
            <label htmlFor="city">City</label>
            <select name="" id="city" className="bg-zinc-950 border focus:outline-0 border-zinc-700 py-2 px-1 rounded">
              {cities.map(e => <option key={e.name + e.stateCode} value={e.stateCode}> {e.name}</option>)}
            </select>
          </div>

          <div className="flex flex-1 flex-col gap-1">
            <label htmlFor="pcode">Postal code</label>
            <input type="text" name="pcode" id="pcode"  placeholder="10100" className="bg-zinc-950 border focus:outline-0 border-zinc-700 py-2 px-2 rounded"/>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="phone-number">Phone (optional)</label>
          <input type="tel" name="phone-number" id="phone-number" required  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="809-123-456" className="bg-zinc-950 border focus:outline-0 border-zinc-700 py-2 px-2 rounded"/>
        </div>

      </form>
      <PaymentForm />
      
    </section>
  )
}
