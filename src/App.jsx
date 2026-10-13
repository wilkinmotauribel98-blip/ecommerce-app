import { Routes, Route, Navigate  } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { PageContextProvider } from '@/context/PageContext'

import Header  from '@/components/layout/header/Header'
import Footer from '@/components/layout/footer/Footer'
import BottomNavbar from '@/components/layout/bottomNavbar/BottomNavbar'
import PageSkeleton from '@/components/ui/PageSkeleton'

import '@/index.css'

const HomePage = lazy(()=>import('@/pages/Home'));
const ShopPage = lazy(()=>import('@/pages/ShopPage'));
const ProductPage = lazy(()=>import('@/pages/ProductPage'));
const CartPage = lazy(()=>import('@/pages/CartPage.jsx'));
const CheckoutPage = lazy(()=>import('@/pages/CheckoutPage'));
const CategoryPage = lazy(()=> import('@/pages/CategoryPage'));
const CategoriesPage = lazy(()=> import('@/pages/CategoriesPage'));
const ResultsPage = lazy(()=> import('@/pages/ResultsPage'));
const NotFoundPage = lazy(()=> import('@/pages/NotFoundPage'));
const SupportPage = lazy(()=> import('@/pages/SupportPage'));

const ShippingForm = lazy(()=> import('@/components/checkout/ShippingForm'));
const Done = lazy(()=> import('@/components/checkout/Done'));
const PaymentForm = lazy(()=> import('@/components/checkout/PaymentForm'))
const Review = lazy(()=> import("@/components/checkout/Review")) 


export default function App() {
  return (
    <>
    <PageContextProvider>
      <Header />
      <BottomNavbar />
    </PageContextProvider>
      
      <Suspense fallback={<PageSkeleton />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/:id/:title" element={<ProductPage />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} >
            <Route index element={<Navigate to="shipping" replace />} />
            <Route path="shipping" element={<ShippingForm />} />
            <Route path="payment" element={<PaymentForm />} />
            <Route path="review" element={<Review />} />
            <Route path="done" element={<Done />} />
            
          </Route>
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path='/results/search' element={<ResultsPage/>} />
          <Route path='/shop' element={<ShopPage />} />
          <Route path='/support' element={<SupportPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <Footer />
   </>
  )
}