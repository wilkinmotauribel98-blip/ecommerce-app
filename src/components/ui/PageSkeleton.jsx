import Skeleton from "./Skeleton";

export default function PageSkeleton() {
  return (
    <main
      aria-label="Loading page"
      className="max-w-360 m-auto w-[95%]"
    >
      <div className="flex gap-2 items-center w-full flex-wrap py-1 mt-5">
        <Skeleton className="h-4 w-10" />
        <Skeleton className="h-3 w-3" />
        <Skeleton className="h-4 w-16" />
        <Skeleton className="h-3 w-3" />
        <Skeleton className="h-4 w-28" />
      </div>
      <Skeleton className="h-9 w-64 rounded-lg mt-2" />
      <Skeleton className="h-5 w-96 max-w-full rounded-lg mt-2" />
      <div className="grid mt-7 w-full grid-cols-[repeat(auto-fill,minmax(150px,1fr))] md:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-5">
        {Array.from({ length: 8 }).map((_, i) => (
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
      </div>
    </main>
  );
}
