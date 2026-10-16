import SupportCard from "./SupportCard"
import { publicUrl } from "@/utils/publicUrl";

export default function SupportContent(){
  return(
    <section className="mt-10  m-auto">
      <h2 className="text-white text-4xl">How can we help?</h2>
      <div className="grid gap-5  grid-cols-[repeat(auto-fill,minmax(300px,1fr))] xl:grid-cols-[repeat(auto-fill,minmax(400px,1fr))] my-5 w-full m-auto">
      <SupportCard title={'Orders & Delivery'} description={'Track your order, shipping info and delivery items.'} icon={'package'}/>
      <SupportCard title={'Returns & Refunds'} description={'Return an item and get your refund'} icon={'return'}/>
      <SupportCard title={'Payments'} description={'Payment methods, security and billing questions'} icon={'credit-card'}/>
      <SupportCard title={'Account'} description={'Manage your account, password and settings.'} icon={'user'}/>
      <SupportCard title={'FAQs'} description={'Find quick answers to common questions.'} icon={'help-circle'}/>
      <SupportCard title={'Contact us'} description={'Talk to our support team and get personalized help.'} icon={'message-circle'}/>
      </div>
      <article className="flex flex-col md:flex-row justify-center gap-4 items-center py-2.5 px-3  m-auto bg-gray-900/50 border border-zinc-800 rounded cursor-pointer">
        <svg className={`w-15 h-15 text-emerald-300 mt-0.5`}>
          <use href={publicUrl(`sprite-core.svg#icon-support`)}/>
        </svg>
        <div className="flex flex-col gap-1">
          <strong className="text-emerald-300 text-center md:text-left">STILL NEED HELP?</strong>
          <span className="text-zinc-200 text-lg text-pretty text-center  md:text-left">Our Support team is available 24/7.</span>
          <p className="text-zinc-400 max-w-90 text-pretty text-center md:text-left">Get in touch with us and we'll be happy to help.</p>
        </div>
        <button className="bg-emerald-300 flex items-center gap-1 shrink-0 text-white rounded py-2 px-2.5 text-center md:ml-auto">
          <svg className="w-5 h-5 ">
            <use href={publicUrl('sprite-core.svg#icon-envelope')} />
          </svg>
          Contact Support
        </button>
    </article>
    </section>
  )
} 
