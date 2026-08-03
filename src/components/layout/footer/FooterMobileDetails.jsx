import { Detail } from '@/components/ui/Detail'
import { Link } from 'react-router-dom'

export default function FooterMobileDetails() {

  return (
    <>
      <Detail title="Shop" content={
        <ul aria-label="Shop Information">
          <li className='text-zinc-400' aria-label="All Products">
            <Link to="/products">All Products</Link>
          </li>
          <li className='text-zinc-400' aria-label="New Arrivals">
            <Link to="/new-arrivals">New Arrivals</Link>
          </li>
          <li className='text-zinc-400' aria-label="Best Sellers">
            <Link to="/best-sellers">Best Sellers</Link>
          </li>
          <li className='text-zinc-400' aria-label="Sale Items">
            <Link to="/sale-items">Sale Items</Link>
          </li>
        </ul>
      } />
      <Detail title="Customer Care" content={
        <ul aria-label="Customer Care Information">
          <li className='text-zinc-400' aria-label="Contact Us">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className='text-zinc-400' aria-label="Shipping & Delivery">
            <Link to="/shipping-delivery">Shipping & Delivery</Link>
          </li>
          <li className='text-zinc-400' aria-label="Returns & Refunds">
            <Link to="/returns-refunds">Returns & Refunds</Link>
          </li>
          <li className='text-zinc-400' aria-label="FAQs">
            <Link to="/faqs">FAQs</Link>
          </li>
        </ul>
      } />

      <Detail title="Company" content={
        <ul aria-label="Company Information" >
          <li className='text-zinc-400' aria-label="About us">
            <Link to="/about">About us</Link>
          </li>
          <li className='text-zinc-400' aria-label="Careers">
            <Link to="/careers">Careers</Link>
          </li>
          <li className='text-zinc-400' aria-label="Press">
            <Link to="/press">Press</Link>
          </li>
          <li className='text-zinc-400' aria-label="Sustainability">
            <Link to="/sustainability">Sustainability</Link>
          </li>
        </ul>
      } />

       <nav className='flex flex-col gap-2 border-b border-zinc-700 mb-2 pb-5' aria-label="Social Media Navigation" name="footer-social">
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





