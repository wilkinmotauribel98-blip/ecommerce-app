import { useEffect, useState } from "react";
import { categories } from "./const";
import { optimizedImg } from "@/utils/optimizedImg";
import CategoryCard from "./CategoryCard";
import CategoriesSkeleton from "./CategoriesSkeleton";
import { preloadImages, minDelay } from "@/utils/loading";

export default function CategoriesContent() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    const startedAt = Date.now();
    // Preload images + minimum delay so the skeleton
    // stays visible even when images are cached by the browser.
    Promise.all([
      preloadImages(categories.map((c) => optimizedImg(c.image, 300, 300))),
      minDelay(800, startedAt),
    ]).then(() => {
      if (!cancelled) setLoading(false);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  if (loading) return <CategoriesSkeleton count={categories.length} />;

  return (
    <section className="grid mt-5 grid-cols-[repeat(auto-fill,minmax(150px,1fr))] grid-rows-3 md:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
      {categories.map((e, index) => <CategoryCard key={e.category} category={e} isLazy={index > 8}/> )}
    </section>
  )
}