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
const CategoriesPage = lazy(()=> import('@/pages/CategoriesPage'));
const ResultsPage = lazy(()=> import('@/pages/ResultsPage'));
const NotFoundPage = lazy(()=> import('@/pages/NotFoundPage'));
export default function App() {
  return (
    <>
      <Header />
      <BottomNavbar />
      <Suspense fallback={null}>
        <Routes>
          <Route path="/ecommerce-app" element={<HomePage />} />
          <Route path="/ecommerce-app/product/:id/:title" element={<ProductPage />} />
          <Route path="/ecommerce-app/category/:category" element={<CategoryPage />} />
          <Route path="/ecommerce-app/cart" element={<CartPage />} />
          <Route path="/ecommerce-app/checkout" element={<CheckoutPage />} />
          <Route path="/ecommerce-app/categories" element={<CategoriesPage />} />
          <Route path='/ecommerce-app/results/search?' element={<ResultsPage/>} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <Footer />
   </>
  )
}