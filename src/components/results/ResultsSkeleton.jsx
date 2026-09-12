import Skeleton from "@/components/ui/Skeleton";

export default function ResultsSkeleton({ count = 8 }) {
  return (
    <>
      <Skeleton className="h-7 w-48 rounded-lg mt-2" />
      <section
        aria-label="Loading search results"
        className="grid mt-7 w-full grid-cols-[repeat(auto-fill,minmax(150px,1fr))] grid-rows-3 md:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-5"
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
    </>
  );
}
