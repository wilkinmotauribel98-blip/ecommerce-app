import Skeleton from "@/components/ui/Skeleton";

export default function AllProductsSkeleton({ count = 8, pages = 9 }) {
  return (
    <section
      aria-label="Loading products"
      className="flex max-w-360 flex-col gap-10 w-[95%] m-auto mt-10"
    >
      <div className="grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] sm:grid-cols-[repeat(auto-fill,minmax(255px,1fr))] grid-rows-4 gap-5">
        {Array.from({ length: count }).map((_, i) => (
          <article
            key={i}
            className="border border-zinc-800 rounded-2xl overflow-hidden flex sm:flex-col"
          >
            <Skeleton className="w-3/10 sm:w-full aspect-square rounded-none" />
            <div className="flex-1 flex flex-col gap-2 p-3">
              <Skeleton className="h-5 w-24 rounded-full" />
              <Skeleton className="h-5 w-3/4 rounded-lg" />
              <Skeleton className="h-4 w-1/3 rounded-lg" />
              <Skeleton className="h-4 w-1/2 rounded-lg" />
              <Skeleton className="h-6 w-1/2 rounded-lg" />
              <Skeleton className="h-9 w-full rounded-lg" />
            </div>
          </article>
        ))}
      </div>
      <div className="flex gap-2 w-fit m-auto">
        {Array.from({ length: pages }).map((_, i) => (
          <Skeleton key={i} className="w-9 h-9 rounded" />
        ))}
      </div>
    </section>
  );
}
