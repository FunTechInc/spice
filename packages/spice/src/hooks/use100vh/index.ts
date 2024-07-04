import { RefObject } from "react";
import { useWindowResizeObserver } from "../useWindowResizeObserver";
import { useIsomorphicLayoutEffect } from "../useIsomorphicLayoutEffect";
import { useDeviceDetector } from "../useDeviceDetector";

/**
 * For some mobile browsers, if the CSS is 100vh or 100lvh, the navigation bar may not be included, so by using window.screen.height, it will be displayed to fill the screen.
 */
export const use100vh = (ref: RefObject<HTMLElement>) => {
   const { isMobile } = useDeviceDetector();

   useIsomorphicLayoutEffect(() => {
      if (!isMobile || !ref.current) {
         return;
      }
      ref.current.style.height = `${window.screen.height}px`;
   }, [isMobile, ref]);

   useWindowResizeObserver({
      onResize: ({ winH }) => {
         if (!ref.current) {
            return;
         }
         if (isMobile) {
            ref.current.style.height = `${window.screen.height}px`;
         } else {
            ref.current.style.height = `${winH}px`;
         }
      },
      dependencies: [isMobile],
   });
};
