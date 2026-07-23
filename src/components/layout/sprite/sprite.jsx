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
    <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
      <symbol   
        id="icon-search"  
        viewBox="0 0 24 24"  
        {...svgProps}
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
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
        fill="#e3e3e3"
      >
        <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z"/>
      </symbol>


      <symbol 
        id="chevron-left"  
        viewBox="0 -960 960 960" 
        fill="#e3e3e3"
      >
        <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z"/>
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

    </svg>

    
  );
}
