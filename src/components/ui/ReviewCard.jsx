import { useState } from "react";

export default function ReviewCard({ review }){
  const rating = review.rating

  const index = [0,1,2,3,4];
  return(
    <article>
      <div className="flex gap-1.5">
          {index.map(e => e < rating  ?   <svg className="w-6 h-6 text-amber-400" key={e} ><use xlinkHref="#icon-star"></use> </svg> : <svg className="w-6 h-6 text-amber-300" key={e} ><use xlinkHref="#icon-void-star"></use> </svg> )}
          <div>
            <span> reviews</span>
          </div>
        </div>
      <p>{review.comment}</p>
    </article>
  )
}