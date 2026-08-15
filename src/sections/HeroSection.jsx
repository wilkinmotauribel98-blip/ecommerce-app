import { Slide } from "../components/ui/Slide"
import { useProducts } from "../hooks/useProducts"
import Skeleton from "../components/ui/Skeleton"
import { useState, useRef, useEffect } from "react";

export default function HeroSection() {
  const products = useProducts((state) => state.heroProducts);
  const loading = useProducts((state) => state.heroLoading);
  const [slide, setSlide] = useState(1);
  const [transition, setTransition] = useState('transform .2s ease');
  const [size, setSize ]= useState(window.innerWidth <= 1440 ? window.innerWidth : 1440);
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
    if (slideRef.current === 6) {
      setTransition('transform 0s');
      setSlide(1);
      return;
    }
    
    
    if (slideRef.current === 0) {
      setTransition('transform 0s');
      setSlide(5);
      return;
    }
    isTransitioning.current = false;
  };
  
  useEffect(() => {
    if (transition === 'transform 0s') {
      requestAnimationFrame(() => {
        setTransition('transform .2s ease')
        isTransitioning.current = false;
      });
    }
  }, [transition]);
  
  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth <= 1440 ? window.innerWidth : 1440);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  },[])

  if (loading || products.length === 0) {
    return (
      <section
        className="z-0 relative bg-black overflow-hidden"
        style={{ width: `${size}px` }}
      >
        <div className="flex items-center h-100">
          <div className="flex-1 px-4 sm:px-10 ml-4 sm:ml-10 flex flex-col gap-4">
            <Skeleton className="h-12 sm:h-16 lg:h-24 w-3/4" />
            <Skeleton className="h-4 sm:h-5 w-1/2" />
            <Skeleton className="h-4 sm:h-5 w-5/12" />
            <Skeleton className="h-10 w-48 sm:w-56" />
          </div>
          <Skeleton className="h-80 sm:h-96 w-1/2 mx-auto" />
        </div>
        <div className="flex gap-2 justify-center mt-4">
          <Skeleton className="w-2.5 h-2.5 rounded-full" />
          <Skeleton className="w-2.5 h-2.5 rounded-full" />
          <Skeleton className="w-2.5 h-2.5 rounded-full" />
        </div>
      </section>
    );
  }

  return (
    <section
      className=" z-0 relative bg-black group "
      style={{ width: `${size}px` }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >

    <button onClick={prev} aria-label="Go to prev slide" focus-visible="true"> 

      <svg 
        className="h-15 w-15 z-100 -left-1 text-zinc-300 absolute top-5/12 hidden group-hover:block" 
        >
        <use href="/sprite-core.svg#chevron-left"></use>
      </svg>
    </button>
      

      <button onClick={next} aria-label="Go to next slide" focus-visible="true">
        <svg className="absolute z-100 text-zinc-300 h-15 w-15 -right-1 top-5/12 hidden group-hover:block">
          <use href="/sprite-core.svg#chevron-right"></use>
        </svg>
      </button>

      <div
        className="flex w-max overflow-hidden z-0"
        style={{ transform: `translate(-${slide * size }px)`, transition }}
        onTransitionEnd={handleTransitionEnd}
      >
        <Slide key="start clone" product={products[4]} size={size} />
        {products.map((e) => <Slide key={e.id} product={e} size={size} />)}
        <Slide key="end clone" product={products[0]} size={size} />
      </div>
      <div 
        aria-label="Navegacion del carrusel"
        className=" flex gap-3 m-auto w-min">
        
        {products.map((e, index) => 
          <button 
            key={`dot${e.id}`}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-3.5 h-3.5 rounded-full cursor-pointer  ${index == slide - 1 || slide === 0 ? 'bg-emerald-400' : 'bg-gray-600'}`}
            onClick={()=> setSlide(index + 1)}>
          </button> 
          )}
      </div>
      
    </section>
  );
}