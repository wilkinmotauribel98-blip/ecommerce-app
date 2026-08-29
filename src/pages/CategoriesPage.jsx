import BreadCrumbSection from "../sections/BreadCrumbSection"
import CategoriesContent from "../components/categories/CategoriesContent"
import { recolector } from "../components/categories/const"
export default function CategoriesPage(){
  recolector()
  return(
    <main className="max-w-360 m-auto mb-30 w-[95%] ">
      <BreadCrumbSection title={'Categories'} cart={true}/>
      <h1 className="text-white text-4xl  my-2">Categories</h1>
      <p className="text-zinc-400">Explore our wide range of products.</p>
      <CategoriesContent/>
    </main>
  )
}