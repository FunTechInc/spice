import { useEffect, useState } from "react";

type DeviceType = "iOS" | "Android" | undefined;

export const useDeviceDetector = (): DeviceType => {
   const [device, setDevice] = useState<DeviceType>(undefined);

   useEffect(() => {
      const ua = navigator.userAgent;
      if (/iPhone|iPad|iPod/i.test(ua)) {
         setDevice("iOS");
      } else if (/Android/i.test(ua)) {
         setDevice("Android");
      }
   }, []);

   return device;
};
