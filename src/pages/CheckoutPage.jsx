import CheckoutSteps from "@/components/checkout/CheckoutSteps"
import  { useLocation } from 'react-router-dom'
import { Outlet } from "react-router-dom"


export default function CheckoutPage() {
  const { pathname } = useLocation();
  const currentStep = pathname.split('/').pop();
  
  return (
    <main className="max-w-360 mb-20 m-auto gap-10 justify-center flex flex-col lg:flex-row mt-10 z-0 bg-black overflow-hidden  w-[95%]" aria-label="Checkout Page Main Content">
          <section className="flex flex-col gap-5 items-center w-full max-w-3xl">
              <CheckoutSteps />
              <Outlet />
          </section>
          
        </main>
    
  )
}
