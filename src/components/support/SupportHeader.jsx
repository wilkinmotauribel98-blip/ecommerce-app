
export default function SupportHeader(){
  return(
    <header className="flex flex-col gap-2.5 max-w-160">
        <h1 className="text-emerald-300 text-lg">SUPPORT</h1>
        <span className="text-4xl text-white">Need a <strong className="text-emerald-300">hand?</strong></span>
        <p className="text-zinc-400 ">
          we're here to help you width your NIFLIX experience.<br></br>
          Find answers to your questions, track your orders, and get the support you need - fast.
        </p>
        <form action="">
          <div className="flex gap-3 mt-3 border border-zinc-600 bg-gray-700/50  text-zinc-400 py-1.5 px-3  rounded-xl ">
          <svg className={`w-4.5 h-4.5 text-zinc-300 mt-0.5`}>
            <use href="/ecommerce-app/sprite-core.svg#icon-search"/>
          </svg>
            <input type="search" placeholder="Search for help..." className="placeholder-zinc-400 w-full focus:outline-none"/>
          </div>
        </form>
    </header>
  )
}