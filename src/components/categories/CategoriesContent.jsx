import { categories } from "./const"
import CategoryCard from "./CategoryCard"
export default function CategoriesContent (){
  return(
    <section className="grid mt-5 grid-cols-[repeat(auto-fill,minmax(150px,1fr))] grid-rows-3 md:grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
      {categories.map(e => <CategoryCard key={e.category} category={e}/> )}
    </section>
  )
}