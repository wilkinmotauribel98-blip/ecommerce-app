import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react'
import { fetchProduct } from "@/api/products";
import BreadCrumbSection from "@/sections/BreadCrumbSection"
import ProductHeroSection from "@/sections/ProductHeroSection";
import TrustBarSection from '@/sections/TrustBarSection'
import ProductTabsSection from "../sections/ProductTabsSection";
export default function ProductPage() {
  const [product, setProduct] = useState(false);
  const { id, title } = useParams();
  const navigate = useNavigate()
  useEffect(()=>{
    fetchProduct(id).then(p => {
      setProduct(p)
      navigate(`/product/${id}/${p.title.replace(/\s/g, '-')}`)
    }
  )},[id, title])
  
  return (
    <main className="max-w-360 m-auto z-0 bg-black overflow-hidden   w-[95%]" aria-label="Product Page Main Content">
      <BreadCrumbSection loading={!product} category={product.category} brand={product?.brand} title={product.title} product={true}/>
      <ProductHeroSection product={product} loading={!product} />
      <TrustBarSection product={product} loading={!product} />
      <ProductTabsSection product={product} loading={!product} />
    </main>
  )
}
