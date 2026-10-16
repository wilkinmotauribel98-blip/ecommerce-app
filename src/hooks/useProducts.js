import { create } from "zustand";
import { fetchAllProducts } from '@/api/products.js'

const STALE_TIME = 1000 * 60 * 60;
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

const pickByIds = (all, ids) => {
  const map = new Map(all.map((p) => [p.id, p]));
  return ids.map((id) => map.get(id)).filter(Boolean);
};

export const useProducts = create(
    (set, get) => ({
      heroProducts: [],
      newArrivalsProducts: [],
      bestSellersProducts: [],
      categoryProducts : [],
      heroLoading: false,
      newArrivalsLoading: false,
      bestSellersLoading: false,
      categoriesLoading: false,
      hasHomeFetched: false,
      lastFetched: null,
      error: null,
      fetchHomeProducts: async () => {
        const { hasHomeFetched, lastFetched } = get();
        if (hasHomeFetched && lastFetched && Date.now() - lastFetched < STALE_TIME) return;
        set({
          error: null,
          heroLoading: true,
          newArrivalsLoading: true,
          bestSellersLoading: true,
          categoriesLoading: true,
        });
        try {
          
          const all = await fetchAllProducts();

          const hero = pickByIds(all, heroIds);
          const newArrivals = pickByIds(all, newArrivalsIds);
          const bestSellers = pickByIds(all, bestSellersIds);
          const categoriesWithImages = categories.map((category) => {
            const match = all.find((p) => p.id === category.id);
            return { ...category, images: match?.images ?? [] };
          });

          set({
            heroProducts: hero,
            heroLoading: false,
            newArrivalsProducts: newArrivals,
            newArrivalsLoading: false,
            bestSellersProducts: bestSellers,
            bestSellersLoading: false,
            categoryProducts: categoriesWithImages,
            categoriesLoading: false,
            hasHomeFetched: true,
            lastFetched: Date.now(),
            error: null,
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
    })
    
  );