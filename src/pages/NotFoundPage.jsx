import { Link } from "react-router-dom"
import { publicUrl } from "@/utils/publicUrl";
export default function NotFoundPage() {
    return(
      <main className="max-w-360 mb-60 w-[95%] m-auto justify-center items-center justify-items-center"> 
        <div className="w-200">
          <img src={publicUrl('404img.png')} alt="Illustration for the 404 page not found error" className="block z-50 w-full" />
        </div>
        <div className="flex absolute top-120 items-center flex-col gap-4">
        <span className="text-white text-5xl md:text-7xl">404</span>
        <h1 className="text-white text-4xl md:text-5xl">Page Not Found</h1>
        <p className="text-zinc-400 text-center">The page you're looking for doesn't exist or has been moved.<br></br>
        Let's get you back on track
        </p>
        <Link
        to={'/'}
        >
          <button className="bg-green-500 cursor-pointer rounded py-4 px-15 text-white">
          Back to Home
        </button>
        </Link>
        </div>
      </main>
    )
}