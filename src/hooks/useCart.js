import { create } from "zustand";
import { persist } from "zustand/middleware";


export const useCart = create(
  persist(
    (set, get) => ({
      cart:{},
      total: 0,
      setCart: (product,id) => {
        set((state)=>({cart : {...state.cart, [id]: product}, }))
       const s =  Object.values(get().cart).reduce((acc, e)=>{
          return acc + e.quantity
        }, 0)
        set({total : s});
        
        
        
      }
    }),
    { name: "client-storage" } 
  )
);