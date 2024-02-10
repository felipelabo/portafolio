import { useEffect, useRef, useState } from "react"

const useWindowResize = (maxWindowSize:number) => {
  const [isMobileSize, setIsMobileSize] = useState(window.innerWidth <= maxWindowSize)
  const prevWidth = useRef(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      const currWidth = window.innerWidth
      if (currWidth <= maxWindowSize && prevWidth.current > maxWindowSize){
        setIsMobileSize(true)
      } else if (currWidth > maxWindowSize && prevWidth.current <= maxWindowSize) {
        setIsMobileSize(false)
      }
      prevWidth.current = currWidth
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [maxWindowSize])

  return isMobileSize
}

export default useWindowResize