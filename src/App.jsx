import { Routes, Route,  } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Header  from '@/components/layout/header/Header'
import Footer from '@/components/layout/footer/Footer'
import BottomNavbar from '@/components/layout/bottomNavbar/bottomNavbar'
import '@/index.css'

const HomePage = lazy(()=>import('@/pages/home.jsx'));
const ProductPage = lazy(()=>import('@/pages/ProductPage.jsx'));
const CartPage = lazy(()=>import('@/pages/CartPage.jsx'));
const CheckoutPage = lazy(()=>import('@/pages/CheckoutPage.jsx'));
const CategoryPage = lazy(()=> import('@/pages/CategoryPage'));
const BrandPage = lazy(()=> import('@/pages/BrandPage'));
const CategoriesPage = lazy(()=> import('@/pages/CategoriesPage'));
export default function App() {
  return (
    <>
      <Header />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/ecommerce-app" element={<HomePage />} />
          <Route path="/ecommerce-app/product/:id/:title" element={<ProductPage />} />
          <Route path="/ecommerce-app/category/:category" element={<CategoryPage />} />
          <Route path="/ecommerce-app/cart" element={<CartPage />} />
          <Route path="/ecommerce-app/checkout" element={<CheckoutPage />} />
          <Route path="/ecommerce-app/brand/:brand" element={<BrandPage />} />
          <Route path="/ecommerce-app/categories" element={<CategoriesPage />} />
        </Routes>
      </Suspense>
      <BottomNavbar />
      <Footer />
   </>
  )
}