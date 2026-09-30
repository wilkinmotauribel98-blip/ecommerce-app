import { createContext } from "react";
import { useLocation } from "react-router-dom";

export const PageContext = createContext(null);

export function PageContextProvider({children}) {
  const location = useLocation();
  const currentPage = location.pathname.split('/').pop();
  
  return(
    <PageContext.Provider
    value={{currentPage}}
  >
    {children}
  </PageContext.Provider>
  )
}