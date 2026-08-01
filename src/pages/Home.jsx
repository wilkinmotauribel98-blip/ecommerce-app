import { Header } from "@/components/layout/header/header"
import { Hero } from "@/sections/hero/hero"
import { Category } from "@/sections/category/Category"
import { NewArrivals } from "@/sections/new arrivals/NewArrivals"
import { ShopByCategory } from "@/sections/shop by category/ShopByCategory"
import { Navbar } from "@/sections/navbar/Navbar"
import { BestSellers } from "@/sections/best-sellers/BestSellers"
import { WhyChooseUs } from "@/sections/why choose us/whyChooseUs"
import { useProducts } from "@/hooks/useProducts"

export default function Home() {
  const isLoading = useProducts((state) => state.isLoading)
    if (isLoading) return <p>Cargando...</p>
  return (
    <main className="absolute top-10 xl:relative xl:top-0  max-w-360 m-auto z-0 bg-black overflow-hidden  w-dvw">
      <Hero />
      <Category/>
      <NewArrivals />
      <ShopByCategory />
      <BestSellers />
      <Navbar />
      <WhyChooseUs />
    </main>
  )
}
