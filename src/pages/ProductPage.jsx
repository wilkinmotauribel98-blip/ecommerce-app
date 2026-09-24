import { useParams } from "react-router-dom";
import BreadCrumbSection from "@/sections/BreadCrumbSection"
import ProductHeroSection from "@/sections/ProductHeroSection";
import TrustBarSection from '@/sections/TrustBarSection'
import ProductTabsSection from "@/sections/ProductTabsSection";
import useFetch from "@/hooks/useFetch";
export default function ProductPage() {
  const { id } = useParams();
  const { data, loading } = useFetch(`https://dummyjson.com/products/${id}`)
  
  return (
    <main className="max-w-360 m-auto z-0 bg-black overflow-hidden   w-[95%]" aria-label="Product Page Main Content">
      <BreadCrumbSection loading={loading} category={data?.category}  title={data?.title} product={true}/>
      <ProductHeroSection product={data} loading={loading} />
      <TrustBarSection product={data} loading={loading} />
      <ProductTabsSection product={data} loading={loading} />
    </main>
  )
}
