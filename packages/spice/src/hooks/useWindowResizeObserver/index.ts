import { useRef } from "react";
import { useIsomorphicLayoutEffect } from "../useIsomorphicLayoutEffect";

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
   useIsomorphicLayoutEffect(() => {
      initialWidth.current = window.innerWidth;
      window.addEventListener("resize", callbackEvent);
      return () => {
         window.removeEventListener("resize", callbackEvent);
         clearTimeout(timeoutID.current);
      };
   }, dependencies);
};
