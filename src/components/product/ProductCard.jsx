import { Link } from "react-router-dom";
import PriceSection from "../ui/PriceSection";
import AverageRating from "../ui/AverageRating";
export function optimizedImg(src, w, h) {
  if (!src) return '';
  return `https://wsrv.nl/?url=${encodeURIComponent(src)}&w=${w}&h=${h}&fit=cover&q=80`;
}

const VARIANT_CONFIG = {
  shop: {
    articleClass: 'h-57 max-w-50 lg:max-w-48 bg-black border-zinc-800',
    imgWrapperClass: 'w-full max-w-45 mx-auto',
    titleClass: 'text-center capitalize w-full',
    textClass: 'text-center ml-3 w-full text-zinc-400',
    getText: (p) => `${p?.products}+ products`,
    showGlow: true,
  },
  bestSeller: {
    articleClass: 'h-58',
    imgWrapperClass: 'w-full max-w-45 mx-auto -mt-10',
    titleClass: 'ml-3',
    textClass: 'text-emerald-500 flex gap-2 ml-3',
    getText: (p) => `$${Math.floor(p?.price)}`,
    showRating: true,
  },
  newArrivals: {
    articleClass: 'min-h-55 w-43 bg-linear-0 to-t from-black to-zinc-500',
    imgWrapperClass: 'absolute top-7 w-35 ml-3',
    titleClass: 'ml-3',
    textClass: 'text-zinc-400 ml-3',
    getText: (p) => `$${Math.floor(p?.price)}`,
  },
  allProducts:{
    articleClass: 'relative w-full py-7  h-115',
    imgWrapperClass: 'flex 1',
    titleClass: '',
    textClass: 'text-zinc-400 ml-3',
    getText: (p) => `$${Math.floor(p?.price)}`,
  },
  default: {
    articleClass: '',
    imgWrapperClass: '',
    titleClass: 'ml-3',
    textClass: 'ml-3',
    getText: (p) => `$${Math.floor(p?.price)}`,
  }
};

export default function ProductCard({ product, variant = 'default', isNew }) {
  const config = VARIANT_CONFIG[variant];
  const displayText =  config.getText(product);
  
  return (
    <Link to={variant === 'shop'
      ? `/ecommerce-app/category/${product?.title.toLowerCase()}`
      : `/ecommerce-app/product/${product?.id}/${product?.title.toLowerCase().replace(/\s/g, '-')}`
    }>
      <article className={`border border-zinc-800 rounded-2xl flex flex-col gap-1 cursor-pointer relative hover:scale-105 ${config.articleClass}`}>
        {isNew && (
          <span className="rounded-4xl bg-emerald-800/50 w-min px-2 mt-2 text-emerald-500 ml-3">New</span>
        )}

        <div className={config.imgWrapperClass}>
          <img src={optimizedImg(product?.images[0], 280, 280)} alt={product?.title} className="object-cover relative z-10" />
        </div>

        {config.showGlow && (
          <div className="w-full h-20 inset-y-2/8 inset-x-0 absolute bg-radial-[at_50%_50%] from-emerald-700 to-transparent to-60%" />
        )}

        <div className={`${variant === 'allProducts' ? 'w-fit flex flex-col pl-3 gap-1 flex-1' : 'absolute bottom-3 w-full'} `}>
          <h3 className={`text-white p-0 m-0 ${config.titleClass}`}>
            {product?.title.replace(/-/g, ' ')}
          </h3>
          { variant === 'allProducts' &&
            <>
              <span className="absolute top-3  left-4 bg-emerald-700 text-emerald-300  rounded-full px-2">{product.category.replace(/-/g, ' ')}</span>
              <span className="text-xl text-zinc-500">{product.brand}</span>
              <AverageRating reviews={product.reviews}/>
              <PriceSection product={product} />
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
    </Link>
  );
}