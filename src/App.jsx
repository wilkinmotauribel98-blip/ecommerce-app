import { Routes, Route, useLocation  } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { useEffect } from 'react';
import { PageContextProvider } from '@/context/PageContext';
import Header  from '@/components/layout/header/Header'
import Footer from '@/components/layout/footer/Footer'
import BottomNavbar from '@/components/layout/bottomNavbar/bottomNavbar'
import '@/index.css'

const HomePage = lazy(()=>import('@/pages/Home.jsx'));
const ShopPage = lazy(()=>import('@/pages/ShopPage.jsx'));
const ProductPage = lazy(()=>import('@/pages/ProductPage.jsx'));
const CartPage = lazy(()=>import('@/pages/CartPage.jsx'));
const CheckoutPage = lazy(()=>import('@/pages/CheckoutPage.jsx'));
const CategoryPage = lazy(()=> import('@/pages/CategoryPage'));
const CategoriesPage = lazy(()=> import('@/pages/CategoriesPage'));
const ResultsPage = lazy(()=> import('@/pages/ResultsPage'));
const NotFoundPage = lazy(()=> import('@/pages/NotFoundPage'));


;

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
    <PageContextProvider>
      <Header />
      <BottomNavbar />
    </PageContextProvider>
      
      <Suspense fallback={null}>
        <Routes>
          <Route path="/ecommerce-app" element={<HomePage />} />
          <Route path="/ecommerce-app/product/:id/:title" element={<ProductPage />} />
          <Route path="/ecommerce-app/category/:category" element={<CategoryPage />} />
          <Route path="/ecommerce-app/cart" element={<CartPage />} />
          <Route path="/ecommerce-app/checkout" element={<CheckoutPage />} />
          <Route path="/ecommerce-app/categories" element={<CategoriesPage />} />
          <Route path='/ecommerce-app/results/search?' element={<ResultsPage/>} />
          <Route path='/ecommerce-app/shop' element={<ShopPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <Footer />
   </>
  )
}