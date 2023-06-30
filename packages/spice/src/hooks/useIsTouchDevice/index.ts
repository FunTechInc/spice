import { useState } from "react";
import { useIsomorphicLayoutEffect } from "../useIsomorphicLayoutEffect";
import { useWindowResizeObserver } from "../useWindowResizeObserver";

export const useIsTouchDevice = () => {
   const [isTouchDevice, setIsTouchDevice] = useState<boolean | null>(null);
   const updateState = () => {
      const touchEvent = window.ontouchstart;
      const touchPoints = navigator.maxTouchPoints;
      if (touchEvent !== undefined && 0 < touchPoints) {
         setIsTouchDevice(true);
      } else {
         setIsTouchDevice(false);
      }
   };
   useWindowResizeObserver({
      callback() {
         updateState();
      },
      debounce: 100,
      dependencies: [],
   });
   useIsomorphicLayoutEffect(() => {
      updateState();
   }, []);
   return isTouchDevice;
};
