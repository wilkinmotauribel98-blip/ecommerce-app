import { create } from "zustand";
import { persist } from "zustand/middleware";
export const useProducts = create(
  persist(
    (set, get) => ({
      products: [],
      productsById: {},
      isLoading: false,
      hasFetched: false,
      error: null,
      fetchProducts: async () => {
        if (get().hasFetched) return;
        set({ isLoading: true, error: null });
        try {
          const res = await fetch(
            "https://dummyjson.com/products/?limit=100&select=id,title,price,rating,description,category,brand,images"
          );
          const data = await res.json();
          console.log(data);
          const productsById = data.products.reduce((acc, p) => {
            acc[p.id] = p;
            return acc;
          }, {});
          set({ products: data.products, productsById, hasFetched: true, isLoading: false });
        } catch (err) {
          set({ error: err.message, isLoading: false });
        }
      },
    }),
    { name: "products-storage" } 
  )
);