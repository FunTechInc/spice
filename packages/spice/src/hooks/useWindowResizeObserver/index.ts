"use client";

import { useRef, useEffect, useCallback } from "react";

type UseWindowResizeObserverProps = {
   onResize: ({
      winW,
      winH,
      initWinW,
   }: {
      winW: number;
      winH: number;
      initWinW: number;
   }) => void;
   /** default:100 */
   debounce?: number;
   dependencies?: any[];
};

export const useWindowResizeObserver = ({
   onResize,
   debounce = 100,
   dependencies = [],
}: UseWindowResizeObserverProps) => {
   const initialWidth = useRef(0);
   const timeoutID = useRef<NodeJS.Timeout | number>(0);

   const callbackEvent = useCallback(() => {
      clearTimeout(timeoutID.current);
      timeoutID.current = setTimeout(() => {
         onResize({
            winW: window.innerWidth,
            winH: window.innerHeight,
            initWinW: initialWidth.current,
         });
      }, debounce);
   }, [onResize, debounce]);

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
