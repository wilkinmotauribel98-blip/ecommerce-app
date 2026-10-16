import { Routes, Route, Navigate, useLocation  } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { PageContextProvider } from '@/context/PageContext'
import ErrorBoundary from '@/components/ui/ErrorBoundary'

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
const InfoPage = lazy(()=> import('@/pages/InfoPage'));

const ShippingForm = lazy(()=> import('@/components/checkout/ShippingForm'));
const Done = lazy(()=> import('@/components/checkout/Done'));
const PaymentForm = lazy(()=> import('@/components/checkout/PaymentForm'))
const Review = lazy(()=> import("@/components/checkout/Review")) 


export default function App() {
  const location = useLocation()
  return (
    <>
    <PageContextProvider>
      <Header />
      <BottomNavbar />
    </PageContextProvider>
      <ErrorBoundary pathname={location.pathname}>
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
          <Route path='/contact' element={<InfoPage contentKey="contact" />} />
          <Route path='/contact-us' element={<InfoPage contentKey="contact" />} />
          <Route path='/shipping-delivery' element={<InfoPage contentKey="shipping-delivery" />} />
          <Route path='/returns-refunds' element={<InfoPage contentKey="returns-refunds" />} />
          <Route path='/faqs' element={<InfoPage contentKey="faqs" />} />
          <Route path='/about' element={<InfoPage contentKey="about" />} />
          <Route path='/careers' element={<InfoPage contentKey="careers" />} />
          <Route path='/press' element={<InfoPage contentKey="press" />} />
          <Route path='/sustainability' element={<InfoPage contentKey="sustainability" />} />
          <Route path='/privacy-policy' element={<InfoPage contentKey="privacy-policy" />} />
          <Route path='/terms-of-service' element={<InfoPage contentKey="terms-of-service" />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      </ErrorBoundary>
      <Footer />
   </>
  )
}