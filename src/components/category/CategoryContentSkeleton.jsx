import Skeleton from "@/components/ui/Skeleton";

export default function CategoryContentSkeleton({ count = 8 }) {
  return (
    <>
      <div
        aria-label="Loading category filters"
        className="hidden md:block border ml-5 border-zinc-800 py-2 px-15 rounded my-3 w-fit"
      >
        <Skeleton className="h-6 w-16 rounded-lg" />
      </div>
      <section className="flex flex-col relative md:flex-row gap-8 mb-20">
        <aside
          aria-hidden="true"
          className="hidden md:flex flex-col gap-5 shrink-0 w-60 rounded-2xl p-3"
        >
          <Skeleton className="h-7 w-2/3 rounded-lg" />
          <div className="flex flex-col gap-3">
            <Skeleton className="h-5 w-1/3 rounded-lg" />
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="h-5 w-3/4 rounded-lg" />
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <Skeleton className="h-5 w-1/3 rounded-lg" />
            {Array.from({ length: 3 }).map((_, i) => (
              <Skeleton key={`b-${i}`} className="h-5 w-2/3 rounded-lg" />
            ))}
          </div>
          <div className="flex flex-col gap-3">
            <Skeleton className="h-5 w-1/3 rounded-lg" />
            {Array.from({ length: 5 }).map((_, i) => (
              <Skeleton key={`r-${i}`} className="h-5 w-3/4 rounded-lg" />
            ))}
          </div>
        </aside>
        <section
          aria-label="Loading category products"
          className="grid w-full grid-cols-[repeat(auto-fill,minmax(150px,1fr))] grid-rows-3 md:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-5"
        >
          {Array.from({ length: count }).map((_, i) => (
            <article
              key={i}
              className="bg-zinc-900 p-2 rounded-2xl flex flex-col gap-2"
            >
              <Skeleton className="w-full aspect-square rounded-xl" />
              <Skeleton className="h-5 w-3/4 rounded-lg" />
              <Skeleton className="h-5 w-1/3 rounded-lg" />
              <Skeleton className="h-5 w-1/2 rounded-lg" />
            </article>
          ))}
        </section>
      </section>
    </>
  );
}
