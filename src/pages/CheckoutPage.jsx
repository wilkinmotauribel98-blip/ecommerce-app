import ShippingForm from "../components/checkout/ShippingForm"
import CartSummary from "../components/cart/CartSummary"
export default function CheckoutPage() {
  return (
    <main className="max-w-360 m-auto z-0 bg-black overflow-hidden  w-[95%]" aria-label="Checkout Page Main Content">
      <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl">Checkout</h1>
      <p className="text-zinc-400">Complete your order securely.</p>
      <section className="flex flex-col lg:flex-row gap-5 mt-5  m-auto">
        <ShippingForm />
        <CartSummary checkout={true}/>
      </section>
    </main>
    
  )
}
