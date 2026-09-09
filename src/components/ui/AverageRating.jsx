
export default function AverageRating({reviews}) {

  
  const review = reviews.reduce((acc, r)=> acc + r.rating, 0) / reviews.length
  const stars = Math.ceil(review);
  
  const index = [0,1,2,3,4];
  return(
    <div className="flex gap-1.5">
          {index.map(e => e < stars  ?   <svg className="w-6 h-6 text-amber-400" key={e} ><use href="/ecommerce-app/sprite-extra.svg#icon-star"></use> </svg> : <svg className="w-6 h-6 text-amber-300" key={e} ><use href="/ecommerce-app/sprite-extra.svg#icon-void-star"></use> </svg> )}
          <div>
            <span className="text-zinc-300">{review.toFixed(2)} ({Math.floor(Math.random() * (reviews.length * 100))} reviews)</span>
          </div>
        </div>
  )

}