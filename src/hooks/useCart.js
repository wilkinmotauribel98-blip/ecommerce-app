import { create } from "zustand";
import { persist } from "zustand/middleware";
const ITBIS_RATE = 0.18;

export const useCart = create(
  persist(
    (set, get) => ({
      cart:{},
      total: 0,
      setCart: (product, id) => {
        set((state)=>({cart : {...state.cart, [id]: product}, }))
       const s =  Object.values(get().cart).reduce((acc, e)=>{
          return acc + e.quantity
        }, 0)
        set({total : s});
      },
      deleteProduct: (id) =>{
        set((state) => {
          const newItems = {...state.cart}
          delete newItems[id];
          return {cart : newItems}
        })
        const s =  Object.values(get().cart).reduce((acc, e)=>{
          return acc + e.quantity
        }, 0)
        set({total : s});
      },
      recalcTotal: ()=>{
        const subtotal = Object.values(get().cart).reduce((acc, e) => acc + (e.quantity * e.price), 0);
        const tax = subtotal * ITBIS_RATE;
        const total = subtotal + tax;
        return { subtotal, tax, total }
      }

    }),
    { name: "client-storage" } 
  )
);