import { useState } from "react";
import { FeatureCard } from "../../components/ui/FeatureCard";

export function Category() {
  return(
    <section className="bg-black flex mt-5 overflow-hidden w-dvw justify-center gap-2.5 px-3 items-center m-auto" >
      <FeatureCard className={`h-9 w-9 lg:h-12 lg:w-12`} icon={`#audio-icon`} title={`Audio`} description={`Headphones, Speakers`}/>
      <FeatureCard className={`h-9 w-9 lg:h-12 lg:w-12`} icon={`#computers-icon`} title={`Computers`} description={`Laptops, Desktops`}/>
      <FeatureCard className={`h-9 w-9 lg:h-12 lg:w-12`} icon={`#smartphones-icon`} title={`Smartphones`} description={`Phones, Accesories`}/>
      <FeatureCard className={`h-9 w-9 lg:h-12 lg:w-12`} icon={`#wearables-icon`} title={`Wearables`} description={`Whatchers, Bands`}/>
      <FeatureCard className={`h-9 w-9 lg:h-12 lg:w-12`} icon={`#accessories-icon`} title={`Accessories`} description={`Cables, Chargers`}/>
    </section>
  )
}