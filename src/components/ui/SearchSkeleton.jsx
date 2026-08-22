import Skeleton from "./Skeleton"

export default function SearchSkeleton({ count = 3 }) {
  return (
    <div className="absolute top-17 w-[70dvw] max-w-4xl select-none flex flex-col rounded-xl overflow-hidden bg-gray-500 z-20">
      {Array.from({ length: count }).map((_, i) => (
        <article
          key={i}
          className="flex items-center bg-zinc-700 border-b border-b-gray-500"
        >
          <Skeleton className="w-2/12 min-w-16 aspect-square rounded-none" />
          <div className="flex flex-col flex-1 py-3 pr-4 gap-2">
            <Skeleton className="h-5 w-3/4 rounded-lg" />
            <div className="flex items-center gap-2">
              <Skeleton className="h-4 w-16 rounded-lg" />
              <Skeleton className="h-1 w-1 rounded-full" />
              <Skeleton className="h-4 w-20 rounded-lg" />
            </div>
          </div>
          <div className="pr-4 mb-4">
            <Skeleton className="h-5 w-12 rounded-lg" />
          </div>
        </article>
      ))}
      <div className="p-2">
        <Skeleton className="h-6 w-48 rounded-lg" />
      </div>
    </div>
  )
}
