import { Slide } from "../../components/ui/Slide"
import { useProducts } from "../../hooks/useProducts"
import { useState, useRef, use } from "react";

export function Hero({ size }) {
  const products = useProducts((state) => state.products);
  const [slide, setSlide] = useState(1);
  const [transition, setTransition] = useState('transform .3s ease');
  const isTransitioning = useRef(false)
  const slideRef = useRef(slide);
  slideRef.current = slide;

  
  const prev = () => {
    if(isTransitioning.current) return
    isTransitioning.current = true;
    setSlide((s) => (s - 1 + 7) % 7);
  }
  const next = () => {
    if(isTransitioning.current) return
    isTransitioning.current = true;
    setSlide((s) => (s + 1) % 7);
  }

  const touchStart = useRef(0);
  const handleTouchStart = (e) => touchStart.current = e.touches[0].clientX;
  const handleTouchEnd = (e) => {
    const diff = touchStart.current - e.changedTouches[0].clientX;
    if (diff < -50) prev();
    if (diff > 50) next();
  };

  const handleTransitionEnd = () => {
    // solo nos interesa el snap-back cuando llegamos al clon del final
    if (slideRef.current === 6) {
      setTransition('transform 0s');
      setSlide(1);
    }
    
    isTransitioning.current = false
    if (slideRef.current === 0) {
      setTransition('transform 0s');
      setSlide(5);
    }
  
  };
  

  // después de que React vuelve a montar con transition 0s,
  // en el próximo frame reactivamos la transición normal
  const handleTransitionRestore = () => {
    if (transition === 'transform 0s') {
      requestAnimationFrame(() => setTransition('transform .3s ease'));
    }
  };
  handleTransitionRestore();

  return (
    <div
      className="overflow-hidden z-0 relative bg-black group"
      style={{ width: '100dvw' }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <svg className="h-15 w-15 z-100 left-0 absolute top-5/12 hidden group-hover:block" onClick={prev}>
        <use xlinkHref="#chevron-left"></use>
      </svg>

      <svg className="absolute z-100 h-15 w-15 right-0 top-5/12 hidden group-hover:block" onClick={next}>
        <use xlinkHref="#chevron-right"></use>
      </svg>

      <div
        className="flex w-max overflow-hidden z-0"
        style={{ transform: `translate(-${slide * 100}dvw)`, transition }}
        onTransitionEnd={handleTransitionEnd}
      >
        {products[4] && <Slide key="clone1" product={products[4]} />}
        {products.slice(0, 5).map((e) => <Slide key={e.id} product={e} />)}
        {products[0] && <Slide key="clone2" product={products[0]} />}
      </div>
      <div className="absolute  bottom-1  left-2/5 md:left-2/4 flex gap-2">
        {products.slice(0,5).map((e, index) =>  <div key={`dot${e.id}`} className={`w-2 h-2 rounded-full  ${index == slide -1 ? 'bg-emerald-400' : 'bg-gray-600'}`}></div> )}
      </div>
    </div>
  );
}