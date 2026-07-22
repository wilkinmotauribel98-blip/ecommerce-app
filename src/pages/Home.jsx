import { main } from "framer-motion/client"
import { Header } from "../components/layout/header/header"
import { Hero } from "../sections/hero/hero"
import { useProducts } from "../hooks/useProducts"
import { use, useEffect } from "react"
import { useState } from "react"
export default function Home() {
  const [size, setSize] = useState(window.innerWidth)
  const isLoading = useProducts((state) => state.isLoading)
    if (isLoading) return <p>Cargando...</p>
  return (
    <>

    <Header />
    <main className="top-20 absolute z-0">
      <Hero size={size}/>
    </main>
    </>
    
  )
}
