import ShopHeroSection from "@/components/shop/ShopHeroSection";
import RenderAllProducts from "@/components/shop/RenderAllProducts";
export default function ShopPage() {


  return(
    <main className="mb-10" >
      <ShopHeroSection />
      <RenderAllProducts />
    </main>
  )
}