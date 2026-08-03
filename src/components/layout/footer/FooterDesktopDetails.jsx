

export default function FooterDesktopDetails() {
  return (
    <>
        <nav className="flex-1" name="footer-navigation" aria-label="Footer Navigation Links">
          <span className='text-zinc-200' aria-label="Shop">Shop</span>
          <ul>
            <li className='text-zinc-400' aria-label="All Products">All Products</li>
            <li className='text-zinc-400' aria-label="New Arrivals">New Arrivals</li>
            <li className='text-zinc-400' aria-label="Best Sellers">Best Sellers</li>
            <li className='text-zinc-400' aria-label="Categories">Categories</li>
          </ul>
        </nav>
        <nav className="flex-1" name="footer-customer-care" aria-label="Customer Care Links">
          <span className='text-zinc-200' aria-label="Customer Care">Customer Care</span>
          <ul>
            <li className='text-zinc-400' aria-label="Contact Us">Contact Us</li>
            <li className='text-zinc-400' aria-label="Shipping & Delivery">Shipping & Delivery</li>
            <li className='text-zinc-400' aria-label="Returns & Refunds">Returns & Refunds</li>
            <li className='text-zinc-400' aria-label="FAQs">FAQs</li>
          </ul>
        </nav>
        <nav className="flex-1" name="footer-company" aria-label="Company Links">
          <span className='text-zinc-200' aria-label="Company">Company</span>
          <ul>
            <li className='text-zinc-400' aria-label="About us">About us</li>
            <li className='text-zinc-400' aria-label="Careers">Careers</li>
            <li className='text-zinc-400' aria-label="Press">Press</li>
            <li className='text-zinc-400' aria-label="Sustainability">Sustainability</li>
          </ul>
        </nav>

        <nav className="flex-1 " name="footer-social" aria-label="Social Media Links">
          <h3 className='text-zinc-200' aria-label="Follow us">Follow us</h3>
          <ul className='flex gap-4' aria-label="Social Media Links">
            <li className='text-zinc-400' aria-label="Instagram">
              <svg width="44" height="44" aria-hidden="true">
                <use href="#icon-instagram"></use>
              </svg>   
            </li>
            <li className='text-zinc-400' aria-label="YouTube">
              <svg className="w-11 h-11 text-zinc-400 hover:text-gray-400 cursor-pointer">
                <use xlinkHref="#icon-youtube"></use>
              </svg>
            </li>
            <li className='text-zinc-400' aria-label="Twitter">
              <svg className="w-11 h-11 text-zinc-400 hover:text-gray-400 cursor-pointer">
                <use xlinkHref="#icon-twitter"></use>
              </svg>
            </li>
            <li className='text-zinc-400' aria-label="Facebook">
              <svg className="w-11 h-11 text-zinc-400 hover:text-gray-400 cursor-pointer">
                <use xlinkHref="#icon-facebook"></use>
              </svg>    
            </li>
          </ul>
        </nav>
    </>
  )

}





