import { Routes, Route,  } from 'react-router-dom'
import {lazy, Suspense } from 'react'
import Header  from '@/components/layout/header/Header'
import Footer from '@/components/layout/footer/Footer'
import BottomNavbar from '@/components/layout/bottomNavbar/bottomNavbar'
import Sprite from '@/components/layout/sprite/sprite'
import '@/index.css'

const HomePage = lazy(()=>import('@/pages/home.jsx'))
const ProductPage = lazy(()=>import('@/pages/ProductPage.jsx'))
const CartPage = lazy(()=>import('@/pages/CartPage.jsx'))
const CheckoutPage = lazy(()=>import('@/pages/CheckoutPage.jsx'))
const CategoryPage = lazy(()=> import('@/pages/CategoryPage'))
const BrandPage = lazy(()=> import('@/pages/BrandPage'))

export default function App() {
  return (
    <>
      <Sprite />
      <Header />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id/:title" element={<ProductPage />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/brand/:brand" element={<BrandPage />} />
        </Routes>
      </Suspense>
      <BottomNavbar />
      <Footer />
   </>
  )
}