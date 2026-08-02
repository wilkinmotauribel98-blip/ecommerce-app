import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { useProducts } from '@/hooks/useProducts'
import Home from '@/pages/Home'
import ProductPage from '@/pages/ProductPage'
import CartPage from '@/pages/CartPage'
import CheckoutPage from '@/pages/CheckoutPage'
import Header  from '@/components/layout/header/Header'
import Footer from '@/components/layout/footer/Footer'
import BottomNavbar from '@/components/layout/bottomNavbar/bottomNavbar'
import Sprite from '@/components/layout/sprite/sprite'
import '@/index.css'
export default function App() {
  const fetchProducts = useProducts((state)=> state.fetchProducts);

  useEffect(()=> {fetchProducts()}, []);
  return (
    <>
      <Sprite />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
      <BottomNavbar />
      <Footer />
   </>
  )
}