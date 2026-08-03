import { Detail } from '@/components/ui/Detail'




export default function FooterMobileDetails() {

  return (
    <>
      <Detail title="Shop" content={
        <ul aria-label="Shop Information">
          <li className='text-zinc-400' aria-label="All Products">All Products</li>
          <li className='text-zinc-400' aria-label="New Arrivals">New Arrivals</li>
          <li className='text-zinc-400' aria-label="Best Sellers">Best Sellers</li>
          <li className='text-zinc-400' aria-label="Sale Items">Sale Items</li>
        </ul>
      } />
      <Detail title="Customer Care" content={
        <ul aria-label="Customer Care Information">
          <li className='text-zinc-400' aria-label="Contact Us">Contact Us</li>
          <li className='text-zinc-400' aria-label="Shipping & Delivery">Shipping & Delivery</li>
          <li className='text-zinc-400' aria-label="Returns & Refunds">Returns & Refunds</li>
          <li className='text-zinc-400' aria-label="FAQs">FAQs</li>
        </ul>
      } />

      <Detail title="Company" content={
        <ul aria-label="Company Information" >
          <li className='text-zinc-400' aria-label="About us">About us</li>
          <li className='text-zinc-400' aria-label="Careers">Careers</li>
          <li className='text-zinc-400' aria-label="Press">Press</li>
          <li className='text-zinc-400' aria-label="Sustainability">Sustainability</li>
        </ul>
      } />

       <nav className='flex flex-col gap-2 border-b border-zinc-700 mb-2 pb-5' aria-label="Social Media Navigation">
          <h3 className='text-zinc-200 text-xl font-bold' aria-label="Follow us">Follow us</h3>
          <ul className='flex gap-4' aria-label="Social Media Links">
            <li className='text-zinc-400 w-min' aria-label="Instagram">
              <svg width="44" height="44" aria-hidden="true">
                <use href="#icon-instagram"></use>
              </svg>   
            </li>
            <li className='text-zinc-400 w-min' aria-label="YouTube">
              <svg className=" text-zinc-400 w-11 h-11 hover:text-gray-400 cursor-pointer">
                <use xlinkHref="#icon-youtube"></use>
              </svg>
            </li>
            <li className='text-zinc-400 w-min' aria-label="Twitter">
              <svg className=" text-zinc-400  w-11 h-11 hover:text-gray-400 cursor-pointer">
                <use xlinkHref="#icon-twitter"></use>
              </svg>
            </li>
            <li className='text-zinc-400 w-min' aria-label="Facebook">
              <svg className=" text-zinc-400  w-11 h-11 hover:text-gray-400 cursor-pointer">
                <use xlinkHref="#icon-facebook"></use>
              </svg>    
            </li>
          </ul>
        </nav>


    </>
  );

      

       
   


}





