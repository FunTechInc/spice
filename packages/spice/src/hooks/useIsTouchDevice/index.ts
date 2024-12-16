"use client";

import { useState } from "react";
import { useIsomorphicLayoutEffect } from "../useIsomorphicLayoutEffect";

/**
 * @description It determines whether the device is a touch device or not. When the determination switches, the state is updated.
 */
export const useIsTouchDevice = () => {
   const [isTouchDevice, setIsTouchDevice] = useState<boolean | null>(null);

   useIsomorphicLayoutEffect(() => {
      setIsTouchDevice(
         window.ontouchstart !== undefined && 0 < navigator.maxTouchPoints
      );
   }, []);

   return isTouchDevice;
};
