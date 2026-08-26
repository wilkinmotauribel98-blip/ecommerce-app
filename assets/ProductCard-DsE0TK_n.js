import{j as l}from"./index-MXTt6jy6.js";function m(e,a,n){return e?`https://wsrv.nl/?url=${encodeURIComponent(e)}&w=${a}&h=${n}&fit=cover&q=80`:""}function $({product:e,shopStyle:a,newProduct:n,bestSeller:i,newArrivals:s}){return l.jsxs("article",{onClick:()=>{a?window.location.href=`/category/${e==null?void 0:e.title.toLowerCase()}`:window.location.href=`/product/${e.id}/${e==null?void 0:e.title.toLowerCase().replace(/\s/g,"-")}`},className:`
        border border-zinc-800 rounded-2xl flex flex-col gap-1 cursor-pointer relative hover:scale-105
        ${s?"min-h-55  w-43 bg-linear-0 to-t from-black to-zinc-500":""}
        ${a?"h-57 max-w-50 lg:max-w-48 bg-black border-zinc-800 ":""}
        ${i?"h-58  ":""}
        `,"aria-label":`${a?`category: ${e==null?void 0:e.title.replace(/-/g," ")}`:e==null?void 0:e.title.replace(/-/g," ")} 
        ${a?`${e==null?void 0:e.products}+ products`:`$${e==null?void 0:e.price.toString().replace(/\..*/,"")}`}`,children:[n?l.jsx("span",{className:"rounded-4xl bg-emerald-800/50 0 w-min  px-2 mt-2  text-emerald-500 ml-3",children:"New"}):"",l.jsx("div",{className:`
        ${s?"absolute top-7 w-35 ml-3":""}
        ${a?" w-full max-w-45 mx-auto":""} 
        ${i?"w-full max-w-45 mx-auto -mt-10 ":""} 
        
        `,children:l.jsx("img",{src:m(e==null?void 0:e.images[0],280,280),alt:`${e==null?void 0:e.title}`,className:"object-cover  relative z-10"})}),a&&l.jsx("div",{className:"w-full h-20 inset-y-2/8 inset-x-0 absolute bg-radial-[at_50%_50%] from-emerald-700  to-transparent to-60%"}),l.jsxs("div",{className:"absolute bottom-3 w-full",children:[l.jsx("h3",{className:`text-white  p-0 ${a?"text-center capitalize w-full":"ml-3"}`,"aria-label":`${a?`category: ${e==null?void 0:e.title.replace(/-/g," ")}`:e==null?void 0:e.title.replace(/-/g," ")}`,children:e==null?void 0:e.title.replace(/-/g," ")}),l.jsxs("span",{className:`
            ${s?"text-zinc-400":""}
            ${a?"text-center ml-3  w-full text-zinc-400":"ml-3"}
            ${i?"text-emerald-500 flex gap-2":""}
            `,"aria-label":`${a?`${e==null?void 0:e.products}+ products`:`$${e==null?void 0:e.price.toString().replace(/\..*/,"")}`}`,children:[a?`${e==null?void 0:e.products}+ products`:"",s?`$${e==null?void 0:e.price.toString().replace(/\..*/,"")}`:"",i?`$${e==null?void 0:e.price}`:"",i?l.jsxs("span",{className:"text-zinc-400  flex gap-1.5 items-center","aria-label":`Rating ${e==null?void 0:e.rating}`,children:["Rating ",l.jsxs("svg",{className:"w-6 h-6 text-emerald-500",children:[l.jsx("use",{href:"/sprite-extra.svg#icon-star"})," "]})," ",e==null?void 0:e.rating]}):""]})]})]})}export{$ as P,m as o};
