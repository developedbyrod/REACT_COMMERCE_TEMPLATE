import { useEffect, useState } from "react";
// import { ScreenSize } from "../types";

export const getClientWidth = () => {
  const [screenSize, setScreenSize] = useState('desktop');

  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth;

      if(width <= 768){
        setScreenSize('mobile');
      }else if(width <= 1024){
        setScreenSize('tablet');
      }else{
        setScreenSize('desktop');
      }
    };
    window.addEventListener('resize', updateScreenSize);
    updateScreenSize();

    return () => window.removeEventListener('resize', updateScreenSize);
  }, [screenSize]);
  return screenSize;
}