import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'
import CheckoutPage from './pages/CheckoutPage'
import { Header } from './components/layout/header/Header'
import Sprite from './components/layout/sprite/sprite'

export default function App() {
  return (
    <div>
      <Sprite />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </div>
  )
}