export default function NewsletterSection() {
  return (
         <section className='w-[97%] mx-auto  pb-10 px-5 rounded-lg'>
          <div className='flex flex-col md:flex-row justify-between items-center gap-5'>
            <div>
              <h2 className='text-white text-center md:text-left text-xl'>Stay in the loop</h2>
              <p className='text-zinc-500'>get Eexclusive deals, new arrivals, and more.</p>
            </div>
            <form className='flex gap-1 items-center md:mt-7'>
              <input type="email" placeholder="Your email address" className='text-white border border-zinc-700 bg-[#1A1A1A] rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-800'/>
              <button type="submit" className='text-white bg-emerald-500 px-6 rounded-sm py-2'>Subscribe</button>
            </form>
          </div>
         </section>
      )
      
}