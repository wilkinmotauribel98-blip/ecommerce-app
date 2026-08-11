import { create } from "zustand";
import { persist } from "zustand/middleware";

const heroIds = [98, 78, 81, 95, 100];
const newArrivalsIds = [140, 87, 34, 163, 170];
const bestSellersIds = [121, 116, 99, 80];
const categories = [
  {category: "beauty", id: 3, images: null, total: 5 },
  {category: "kitchen-accessories", id: 51, images: null, total: 30},
  {category: "mobile-accessories", id: 102,images: null, total: 5},
  {category: "smartphones", id: 122,images: null, total: 16},
  {category: "tablets", id: 161,images: null, total: 3},
  {category: "vehicle", id: 167,images: null, total: 5},
  {category: "womens-watches", id: 190,images: null, total: 5}
]

export const useProducts = create(
  persist(
    (set, get) => ({
      products: [],
      heroProducts: [],
      newArrivalsProducts: [],
      bestSellersProducts: [],
      categoryProducts : [],
      isLoading: false,
      hasHomeFetched: false,
      error: null,      
      fetchHomeProducts:async () => {
        if (get().hasHomeFetched) return;
        set({ isLoading: true, error: null });
        try {
          const hero = await Promise.all(heroIds.map((i)=> fetch( `https://dummyjson.com/products/${i}`).then(p=>p.json())));

          const newArrivals = await Promise.all(newArrivalsIds.map((i)=> fetch( `https://dummyjson.com/products/${i}`).then(p=>p.json())));

          const bestSellers = await Promise.all(bestSellersIds.map((i)=> fetch( `https://dummyjson.com/products/${i}`).then(p=>p.json())));

          const categorias = await Promise.all(categories.map((i, index)=> fetch( `https://dummyjson.com/products/${i.id}`).then(p=> p.json()).then(pr => categories[index].images = pr.images)));
          
          console.log(categories);
          
          
          set({ heroProducts: hero, newArrivalsProducts: newArrivals, bestSellersProducts: bestSellers, categoryProducts: categories, hasHomeFetched: true, isLoading: false });
        } catch (err) {
          set({ error: err.message, isLoading: false });
        }
      }
    }),
    { name: "products-storage" } 
  )
);