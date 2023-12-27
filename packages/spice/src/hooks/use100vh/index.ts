import { MutableRefObject, RefObject, useEffect } from "react";
import { useIsTouchDevice } from "../useIsTouchDevice";
import { useWindowResizeObserver } from "../useWindowResizeObserver";

/**
 * For some mobile browsers, if the CSS is 100vh or 100lvh, the navigation bar may not be included, so by using window.screen.height, it will be displayed to fill the screen.
 */
export const use100vh = (ref: RefObject<HTMLElement>) => {
   const isTouch = useIsTouchDevice();

   useEffect(() => {
      if (!isTouch || !ref.current) {
         return;
      }
      ref.current.style.height = `${window.screen.height}px`;
   }, [isTouch, ref]);

   useWindowResizeObserver({
      callback: ({ winH }) => {
         if (!ref.current) {
            return;
         }
         if (isTouch) {
            ref.current.style.height = `${window.screen.height}px`;
         } else {
            ref.current.style.height = `${winH}px`;
         }
      },
      dependencies: [isTouch],
   });
};
