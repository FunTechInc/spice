"use client";

import { useState } from "react";
import { useIsomorphicLayoutEffect } from "../useIsomorphicLayoutEffect";

type DeviceType = "iOS" | "Android" | undefined;

export const useDeviceDetector = (): {
   /** `iOS` | `Android` | `undefined` */
   device: DeviceType;
   /** whether the device is `iOS` || `Android` */
   isMobile: boolean;
} => {
   const [device, setDevice] = useState<DeviceType>(undefined);
   const isMobile = device === "iOS" || device === "Android";

   useIsomorphicLayoutEffect(() => {
      const ua = navigator.userAgent;
      if (/iPhone|iPad|iPod/i.test(ua)) {
         setDevice("iOS");
      } else if (/Android/i.test(ua)) {
         setDevice("Android");
      }
   }, []);

   return {
      device,
      isMobile,
   };
};
