
import { FeatureCard } from "../components/ui/FeatureCard";

export default function CategorySection() {
  return(
    <section className="bg-black flex mt-5 overflow-hidden w-[95%] sm:w-[calc(100%-2rem)] justify-center gap-2.5 items-center m-auto " >
      <FeatureCard className={`h-9 w-9 lg:h-12 lg:w-12`} icon={`tablet-icon`} title={`Tablets`} description={`iPads, Samsung`}/>
      <FeatureCard className={`h-9 w-9 lg:h-12 lg:w-12`} icon={`computers-icon`} title={`Laptops`} description={`Laptops, Desktops`}/>
      <FeatureCard className={`h-9 w-9 lg:h-12 lg:w-12`} icon={`smartphones-icon`} title={`Smartphones`} description={`Phones, Accesories`}/>
      <FeatureCard className={`h-9 w-9 lg:h-12 lg:w-12`} icon={`wearables-icon`} title={`Mens watches`} description={`Whatchers, Bands`}/>
      <FeatureCard hidden={'hidden xl:flex'} className={`h-9 w-9 lg:h-12 lg:w-12`} icon={`accessories-icon`} title={`Mobile Accessories`} description={`Cables, Chargers`}/>
    </section>
  )
}