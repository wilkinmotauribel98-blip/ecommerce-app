import { create } from 'zustand'

const useCartStore = create((set) => ({
  items: [],
  addItem: (product) => {},
  removeItem: (id) => {},
  updateQuantity: (id, qty) => {},
  clearCart: () => {},
}))

export default useCartStore
