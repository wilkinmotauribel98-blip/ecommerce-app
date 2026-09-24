import { Children, createContext } from "react";
import { useState } from "react";
export const CheckoutContext = createContext(null)

export function CheckoutContextProvider({children}){
  const [currentStep, setCurrentStep] = useState('shipping');

  return (
  <CheckoutContext.Provider value={{currentStep, setCurrentStep}}>
    {children}
  </CheckoutContext.Provider>
  )
}