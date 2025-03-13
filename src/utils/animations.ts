
import { useEffect, useState, useRef, RefObject } from 'react';

// Custom hook to animate on scroll
export const useScrollAnimation = (threshold = 0.1): [RefObject<HTMLElement>, boolean] => {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentRef = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  return [ref, isVisible];
};

// Custom hook for parallax effect
export const useParallax = (speed = 0.5): [RefObject<HTMLElement>, number] => {
  const ref = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      
      const { top } = ref.current.getBoundingClientRect();
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      if (top < windowHeight && top > -ref.current.offsetHeight) {
        const newOffset = (top - windowHeight) * speed;
        setOffset(newOffset);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initialize on mount
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return [ref, offset];
};

// Custom hook for staggered animations
export const useStaggeredAnimation = (
  itemCount: number,
  delayIncrement = 0.1,
  baseDelay = 0.2
): string[] => {
  return Array.from({ length: itemCount }, (_, i) => {
    const delay = baseDelay + i * delayIncrement;
    return `animation-delay: ${delay}s;`;
  });
};

// Custom hook for smooth counter animation
export const useSmoothCounter = (
  end: number,
  start = 0,
  duration = 2000
): number => {
  const [count, setCount] = useState(start);
  
  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * (end - start) + start));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
    
    return () => {
      startTimestamp = null; // Reset on unmount
    };
  }, [end, start, duration]);
  
  return count;
};
