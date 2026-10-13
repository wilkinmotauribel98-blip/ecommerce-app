import { useNavigate } from "react-router-dom"

export function Button({title, href, slide}) {
  const navigate = useNavigate();
  return (
    <button 
      onClick={() => {
        navigate(href);
      }}
      className={`bg-emerald-400/80 py-3 w-fit px-2 rounded ${slide ? '' : 'flex-1'}  text-gray-300 sm:px-10 hover:opacity-50 cursor-pointer sm:mt-0`}
      aria-label={`Button for ${title}`}
    >{title}</button>
  )
}
