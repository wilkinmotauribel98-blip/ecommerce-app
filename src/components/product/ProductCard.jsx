import { Link } from "react-router-dom";
import PriceSection from "../ui/PriceSection";
import AverageRating from "../ui/AverageRating";
import { useCart } from "../../hooks/useCart";
import { useNavigate } from "react-router-dom";
export function optimizedImg(src, w, h) {
  if (!src) return '';
  return `https://wsrv.nl/?url=${encodeURIComponent(src)}&w=${w}&h=${h}&fit=cover&q=80`;
}

const VARIANT_CONFIG = {
  shop: {
    articleClass: 'h-57 max-w-50  flex flex-col lg:max-w-48 bg-black border-zinc-800',
    imgWrapperClass: 'w-full max-w-45 mx-auto',
    titleClass: 'text-center capitalize w-full',
    textClass: 'text-center ml-3 w-full text-zinc-400',
    getText: (p) => `${p?.products}+ products`,
    showGlow: true,
  },
  bestSeller: {
    articleClass: 'h-fit flex flex-col',
    imgWrapperClass: 'w-full max-w-45 mx-auto mb-10 -mt-10',
    titleClass: 'ml-3',
    textClass: 'text-emerald-500 flex gap-2 ml-3',
    getText: (p) => `$${Math.floor(p?.price)}`,
    showRating: true,
  },
  newArrivals: {
    articleClass: ' flex flex-col min-h-55 w-43 bg-linear-0 to-t from-black to-zinc-500',
    imgWrapperClass: 'absolute top-7 w-35 ml-3',
    titleClass: 'ml-3',
    textClass: 'text-zinc-400 ml-3',
    
    getText: (p) => `$${Math.floor(p?.price)}`,
  },
  allProducts:{
    articleClass: 'relative w-full py-4  z-10 sm:flex-col flex ',
    imgWrapperClass: 'w-3/10 sm:w-full sm:pt-6 ',
    titleClass: '',
    textClass: 'text-zinc-400 ml-3',
    getText: (p) => `$${Math.floor(p?.price)}`,
  },
  default: {
    articleClass: 'flex flex-col',
    imgWrapperClass: '',
    titleClass: 'ml-3',
    textClass: 'ml-3',
    getText: (p) => `$${Math.floor(p?.price)}`,
  }
};


export default function ProductCard({ product, variant = 'default', isNew }) {
  const config = VARIANT_CONFIG[variant];
  const displayText =  config.getText(product);
  const navigate = useNavigate()
  const cart = useCart((state)=> state.cart)
  const setCart = useCart((state)=> state.setCart);
  const productQuantity = ()=>{
    if (cart[product.id]) {
    if(cart[product.id].quantity + 1 <= product.stock) return cart[product.id].quantity + 1
    return product.stock
    }
    return 1
  }
  const cartProduct = {
      image: product.images[0],
      title: product.title,
      price: (product.price - (product.price / 100 * product.discountPercentage)).toFixed(2),
      stock: product.stock,
      quantity: productQuantity(),
      category: product.category
    }

  
  return (
      <article className={`border border-zinc-800 rounded-2xl  gap-1 cursor-pointer relative hover:scale-105 ${config.articleClass}`}
        onClick={()=>{    
      variant === 'shop'
      ? navigate(`/ecommerce-app/category/${product?.title.toLowerCase()}`)
      : navigate(`/ecommerce-app/product/${product?.id}/${product?.title.toLowerCase().replace(/\s/g, '-')}`)
    
        }}
      >
        {isNew && (
          <span className="rounded-4xl bg-emerald-800/50 w-min px-2 mt-2 text-emerald-500 ml-3">New</span>
        )}

        <div className={config.imgWrapperClass}>
          <img src={optimizedImg(product?.images[0], 280, 280)} alt={product?.title} className={`w-full ${variant === 'allProducts' ? 'a' : 'relative z-10'} `} />
        </div>

        {config.showGlow && (
          <div className="w-full h-20 inset-y-2/8 inset-x-0 absolute bg-radial-[at_50%_50%] from-emerald-700 to-transparent to-60%" />
        )}

        <div className={`${variant === 'allProducts' ? 'w-full justify-end px-2 flex flex-col pl-3 gap-2 flex-1' : 'absolute bottom-3 w-full'} `}>
           { variant === 'allProducts' && <span className="sm:absolute w-fit top-3 capitalize left-4 bg-emerald-700 text-emerald-300  rounded-full px-2">{product.category.replace(/-/g, ' ')}</span> 
          }

          <h3 className={`text-white p-0 m-0 ${config.titleClass}`}>
            {product?.title.replace(/-/g, ' ')}
          </h3>
          { variant === 'allProducts' &&
            <>
              <span className="text-xl text-zinc-500">{product.brand}</span>
              <AverageRating reviews={product.reviews}/>
              <PriceSection product={product} />
              <button className="text-emerald-500 z-50 text-center border border-eme gap-2 w-full flex justify-center rounded py-1 bg-emerald-900  border-emerald-600"
              onClick={()=> setCart(cartProduct, product.id)}
              >
                <svg 
                className='w-6.5 h-6.5 cursor-pointer' 
                aria-label="Shopping cart">
                <use href="/ecommerce-app/sprite-core.svg#icon-cart"/>
                </svg>
                <span>Add to cart</span>
                </button>
            </>
          }
          <span className={config.textClass}>
            {variant !== 'allProducts' && displayText}
            {config.showRating && (
              <span className="text-zinc-400 flex ml-3 gap-1.5 items-center">
                Rating
                <svg className="w-6 h-6 text-emerald-500">
                  <use href="/ecommerce-app/sprite-extra.svg#icon-star" />
                </svg>
                {product?.rating}
              </span>
            )}
          </span>
        </div>
      </article>
    
  );
}