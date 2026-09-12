import Skeleton from "@/components/ui/Skeleton";

export default function YouMayAlsoLikeSkeleton({ count = 5 }) {
  return (
    <section
      aria-label="Loading recommendations"
      className="p-6 overflow-hidden bg-zinc-950 mb-15 flex flex-col gap-6 rounded-2xl min-w-0"
    >
      <h2 className="text-white text-2xl">You May Also Like</h2>
      <div className="flex gap-6 overflow-x-auto w-full scrollbar-none">
        {Array.from({ length: count }).map((_, i) => (
          <article
            key={i}
            className="lg:min-w-50 w-55 shrink-0 grow-0 bg-zinc-900 p-2 rounded-2xl flex flex-col gap-2"
          >
            <Skeleton className="w-full aspect-square rounded-xl" />
            <Skeleton className="h-5 w-3/4 rounded-lg" />
            <Skeleton className="h-5 w-1/3 rounded-lg" />
            <Skeleton className="h-5 w-1/2 rounded-lg" />
          </article>
        ))}
      </div>
    </section>
  );
}
