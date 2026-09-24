import CheckoutSteps from "@/components/checkout/CheckoutSteps"
import ShippingForm from "@/components/checkout/ShippingForm"
import CartSummary from "@/components/cart/CartSummary"
import PaymentForm from '@/components/checkout/PaymentForm'
import Review from "./Review"
import { useContext } from "react"
import { CheckoutContext } from "@/context/CheckoutContext"

const SHIPPING_FORM = 'shipping';
const PAYMENT_FORM = 'payment';
const REVIEW = 'review';
const DONE = 'done';


export default function CheckoutContent(){
  const { currentStep } = useContext(CheckoutContext)
  
  return(
    <main className="max-w-360 mb-20 m-auto gap-10 justify-center flex flex-col lg:flex-row mt-10 z-0 bg-black overflow-hidden  w-[95%]" aria-label="Checkout Page Main Content">
          <section className="flex flex-col gap-5 items-center">
              <CheckoutSteps />
              {currentStep === SHIPPING_FORM && <ShippingForm />}
              {currentStep === PAYMENT_FORM && <PaymentForm />}
              {currentStep === REVIEW && <Review />}
          </section>
          <CartSummary checkout={true} />
        </main>
  )
}