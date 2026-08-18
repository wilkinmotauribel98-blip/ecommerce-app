import Badge from "@/components/ui/Badge"
import Skeleton from "@/components/ui/Skeleton"

export default function TrustBarSection({product, loading}){
  if (loading) {
    return(
      <section className="w-full mt-10 max-w-7xl m-auto" aria-label="Trust bar loading">
        <ul className="lg:flex border border-zinc-600 rounded-xl bg-zinc-900">
          {[0,1,2,3].map(i => <Skeleton key={i} className="flex-1 h-20 m-3" />)}
        </ul>
      </section>
    )
  }

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