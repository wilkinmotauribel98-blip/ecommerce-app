import { createContext } from "react";
import { useNavigate } from "react-router-dom";

export const CheckoutContext = createContext(null)

export function CheckoutContextProvider({children}){
  

  return (
  <CheckoutContext.Provider value={{ setCurrentStep }}>
    {children}
  </CheckoutContext.Provider>
  )
}