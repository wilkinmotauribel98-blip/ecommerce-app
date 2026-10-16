import { Link } from "react-router-dom";


export default function ErrorState({title, message, onRetry, compact = false}){
   if (compact) {
    return (
      <div role="alert" className="flex  items-center justify-between gap-3 bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3">
        <p className="text-zinc-300 text-sm">{title}</p>
        {onRetry && (
          <button onClick={onRetry} className="text-emerald-400 border border-emerald-800 rounded px-3 py-1 text-sm cursor-pointer">
            Retry
          </button>
        )}
      </div>
    );
  }
  return (
    <div role="alert" className="flex mb-40 sm:mb-100  flex-col items-center text-center py-16 px-6">
      <h2 className="text-white text-xl font-medium mb-1">{title}</h2>
      <p className="text-zinc-400 text-md max-w-sm mb-5">{message}</p>
      <div className="flex gap-3">
        {onRetry && (
          <button onClick={onRetry} className="bg-emerald-600 text-white rounded px-5 py-2 text-sm cursor-pointer">
            Try again
          </button>
        )}
        <Link to="/shop" className="border border-zinc-600 text-white rounded px-5 py-2 text-sm">
          Back to shop
        </Link>
      </div>
    </div>
  );
}



