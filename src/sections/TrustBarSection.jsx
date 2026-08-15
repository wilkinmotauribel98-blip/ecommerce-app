import Badge from "@/components/ui/Badge"
export default function TrustBarSection({product}){
  return(
    <section  className="w-full mt-10 max-w-7xl m-auto">
      <ul className="lg:flex border border-zinc-600 rounded-xl bg-zinc-900">
        <Badge icon={'icon-free-shipping'} desc={'Shipping Informetion'} title={product.shippingInformation} style={'py-4  px-3'}/>
        <Badge icon={'icon-premium-quality'} desc={'Warranty Information'} title={product.warrantyInformation} style={'border-y border-zinc-800 py-4 lg:border-y-none md:border-x  px-3'}/>
        <Badge icon={'icon-easy-returns'} desc={'Return Policy'} title={product.returnPolicy} style={'border-y border-zinc-800 py-4 lg:border-y-none lg:border-x  px-3'}/>
        <Badge icon={'icon-easy-returns'} desc={'Return Policy'} title={product.returnPolicy} style={'py-3 px-3'}/>
      </ul>
    </section>
  )
}