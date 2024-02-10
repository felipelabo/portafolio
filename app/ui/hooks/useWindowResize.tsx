"use client"
import { useEffect, useRef, useState } from "react"

const useWindowResize = (maxWindowSize: number) => {
  const isClient = typeof window === 'object';  // Verificar si estamos en el entorno del navegador
  const [isMobileSize, setIsMobileSize] = useState(isClient && window.innerWidth <= maxWindowSize);
  const prevWidth = useRef(isClient ? window.innerWidth : 0);

  
  useEffect(() => {
    const handleResize = () => {
      const currWidth = isClient ? window.innerWidth : 0;
      if (currWidth <= maxWindowSize && prevWidth.current > maxWindowSize) {
        setIsMobileSize(true);
      } else if (currWidth > maxWindowSize && prevWidth.current <= maxWindowSize) {
        setIsMobileSize(false);
      }
      prevWidth.current = currWidth;
    };

    if (isClient) {
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [maxWindowSize, isClient]);

  return isMobileSize;
}

export default useWindowResize