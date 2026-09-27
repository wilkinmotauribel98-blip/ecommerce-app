export default function Item({item}) {

  return(
    <article className="flex gap-2 items-center border-t border-gray-800">
      <img src={item.image} alt={item.title} className="w-20 h-30  sm:w-30 object-cover rounded"/>
      <div className="flex flex-col gap-1">
        <h3 className="text-lg">{item.title}</h3>
        <p className="text-zinc-400 capitalize">{item.category.replace(/-/g, ' ')}</p>
        <p className="text-zinc-400">Quantity: {item.quantity}</p>
      </div>
      <p className="text-zinc-400 ml-auto w-fit"> ${item.price}</p>
    </article>
  )
}