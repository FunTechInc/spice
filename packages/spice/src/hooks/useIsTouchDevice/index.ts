"use client";

import { useCallback, useEffect, useState } from "react";
import { useWindowResizeObserver } from "../useWindowResizeObserver";

/**
 * @description It determines whether the device is a touch device or not. When the determination switches, the state is updated.
 */
export const useIsTouchDevice = () => {
   const [isTouchDevice, setIsTouchDevice] = useState<boolean | null>(null);

   const updateState = useCallback(() => {
      const touchEvent = window.ontouchstart;
      const touchPoints = navigator.maxTouchPoints;
      if (touchEvent !== undefined && 0 < touchPoints) {
         setIsTouchDevice(true);
      } else {
         setIsTouchDevice(false);
      }
   }, []);

   useWindowResizeObserver({
      onResize: () => updateState(),
      debounce: 100,
      dependencies: [],
   });

   useEffect(() => updateState(), [updateState]);

   return isTouchDevice;
};
