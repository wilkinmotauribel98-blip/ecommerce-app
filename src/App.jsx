import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'
import CheckoutPage from './pages/CheckoutPage'
import { Header } from './components/layout/header/Header'
import Sprite from './components/layout/sprite/sprite'
import { useEffect } from 'react'
import { useProducts } from './hooks/useProducts'
import './index.css'
export default function App() {
  const products = useProducts((state)=> state.products);
  const isLoading = useProducts((state)=> state.isLoading);
  const fetchProducts = useProducts((state)=> state.fetchProducts);
  useEffect(()=> {fetchProducts()}, []);
  return (
    <div>
      <Sprite />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </div>
  )
}