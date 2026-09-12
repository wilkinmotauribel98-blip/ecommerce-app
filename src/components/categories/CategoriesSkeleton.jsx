import Skeleton from "@/components/ui/Skeleton";

export default function CategoriesSkeleton({ count = 12 }) {
  return (
    <section
      aria-label="Loading categories"
      className="grid mt-5 grid-cols-[repeat(auto-fill,minmax(150px,1fr))] grid-rows-3 md:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4"
    >
      {Array.from({ length: count }).map((_, i) => (
        <article
          key={i}
          className="bg-zinc-950 border border-zinc-800 rounded pb-2 flex flex-col"
        >
          <Skeleton className="w-full aspect-square rounded-none rounded-t" />
          <div className="flex flex-col gap-2 px-3 pt-2">
            <Skeleton className="h-5 w-3/4 rounded-lg" />
            <Skeleton className="h-4 w-1/2 rounded-lg" />
          </div>
        </article>
      ))}
    </section>
  );
}
