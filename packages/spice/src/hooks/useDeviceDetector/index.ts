"use client";

import { useEffect, useState } from "react";

type DeviceType = "iOS" | "Android" | undefined;

export const useDeviceDetector = (): {
   device: DeviceType;
   isMobile: boolean;
} => {
   const [device, setDevice] = useState<DeviceType>(undefined);
   const isMobile = device === "iOS" || device === "Android";

   useEffect(() => {
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
