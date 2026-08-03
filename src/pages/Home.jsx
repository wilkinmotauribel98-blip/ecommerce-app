import  { useProducts } from "@/hooks/useProducts"
import  HeroSection  from "@/sections/heroSection"
import  CategorySection  from "@/sections/CategorySection"
import  NewArrivalsSection  from "@/sections/NewArrivalsSection"
import  ShopByCategorySection  from "@/sections/ShopByCategorySection"
import  BestSellersSection  from "@/sections/BestSellersSection"
import  WhyChooseUsSection  from "@/sections/whyChooseUsSection"
import  NewsletterSection  from "@/sections/NewsletterSection"



export default function Home() {
  const isLoading = useProducts((state) => state.isLoading)
    if (isLoading) return <p>Cargando...</p>
  return (
    <main className="max-w-360 m-auto z-0 bg-black overflow-hidden  w-dvw" aria-label="Home Page Main Content">
      <HeroSection />
      <CategorySection />
      <NewArrivalsSection />
      <ShopByCategorySection />
      <BestSellersSection />      
      <WhyChooseUsSection />
      <NewsletterSection />
    </main>
  )
}
