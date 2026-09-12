import { useParams } from "react-router-dom"
import { fetchProductsByCategory } from '@/api/products.js'
import { useState, useEffect  } from "react";
import BreadCrumbSection from "@/sections/BreadCrumbSection"
import CategoryContent from "@/components/category/CategoryContent";
import CategoryContentSkeleton from "@/components/category/CategoryContentSkeleton";
import { optimizedImg } from "@/components/product/ProductCard";
import { preloadImages, minDelay } from "@/utils/loading";

export default function CategoryPage() {
  const [products, setProducts] = useState();
  const [brands, setBrands ] = useState()
  const [loading, setLoading] = useState(true)
  const { category } = useParams();
  useEffect(()=>{
    let cancelled = false;
    setLoading(true);
    const startedAt = Date.now();
    fetchProductsByCategory(category).then(e=>{
      if (cancelled) return;
      // Espera al fetch + precarga de imágenes + tiempo mínimo,
      // para que el skeleton sea perceptible y no haya pop-in.
      Promise.all([
        preloadImages(e.products.map(p => optimizedImg(p.images?.[0], 400, 400))),
        minDelay(600, startedAt),
      ]).then(()=>{
        if (cancelled) return;
        setProducts(e.products)
        setBrands(e.brands);
        setLoading(false);
      });
    })
  },[category] )

  return(
    <main className="max-w-360 relative m-auto w-[95%] ">
      <BreadCrumbSection title={category.replace(/-/g," ")} cart={true} loading={loading && !products}/>
      <h1 className="text-white text-2xl my-5 pl-2 capitalize">{category.replace(/-/g,' ')}</h1>
      {(loading || !products)
        ? <CategoryContentSkeleton />
        : <CategoryContent content={products} brands={brands}/>}

    </main>
  )
}