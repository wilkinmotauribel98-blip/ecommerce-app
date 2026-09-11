
export default function AverageRating({reviews, hidden}) {

  
  const review = reviews.reduce((acc, r)=> acc + r.rating, 0) / reviews.length
  const stars = Math.ceil(review);
  
  const index = [0,1,2,3,4];
  return(
    <div className="flex ">
          <div className="flex items-center">
            {index.map(e => e < stars  ?  <svg className="w-5 h-5 text-amber-400" key={e} ><use href="/ecommerce-app/sprite-extra.svg#icon-star"></use> </svg> : <svg className="w-4 h-4 text-amber-300" key={e} ><use href="/ecommerce-app/sprite-extra.svg#icon-void-star"></use> </svg> )}
          </div>
          <div>
            <span className="text-zinc-300">{review.toFixed(2)} ({Math.floor(Math.random() * (reviews.length * 100))} reviews)</span>
          </div>

        </div>
  )

}