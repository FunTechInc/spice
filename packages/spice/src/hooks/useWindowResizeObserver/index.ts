"use client";

import { useRef, useCallback } from "react";
import { useIsomorphicLayoutEffect } from "../useIsomorphicLayoutEffect";

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

   useIsomorphicLayoutEffect(() => {
      initialWidth.current = window.innerWidth;
      window.addEventListener("resize", callbackEvent);
      return () => {
         window.removeEventListener("resize", callbackEvent);
         clearTimeout(timeoutID.current);
      };
   }, dependencies);
};
