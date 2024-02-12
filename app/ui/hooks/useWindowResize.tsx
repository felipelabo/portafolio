"use client"
import { useEffect, useRef, useState } from "react"

const useWindowResize = (maxWindowSize: number) => {
  const isClient = typeof window === 'object';  // Verificar si estamos en el entorno del navegador
  const [isMobileSize, setIsMobileSize] = useState(false);
  const prevWidth = useRef(0);

  
  useEffect(() => {

    const handleResize = () => {
      
      const currWidth = isClient ? window.innerWidth : 0;
 
      if (prevWidth.current == 0){
        if (currWidth <= maxWindowSize) {
          setIsMobileSize(true)
        }else {
          setIsMobileSize(false)
        }        
      }

      if (currWidth <= maxWindowSize && prevWidth.current > maxWindowSize) {
        console.log('mobile')
        setIsMobileSize(true);
      } else if (currWidth > maxWindowSize && prevWidth.current <= maxWindowSize) {
        console.log('pc')
        setIsMobileSize(false);
      }else{
        console.log('No hace nada')
      }
      
      prevWidth.current = currWidth;
    };
    console.log('client',isClient)
    if (isClient) {
      handleResize()
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [maxWindowSize, isClient]);

  return isMobileSize;
}

export default useWindowResize