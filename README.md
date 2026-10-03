# NIFLIX — Ecommerce App

Frontend ecommerce demo built with React + Vite + Tailwind. Catalog, search, filters, persistent cart and simulated 4-step checkout. Data from `dummyjson.com`.

**Live demo:** https://wilkinmotauribel98-blip.github.io/ecommerce-app
**Repo:** https://github.com/wilkinmotauribel98-blip/ecommerce-app

> Portfolio project. No real backend, auth or payments — checkout is simulated.

## Screenshots

Add your captures here:

```text
docs/
  home.png
  shop.png
  product.png
  cart.png
  checkout.png
  mobile.gif
```

Then reference them:

![Home](docs/home.png)
![Shop](docs/shop.png)
![Product](docs/product.png)
![Cart](docs/cart.png)

Tip to capture: `npm run dev` → Chrome DevTools device toolbar → Screenshot / Record GIF with LICEcap or ScreenToGif.

## Stack

- React 18.3, React Router 6.26, Vite 5.4
- Tailwind CSS 4.3 + @tailwindcss/vite
- zustand 4.5 (cart, products, checkout with persist)
- react-hook-form 7.86, country-state-city 3.2
- framer-motion, headlessui, react-hot-toast, axios (installed, cleanup pending)

## Features

- Home: hero carousel, categories, new arrivals, best sellers, newsletter
- Shop `/ecommerce-app/shop` with pagination, Category detail with price/brand/rating filters
- Product detail: discount, stock, tabs, trust bar, recommendations
- Live search with suggestions (`/ecommerce-app/results/search?q=`)
- Cart: add / qty / remove, ITBIS 18% total, persisted in `localStorage`, drawer + page
- Checkout nested routes: `shipping → payment → review → done`, forms with react-hook-form validation
- Responsive: desktop Header + mobile BottomNavbar, skeletons, lazy routes with `Suspense`
- Image optimization via `wsrv.nl`, preconnect to `dummyjson.com`

## Quickstart

```bash
npm install
npm run dev      # http://localhost:5173/ecommerce-app
npm run build
npm run preview
```

No `.env` needed. API base is hardcoded to `https://dummyjson.com` in `src/api/products.js`.

## Architecture

```text
src/
  App.jsx            # routes + lazy pages, base /ecommerce-app
  main.jsx           # BrowserRouter + StrictMode
  api/products.js    # fetchProduct, fetchCategories, searchProducts
  hooks/
    useFetch.js      # generic fetch + AbortController
    useProducts.js   # home products (persist: products-storage)
    useCart.js       # cart {id -> product}, ITBIS 0.18 (persist: localStorage)
    useCheckout.js   # shipping + payment form (persist: sessionStorage)
  context/
    PageContext.jsx  # current page from location
  pages/             # Home, Shop, Category, Categories, Product, Results, Cart, Checkout, Support, NotFound
  components/
    cart/ checkout/ product/ category/ shop/ results/ support/
    layout/header + bottomNavbar + footer/
    ui/              # Button, Badge, Skeleton, Suggestions, etc.
  sections/          # Hero, BestSellers, NewArrivals, TrustBar, Newsletter, etc.
  utils/loading.js   # preloadImage, minDelay
```

Routing: all routes prefixed with `/ecommerce-app` (`vite.config.js: base`). Checkout uses nested `<Outlet/>`.

State: zustand + persist, no Redux/Context for cart. Forms: uncontrolled with react-hook-form.

## What I'd do in production

1. Real backend + Stripe (no PAN in storage — currently `useCheckout.js` persists card in `sessionStorage`, demo only)
2. Auth, orders, coupons, wishlist, admin
3. Route guards for checkout steps, ErrorBoundary + empty/error states
4. `eslint + prettier + vitest + Playwright`, `.env` for API URL, remove dead code (`store/cartStore.js`, `ProductDetail.jsx`, `CheckoutContent.jsx`)
5. SSR/prerender + JSON-LD, robots/sitemap, fix `og:image`, i18n, image `fetchPriority/lazy`
6. Fix known bugs: `Review.jsx` crash on non-card payment, `Clear All` filter, `CardForm` cvv restore, postal regex

## Known limitations

- `dummyjson.com` public data, total `194` hardcoded in `RenderAllProducts.jsx`
- No tests, no lint, Spanish/English mix in UI
- See Issues for cleanup list
