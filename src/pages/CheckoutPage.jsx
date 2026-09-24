import { CheckoutContextProvider } from "@/context/CheckoutContext"

import CheckoutContent from "../components/checkout/CheckoutContent"
export default function CheckoutPage() {
  return (
    <CheckoutContextProvider>
      <CheckoutContent />
    </CheckoutContextProvider>
    
  )
}
