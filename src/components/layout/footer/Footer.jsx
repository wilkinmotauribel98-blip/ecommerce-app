export default function Footer() {
  return (
    <footer className="w-full max-w-360 m-auto bg-black h-15 flex items-center justify-center p lg:relative mb-25 px-5 z-50">
      <p className="text-zinc-600 text-sm sm:text-lg lg:text-xl">© 2025 NIFLIX. All rights reserved.</p>
      <ul className="flex flex-col sm:flex-row gap-2 ml-auto sm:gap-4 lg:gap-6 text-sm sm:text-lg lg:text-xl text-zinc-600 ">
        <li className="text-zinc-600 hover:text-gray-400 cursor-pointer" aria-label="Privacy Policy">Privacy Policy</li>
        <li className="text-zinc-600 hover:text-gray-400 cursor-pointer" aria-label="Terms of Service">Terms of Service</li>
        <li className="text-zinc-600 hover:text-gray-400 cursor-pointer" aria-label="Contact Us">Contact Us</li>
      </ul>
    </footer>
  )
}