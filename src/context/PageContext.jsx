import { createContext, useState } from "react";

export const PageContext = createContext(null);

export function PageContextProvider({children}) {
  const a = window.location.pathname.split('/')
  const [actualPage, setActualPage] = useState(a[a.length - 1]);
  
  return(
    <PageContext.Provider
    value={{actualPage, setActualPage}}
  >
    {children}
  </PageContext.Provider>
  )
}