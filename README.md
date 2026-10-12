# NIFLIX — Tienda en línea (Ecommerce App)

Frontend de ecommerce construido con React + Vite + Tailwind. Catálogo, búsqueda en vivo, filtros, carrito persistente y checkout simulado en 4 pasos. Datos de `dummyjson.com`.

**Demo en vivo:** https://wilkinmotauribel98-blip.github.io/ecommerce-app
**Repositorio:** https://github.com/wilkinmotauribel98-blip/ecommerce-app

> Proyecto de portafolio. Sin backend real, autenticación ni pagos — el checkout es simulado.

## Capturas

![Inicio](docs/home.png)
![Tienda](docs/shop.png)
![Categorías](docs/categories.png)
![Categoría](docs/category.png)
![Búsqueda](docs/search.png)
![Producto](docs/product.png)
![Carrito](docs/cart.png)
![Checkout](docs/checkout.png)
![Pago](docs/payment.png)
![Revisión](docs/review.png)
![Confirmación](docs/done.png)
![Soporte](docs/support.png)

## Tecnologías

- React 18.3, React Router 6.26, Vite 5.4
- Tailwind CSS 4.3 + @tailwindcss/vite
- zustand 4.5 con persistencia (carrito, productos, checkout, búsqueda)
- react-hook-form 7.86, country-state-city 3.2, libphonenumber-js
- react-hot-toast, axios
- Imágenes optimizadas con `wsrv.nl` (helper centralizado `optimizedImg`)

## Funcionalidades

- Inicio: carrusel hero, accesos a categorías, novedades, más vendidos, newsletter
- Tienda `/ecommerce-app/shop` con paginación; página de Categorías con conteo de productos
- Detalle de categoría con filtros de precio/marca/calificación y botón `Clear All`
- Detalle de producto: descuento, stock, peso, dimensiones, pedido mínimo, cantidad, `Add to cart` y `Buy Now`, garantías, pestañas (Descripción/Especificaciones/Reseñas) y recomendaciones
- Búsqueda en vivo con sugerencias (`/ecommerce-app/results/search?q=`) e historial de búsquedas recientes persistido
- Carrito: agregar / cantidad / eliminar, drawer + página, ITBIS 18%, persistido en `localStorage`, productos relacionados
- Checkout con rutas anidadas: `shipping → payment → review → done`, formularios validados con react-hook-form, detección del tipo de tarjeta en vivo, número de pedido con botón para copiar
- Responsive: Header de escritorio + BottomNavbar móvil, skeletons, rutas lazy con `Suspense`
- Página de Soporte con buscador de ayuda, 6 temas y contacto 24/7

## Inicio rápido

```bash
npm install
npm run dev      # http://localhost:5173/ecommerce-app
npm run build
npm run preview
```

No se necesita `.env`. La URL de la API está fija en `https://dummyjson.com` dentro de `src/api/products.js`.

## Arquitectura

```text
src/
  App.jsx            # rutas + páginas lazy, base /ecommerce-app
  main.jsx           # BrowserRouter + StrictMode
  api/products.js    # fetchProduct, fetchCategories, searchProducts
  hooks/
    useFetch.js      # fetch genérico + AbortController
    useProducts.js   # productos del home (persist: products-storage)
    useCart.js       # carrito {id -> producto}, ITBIS 0.18 (persist: client-storage)
    useCheckout.js   # datos de envío + pago del checkout
    useSearchStore.js# historial de búsquedas (persist: search-storage)
  context/
    PageContext.jsx  # página actual según la ubicación
  pages/             # Home, Shop, Category, Categories, Product, Results, Cart, Checkout, Support, NotFound
  components/
    cart/ checkout/ product/ category/ shop/ results/ support/
    layout/header + bottomNavbar + footer/
    ui/              # Button, Badge, Skeleton, Suggestions, Icon, Sprite, etc.
  sections/          # Hero, BestSellers, NewArrivals, TrustBar, Newsletter, etc.
  utils/
    loading.js             # preloadImages, minDelay
    optimizedImg.js        # URLs optimizadas vía wsrv.nl
    getCardType.js         # detección de marca (visa, mastercard, amex…)
    detectCardTypeLive.js  # detección en vivo mientras se escribe
```

Rutas: todas empiezan con `/ecommerce-app` (`vite.config.js: base`). El checkout usa `<Outlet/>` anidado con redirección al paso `shipping`.

Estado: zustand + persist, sin Redux. Formularios con react-hook-form.

## Qué haría en producción

1. Backend real + Stripe (nunca guardar datos de tarjeta — hoy el checkout es solo demo)
2. Autenticación, pedidos, cupones, wishlist, panel admin
3. `ErrorBoundary` + estados vacíos/de error, guards completos entre pasos del checkout
4. `eslint + prettier + vitest + Playwright`, `.env` para la URL de la API, eliminar código muerto
5. SSR/prerender + JSON-LD, robots/sitemap, `loading="lazy"` en imágenes, i18n
6. Dividir el bundle principal (hoy supera los 500 kB que advierte Vite)

## Limitaciones conocidas

- Datos públicos de `dummyjson.com`, total `194` fijo en `RenderAllProducts.jsx`
- Sin tests ni linter; mezcla de español/inglés en la interfaz
