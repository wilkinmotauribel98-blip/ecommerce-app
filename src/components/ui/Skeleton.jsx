export default function Skeleton({ className }) {
  return (
    <div
      aria-hidden="true"
      className={`animate-pulse rounded-2xl bg-zinc-800/70 ${className ?? ''}`}
    />
  )
}