import BreadCrumbSection from "@/sections/BreadCrumbSection"
import CartHeader from "@/components/cart/CartHeader"
import CartItems from "../components/cart/CartItems"

export default function CartPage() {
  return (
    <main className="m-auto z-0 bg-black overflow-hidden max-w-360 w-[95%] " aria-label="Cart Page Main Content">
      <BreadCrumbSection cart={true} title={'Cart'}/>
      <CartHeader />
      <CartItems />
    </main>
  )
}
