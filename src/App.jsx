import { Routes, Route,  } from 'react-router-dom'
import { useEffect, lazy, Suspense } from 'react'
import { useProducts } from '@/hooks/useProducts'
import Header  from '@/components/layout/header/Header'
import Footer from '@/components/layout/footer/Footer'
import BottomNavbar from '@/components/layout/bottomNavbar/bottomNavbar'
import Sprite from '@/components/layout/sprite/sprite'
import '@/index.css'

const HomePage = lazy(()=>import('./pages/home.jsx'))
const ProductPage = lazy(()=>import('./pages/ProductPage.jsx'))
const CartPage = lazy(()=>import('./pages/CartPage.jsx'))
const CheckoutPage = lazy(()=>import('./pages/CheckoutPage.jsx'))

export default function App() {
  const fetchProducts = useProducts((state)=> state.fetchProducts);
  useEffect(()=> {fetchProducts()}, []);
  return (
    <>
      <Sprite />
      <Header />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </Suspense>
      <BottomNavbar />
      <Footer />
   </>
  )
}