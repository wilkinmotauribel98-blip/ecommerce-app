import { set } from "react-hook-form"
import { create } from "zustand"

export const useProducts = create((set, get)=> ({
  products : [],
  isLoading: false,
  hasFeched: false,
  error: null,

  fetchProducts: async () => {
    if(get().hasFeched) return
    set({isLoading : true, error: null});
    try {
    const res = await fetch('https://dummyjson.com/products/?limit=100');
    const data = await res.json();

    set({products : data.products, hasFeched:true, isLoading:false})
    } catch (err) {
      set({error : err.mesagge, isLoading: false})
    }
    

    
  }
}))