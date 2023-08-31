import { useRef, useEffect } from "react";

interface IUseWindowResizeObserver {
   callback: ({
      winW,
      winH,
      initWinW,
   }: {
      winW: number;
      winH: number;
      initWinW: number;
   }) => void;
   debounce: number;
   dependencies?: any[];
}

/** 
 * @param callback ({
      winW,
      winH,
      initWinW,
   }: {
      winW: number;
      winH: number;
      initWinW: number;
   }) => void
	
	The callback receives the screen size after resizing and the initial screen width at the time of loading. This can be used when you want to create a branch to determine whether the screen has expanded compared to the loading point.
 */
export const useWindowResizeObserver = ({
   callback,
   debounce,
   dependencies = [],
}: IUseWindowResizeObserver) => {
   const initialWidth = useRef(0);
   const timeoutID = useRef<NodeJS.Timeout | number>(0);
   const callbackEvent = () => {
      clearTimeout(timeoutID.current);
      timeoutID.current = setTimeout(() => {
         callback({
            winW: window.innerWidth,
            winH: window.innerHeight,
            initWinW: initialWidth.current,
         });
      }, debounce);
   };
   useEffect(() => {
      initialWidth.current = window.innerWidth;
      window.addEventListener("resize", callbackEvent);
      return () => {
         window.removeEventListener("resize", callbackEvent);
         clearTimeout(timeoutID.current);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, dependencies);
};
