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

const fetchIds = (ids) =>
  Promise.all(ids.map((id) => fetch(`https://dummyjson.com/products/${id}`).then((res) => res.json())));

export const useProducts = create(
  persist(
    (set, get) => ({
      products: [],
      heroProducts: [],
      newArrivalsProducts: [],
      bestSellersProducts: [],
      categoryProducts : [],
      heroLoading: false,
      newArrivalsLoading: false,
      bestSellersLoading: false,
      categoriesLoading: false,
      hasHomeFetched: false,
      error: null,
      fetchHomeProducts: async () => {
        if (get().hasHomeFetched) return;
        set({
          error: null,
          heroLoading: true,
          newArrivalsLoading: true,
          bestSellersLoading: true,
          categoriesLoading: true,
        });
        try {
          const [hero, newArrivals, bestSellers, categorias] = await Promise.all([
            fetchIds(heroIds),
            fetchIds(newArrivalsIds),
            fetchIds(bestSellersIds),
            Promise.all(
              categories.map((category) =>
                fetch(`https://dummyjson.com/products/${category.id}`)
                  .then((res) => res.json())
                  .then((product) => ({ ...category, images: product.images }))
              )
            ),
          ]);

          set({
            heroProducts: hero,
            heroLoading: false,
            newArrivalsProducts: newArrivals,
            newArrivalsLoading: false,
            bestSellersProducts: bestSellers,
            bestSellersLoading: false,
            categoryProducts: categorias,
            categoriesLoading: false,
            hasHomeFetched: true,
          });
        } catch (err) {
          set({
            error: err.message,
            heroLoading: false,
            newArrivalsLoading: false,
            bestSellersLoading: false,
            categoriesLoading: false,
          });
        }
      }
    }),
    { name: "products-storage" } 
  )
);