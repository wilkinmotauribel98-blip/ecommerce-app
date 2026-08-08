import {Link} from "react-router-dom"

export function Button({title, href}) {
  return (
    <button 
      onClick={() => {
        window.location.href = href;
      }}
      className="bg-emerald-500 py-3 w-fit px-2  text-gray-300 sm:px-10 hover:opacity-50 cursor-pointer sm:mt-0 mb-10 "
      aria-label={`Button for ${title}`}
    >{title}</button>
  )
}
