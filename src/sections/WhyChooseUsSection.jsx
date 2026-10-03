import Badge from "@/components/ui/Badge";

export default function WhyChooseUsSection() {
  return (
    <section className="w-[97%] h-auto bg-black m-auto mb-6" aria-label="Why Choose Us Section">
      <h2 className="text-xl  text-white mb-5" aria-label="Section Title">Why Choose Us</h2>
      <div className="flex flex-wrap gap-4 justify-center border border-zinc-800 p-4 rounded-lg">
        <ul className="flex flex-wrap gap-4">
        <Badge title={'Premium Quality'} desc={'Curated top quality products.'} icon={'icon-premium-quality'}/>
        <Badge title={'Fast & Free Shipping'} desc={'Free shipping on orders over $99.'} icon={'icon-free-shipping'}/>
        <Badge title={'Easy Returns'} desc={'30-day return policy for your peace of mind.'} icon={'icon-easy-returns'}/>
        <Badge title={'24/7 Customer Support'} desc={'Our dedicated team is always here to help you.'} icon={'icon-customer-support'}/>
        </ul>
      </div>
    </section>
  );
} 