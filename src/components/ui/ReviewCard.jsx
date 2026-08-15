import { useState } from "react";

export default function ReviewCard({ review }){
  const rating = review.rating

  const index = [0,1,2,3,4];
  return(
    <article>
      <div className="flex gap-3 mb-2">
        <div className="flex flex-1 gap-1.5">
          {index.map(e => e < rating  ?   <svg className="w-6 h-6 text-amber-400" key={e} ><use href="/sprite-extra.svg#icon-star"></use> </svg> : <svg className="w-6 h-6 text-amber-300" key={e} ><use href="/sprite-extra.svg#icon-void-star"></use> </svg> )}
        </div>
            <span className="flex-1 text-zinc-100"> {review.reviewerName}</span>
            <span className="flex-1">{review.date.replace(/T.*$/, '').replace(/-/g, ' ')}</span>
        </div>
      <p>{review.comment}</p>
    </article>
  )
}