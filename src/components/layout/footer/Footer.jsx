import {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import FooterDesktopDetails from "./FooterDesktopDetails";
import FooterMobileDetails from "./FooterMobileDetails";

export default function Footer() {
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <footer className="w-full max-w-360 mb-25 bg-black  flex flex-col items-center justify-center m-auto z-50">
      <section className="flex flex-col md:flex-row  gap-5 px-3 w-full justify-between mb-5" aria-label="Footer Navigation Section">
        <article className="flex flex-col  " aria-label="Footer Navigation Links">
          <div className="flex items-center" aria-label="Footer Logo and Title">
            <svg className="w-10 h-10 flex" aria-label="Footer Logo">
              <use xlinkHref="#icon-logo"></use>
            </svg>
            <span className="text-white text-xl sm:text-xl lg:text-2xl" aria-label="Footer Navigation Title">NIFLIX</span>
          </div>
          <p className="text-zinc-400 text-sm sm:text-lg" aria-label="Footer Description">Beyond technology.</p>
          <p className="text-zinc-400 text-sm sm:text-lg" aria-label="Footer Tagline">Elevate your everyday</p>
        </article>
        {size >= 768 ? <FooterDesktopDetails /> : <FooterMobileDetails />}
      </section>

    <section className="flex flex-col md:flex-row gap-3 items-center w-full " aria-label="Footer Section">
      <small className="text-zinc-600 text-sm sm:text-lg lg:text-xl" aria-label="Copyright Notice">© 2025 NIFLIX. All rights reserved.</small>
      <ul className="flex items-center md:ml-auto md:pr-4 gap-4  lg:gap-6 text-sm sm:text-lg lg:text-xl text-zinc-600 ">
        <li className="text-zinc-600 hover:text-gray-400 cursor-pointer" aria-label="Privacy Policy">
          <Link to="/privacy-policy" aria-label="Navigate to Privacy Policy page">Privacy Policy</Link>
        </li>
        <li className="text-zinc-600 hover:text-gray-400 cursor-pointer border-x border-zinc-600 px-5" aria-label="Terms of Service">
          <Link to="/terms-of-service" aria-label="Navigate to Terms of Service page">Terms of Service</Link>
        </li>
        <li className="text-zinc-600 hover:text-gray-400 cursor-pointer" aria-label="Contact Us">
          <Link to="/contact-us" aria-label="Navigate to Contact Us page">Contact Us</Link>
        </li>
      </ul>
      </section>      
    </footer>
  )
}