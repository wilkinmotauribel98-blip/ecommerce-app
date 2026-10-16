import { useParams } from "react-router-dom";
import BreadCrumbSection from "@/sections/BreadCrumbSection"
import ProductHeroSection from "@/sections/ProductHeroSection";
import TrustBarSection from '@/sections/TrustBarSection'
import ProductTabsSection from "@/sections/ProductTabsSection";
import useFetch from "@/hooks/useFetch";
import ErrorState from "@/components/ui/ErrorState";
export default function ProductPage() {
  const { id } = useParams();
  const { data, loading, error, retry } = useFetch(`https://dummyjson.com/products/${id}`)

  if(error){
    return(
      <ErrorState 
        title={error.message === "HTTP 404" ? "Product not found" : "Couldn't load this product"}
        message="Check your connection and try again."
        onRetry={error.message === "HTTP 404" ? undefined : retry}
      />
    )
  }
  
  return (
    <main className="max-w-360 m-auto z-0 bg-black overflow-hidden   w-[95%]" aria-label="Product Page Main Content">
      <BreadCrumbSection loading={loading} category={data?.category}  title={data?.title} product={true}/>
      <ProductHeroSection product={data} loading={loading} />
      <TrustBarSection product={data} loading={loading} />
      <ProductTabsSection product={data} loading={loading} />
    </main>
  )
}
