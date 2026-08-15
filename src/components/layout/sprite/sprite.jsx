// src/components/Sprite.jsx
export default function Sprite() {
// ✅ Objeto JS normal: key: value
const svgProps = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
}
  return (
    <svg 
    xmlns="http://www.w3.org/2000/svg" 
    style={{ display: 'none' }}
    aria-hidden="true"
    focusable="false" 
    
    >
      <symbol   
        id="icon-search"  
        viewBox="0 0 24 24"  
        {...svgProps}
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </symbol>

      <symbol xmlns="http://www.w3.org/2000/svg" 
        id="icon-home"
         
        viewBox="0 -960 960 960" 
        
        fill="#9f9fa9 ">
      <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z"/>
      </symbol>

      <symbol 
        id="icon-shop" 
        viewBox="0 -960 960 960"
        
        fill="#9f9fa9 "
      >
      <path d="m380-240 280-180-280-180v360ZM160-120q-33 0-56.5-23.5T80-200v-520h240v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h240v520q0 33-23.5 56.5T800-120H160Zm0-80h640v-440H160v440Zm240-440h160v-80H400v80Z"/>
      </symbol>

      <symbol 
        id="icon-grid" 
        viewBox="0 0 24 24"
        {...svgProps}
      >
        <circle cx="7" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.8"/>
        <circle cx="17" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.8"/>
        <circle cx="7" cy="17" r="2.5" stroke="currentColor" strokeWidth="1.8"/>
        <circle cx="17" cy="17" r="2.5" stroke="currentColor" strokeWidth="1.8"/>
      </symbol>

      <symbol 
        id="icon-user" 
        viewBox="0 0 24 24" 
      {...svgProps}
      >
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </symbol>


      <symbol 
        id="icon-cart" 
        viewBox="0 0 24 24" 
      {...svgProps}
      >
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </symbol>


      <symbol 
        id="icon-heart" 
        viewBox="0 0 24 24" 
      {...svgProps}
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </symbol>


      <symbol 
        id="icon-menu" 
        viewBox="0 0 24 24" 
      {...svgProps}
      >
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="3" y1="18" x2="21" y2="18" />
      </symbol>


      <symbol 
        id="icon-close" 
        viewBox="0 0 24 24" 
      {...svgProps}
      >
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </symbol>


      <symbol 
        id="icon-chevron-down" 
        viewBox="0 0 24 24" 
      {...svgProps}
      >
        <polyline points="6 9 12 15 18 9" />
      </symbol>


      <symbol 
        id="icon-logo" 
        viewBox="0 0 32 32" 
        fill="none"
      >
        <circle cx="12" cy="16" r="7" stroke="#10b981" strokeWidth="2"></circle>
        <circle cx="20" cy="16" r="7" stroke="#10b981" strokeWidth="2"></circle>
      </symbol>

      <symbol 
        id="icon-star"
        viewBox="0 -960 960 960" 
        fill="currentColor">
      <path d="m275.93-189.58 54.8-228.57L149.7-571.61l237.07-20.62L480-807.69l93.42 216.46 236.88 19.62-181.04 153.46 54.98 228.57-204.16-121.35-204.15 121.35Z"/>
      </symbol>



      <symbol 
        id="icon-arrow-back"  
        viewBox="0 -960 960 960" 
        width="24px" 
        fill="#e3e3e3"
      >
        <path  d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/>
      </symbol>


      <symbol 
        id="chevron-right"  
        viewBox="0 -960 960 960"  
        fill="currentColor"
      >
        <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/>
      </symbol>


      <symbol 
        id="chevron-left"  
        viewBox="0 -960 960 960" 
        fill="currentColor"
      >
        <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"/>
      </symbol>


        <symbol 
        id="icon-void-star"
        xmlns="http://www.w3.org/2000/svg" 
        height="24px" 
        viewBox="0 -960 960 960"
        width="24px" fill="#e3e3e3"><path d="m354-287 126-76 126 77-33-144 111-96-146-13-58-136-58 135-146 13 111 97-33 143ZM233-120l65-281L80-590l288-25 112-265 112 265 288 25-218 189 65 281-247-149-247 149Zm247-350Z"/>
        </symbol>

      <symbol
        id="audio-icon"
        viewBox="0 0 48 48"
    {...svgProps}
      >
        <path d="M9 22V19a15 15 0 0 1 30 0v3" />
        <rect x="6" y="22" width="8" height="14" rx="4" />
        <rect x="34" y="22" width="8" height="14" rx="4" />
      </symbol>


      <symbol
        id="computers-icon"
        viewBox="0 0 48 48"
        {...svgProps}
      >
        <rect x="9" y="10" width="30" height="20" rx="2" />
        <path d="M6 34h36" />
        <path d="M21 30h6" />
      </symbol>


      <symbol
        id="smartphones-icon"
        viewBox="0 0 48 48"
    {...svgProps}
    >
      <rect x="14" y="6" width="20" height="36" rx="4" />
      <path d="M21 11h6" />
      <path d="M22.5 37h3" />
      </symbol>


      <symbol
        id="wearables-icon"
        viewBox="0 0 48 48"
    {...svgProps}
      >
        <path d="M18 10h12a2 2 0 0 1 2 2v4h-16v-4a2 2 0 0 1 2-2z" />
        <path d="M18 32h12a2 2 0 0 0 2 2v4h-16v-4a2 2 0 0 0 2-2z" transform="translate(0,0)" />
        <path d="M16 32v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4" />
        <rect x="14" y="16" width="20" height="16" rx="4" />
        <path d="M21 24h6" />
        <path d="M34 21v6a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2z" />
      </symbol>


      <symbol
        id="accessories-icon"
        viewBox="0 0 48 48"
    {...svgProps}
      >
        <path d="M18 16v-3a6 6 0 0 1 12 0v3" />
        <rect x="10" y="16" width="28" height="22" rx="4" />
        <path d="M21 26h6" />
      </symbol>

      <symbol
           viewBox="0 0 24 24"
           id="icon-premium-quality"
           fill="none"
           stroke="currentColor"
           strokeWidth="1.5"
           strokeLinecap="round"
           strokeLinejoin="round"
           >
        <path d="M12 2L4.5 5v6c0 5.5 3.5 9.7 7.5 11 4-1.3 7.5-5.5 7.5-11V5L12 2z"/>
        <path d="M8.5 12.5l2.5 2.5L16 10"/>
      </symbol>

      <symbol 
           viewBox="0 0 24 24"
           fill="none"
           stroke="currentColor"
           strokeWidth="1.5"
           strokeLinecap="round"
           strokeLinejoin="round"
           id="icon-free-shipping"
           >
            <path d="M3 13h4"/>
            <path d="M1 17h6"/>
            <path d="M5 9h2"/>
            <path d="M7 6h8v9H7z"/>
            <path d="M15 9h4l2 3v3h-6"/>
            <circle cx="9" cy="18" r="2"/>
            <circle cx="18" cy="18" r="2"/>
      </symbol>


      <symbol xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 24 24"
           fill="none"
           stroke="currentColor"
           strokeWidth="1.5"
           strokeLinecap="round"
           strokeLinejoin="round"
           id="icon-easy-returns"
          >
          <path d="M20 12a8 8 0 0 1-14 5.5"/>
          <polyline points="4 20 4 14 10 14"/>
          <path d="M4 12A8 8 0 0 1 20 6.5"/>
          <polyline points="20 4 20 10 14 10"/>
      </symbol>

      <symbol 
           viewBox="0 0 24 24"
           fill="none"
           stroke="currentColor"
           strokeWidth="1.5"
           strokeLinecap="round"
           strokeLinejoin="round"
           id='icon-customer-support'
          >
        <path d="M4 12a8 8 0 0 1 16 0"/>
        <rect x="2" y="11" width="3" height="7" rx="1.5"/>
        <rect x="19" y="11" width="3" height="7" rx="1.5"/>
        <path d="M21 18c0 2.5-2 4-4.5 4H14"/>
        <circle cx="12" cy="22" r="1"/>

      </symbol>
      <symbol
        id="icon-instagram"  
        viewBox="0 0 3364.7 3364.7"
      ><defs><radialGradient id="0" cx="217.76" cy="3290.99" r="4271.92" gradientUnits="userSpaceOnUse"><stop offset=".09" stopColor="#fa8f21"/><stop offset=".78" stopColor="#d82d7e"/></radialGradient><radialGradient id="1" cx="2330.61" cy="3182.95" r="3759.33" gradientUnits="userSpaceOnUse"><stop offset=".64" stopColor="#8c3aaa" stopOpacity="0"/><stop offset="1" stopColor="#8c3aaa"/></radialGradient></defs>
      <path d="M853.2,3352.8c-200.1-9.1-308.8-42.4-381.1-70.6-95.8-37.3-164.1-81.7-236-153.5S119.7,2988.6,82.6,2892.8c-28.2-72.3-61.5-181-70.6-381.1C2,2295.4,0,2230.5,0,1682.5s2.2-612.8,11.9-829.3C21,653.1,54.5,544.6,82.5,472.1,119.8,376.3,164.3,308,236,236c71.8-71.8,140.1-116.4,236-153.5C544.3,54.3,653,21,853.1,11.9,1069.5,2,1134.5,0,1682.3,0c548,0,612.8,2.2,829.3,11.9,200.1,9.1,308.6,42.6,381.1,70.6,95.8,37.1,164.1,81.7,236,153.5s116.2,140.2,153.5,236c28.2,72.3,61.5,181,70.6,381.1,9.9,216.5,11.9,281.3,11.9,829.3,0,547.8-2,612.8-11.9,829.3-9.1,200.1-42.6,308.8-70.6,381.1-37.3,95.8-81.7,164.1-153.5,235.9s-140.2,116.2-236,153.5c-72.3,28.2-181,61.5-381.1,70.6-216.3,9.9-281.3,11.9-829.3,11.9-547.8,0-612.8-1.9-829.1-11.9" fill="url(#0)"/><path d="M853.2,3352.8c-200.1-9.1-308.8-42.4-381.1-70.6-95.8-37.3-164.1-81.7-236-153.5S119.7,2988.6,82.6,2892.8c-28.2-72.3-61.5-181-70.6-381.1C2,2295.4,0,2230.5,0,1682.5s2.2-612.8,11.9-829.3C21,653.1,54.5,544.6,82.5,472.1,119.8,376.3,164.3,308,236,236c71.8-71.8,140.1-116.4,236-153.5C544.3,54.3,653,21,853.1,11.9,1069.5,2,1134.5,0,1682.3,0c548,0,612.8,2.2,829.3,11.9,200.1,9.1,308.6,42.6,381.1,70.6,95.8,37.1,164.1,81.7,236,153.5s116.2,140.2,153.5,236c28.2,72.3,61.5,181,70.6,381.1,9.9,216.5,11.9,281.3,11.9,829.3,0,547.8-2,612.8-11.9,829.3-9.1,200.1-42.6,308.8-70.6,381.1-37.3,95.8-81.7,164.1-153.5,235.9s-140.2,116.2-236,153.5c-72.3,28.2-181,61.5-381.1,70.6-216.3,9.9-281.3,11.9-829.3,11.9-547.8,0-612.8-1.9-829.1-11.9" fill="url(#1)"/><path d="M1269.25,1689.52c0-230.11,186.49-416.7,416.6-416.7s416.7,186.59,416.7,416.7-186.59,416.7-416.7,416.7-416.6-186.59-416.6-416.7m-225.26,0c0,354.5,287.36,641.86,641.86,641.86s641.86-287.36,641.86-641.86-287.36-641.86-641.86-641.86S1044,1335,1044,1689.52m1159.13-667.31a150,150,0,1,0,150.06-149.94h-0.06a150.07,150.07,0,0,0-150,149.94M1180.85,2707c-121.87-5.55-188.11-25.85-232.13-43-58.36-22.72-100-49.78-143.78-93.5s-70.88-85.32-93.5-143.68c-17.16-44-37.46-110.26-43-232.13-6.06-131.76-7.27-171.34-7.27-505.15s1.31-373.28,7.27-505.15c5.55-121.87,26-188,43-232.13,22.72-58.36,49.78-100,93.5-143.78s85.32-70.88,143.78-93.5c44-17.16,110.26-37.46,232.13-43,131.76-6.06,171.34-7.27,505-7.27S2059.13,666,2191,672c121.87,5.55,188,26,232.13,43,58.36,22.62,100,49.78,143.78,93.5s70.78,85.42,93.5,143.78c17.16,44,37.46,110.26,43,232.13,6.06,131.87,7.27,171.34,7.27,505.15s-1.21,373.28-7.27,505.15c-5.55,121.87-25.95,188.11-43,232.13-22.72,58.36-49.78,100-93.5,143.68s-85.42,70.78-143.78,93.5c-44,17.16-110.26,37.46-232.13,43-131.76,6.06-171.34,7.27-505.15,7.27s-373.28-1.21-505-7.27M1170.5,447.09c-133.07,6.06-224,27.16-303.41,58.06-82.19,31.91-151.86,74.72-221.43,144.18S533.39,788.47,501.48,870.76c-30.9,79.46-52,170.34-58.06,303.41-6.16,133.28-7.57,175.89-7.57,515.35s1.41,382.07,7.57,515.35c6.06,133.08,27.16,223.95,58.06,303.41,31.91,82.19,74.62,152,144.18,221.43s139.14,112.18,221.43,144.18c79.56,30.9,170.34,52,303.41,58.06,133.35,6.06,175.89,7.57,515.35,7.57s382.07-1.41,515.35-7.57c133.08-6.06,223.95-27.16,303.41-58.06,82.19-32,151.86-74.72,221.43-144.18s112.18-139.24,144.18-221.43c30.9-79.46,52.1-170.34,58.06-303.41,6.06-133.38,7.47-175.89,7.47-515.35s-1.41-382.07-7.47-515.35c-6.06-133.08-27.16-224-58.06-303.41-32-82.19-74.72-151.86-144.18-221.43S2586.8,537.06,2504.71,505.15c-79.56-30.9-170.44-52.1-303.41-58.06C2068,441,2025.41,439.52,1686,439.52s-382.1,1.41-515.45,7.57" fill="#ffffff"/>
      </symbol>

      <symbol 
          id="icon-twitter"
           width="44"
           height="44"
           viewBox="0 0 24 24"
           fill="#FFFFFF">
        <path d="M18.901 2H21l-4.59 5.248L22 22h-4.406l-3.45-4.508L10.2 22H8.1l4.91-5.612L2 2h4.518l3.117 4.092L13.4 2h5.5zM17.36 20h1.22L5.96 4H4.66z"/>
      </symbol>


      <symbol 
          id="icon-youtube" 
          width="44"
          height="44"
          viewBox="0 0 24 24">
        <path
          fill="#FF0000"
          d="M22 12s0-3.5-.45-5.18a2.8 2.8 0 0 0-1.97-1.97C17.9 4.4 12 4.4 12 4.4s-5.9 0-7.58.45A2.8 2.8 0 0 0 2.45 6.82C2 8.5 2 12 2 12s0 3.5.45 5.18a2.8 2.8 0 0 0 1.97 1.97C6.1 19.6 12 19.6 12 19.6s5.9 0 7.58-.45a2.8 2.8 0 0 0 1.97-1.97C22 15.5 22 12 22 12z"
        />

        <path
          fill="#FFFFFF"
          d="M10 9l5 3-5 3z"
        />
      </symbol>


      <symbol
       id="icon-facebook"
       width="44"
       height="44"
       viewBox="0 0 24 24"
       fill="#1877F2">
      
      <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.87.24-1.46 1.49-1.46H17V4.95c-.33-.04-1.47-.14-2.8-.14-2.77 0-4.67 1.69-4.67 4.8V11H7v3h2.53v8h3.97z"/>
    
      </symbol>










    </svg>

    
  );
}
