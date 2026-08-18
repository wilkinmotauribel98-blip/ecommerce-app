import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react'
import BreadCrumbSection from "@/sections/BreadCrumbSection"
import ProductHeroSection from "@/sections/ProductHeroSection";
import TrustBarSection from '@/sections/TrustBarSection'
import ProductTabsSection from "../sections/ProductTabsSection";
export default function ProductPage() {
  const [product, setProduct] = useState(false);
  const { id } = useParams();

  useEffect(()=>{ fetch(`https://dummyjson.com/products/${id}`).then(r => r.json()).then(p => setProduct(p))},[id])
  
  return (
    <main className="max-w-7xl m-auto z-0 bg-black overflow-hidden   w-[95%]" aria-label="Product Page Main Content">
      <BreadCrumbSection loading={!product} category={product.category} brand={product?.brand} title={product.title} />
      <ProductHeroSection product={product} loading={!product} />
      <TrustBarSection product={product} loading={!product} />
      <ProductTabsSection product={product} loading={!product} />
    </main>
  )
}
