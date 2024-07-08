"use client";

import { useState } from "react";
import { useIsomorphicLayoutEffect } from "../useIsomorphicLayoutEffect";

type mobileOSType = "iOS" | "Android" | undefined;
type RenderingEngine =
   | "Gecko"
   | "WebKit"
   | "Presto"
   | "Trident"
   | "EdgeHTML"
   | "Blink"
   | undefined;

const detectMobileOS = (ua: string): mobileOSType => {
   if (/\b(iPad|iPhone|iPod)\b/.test(ua)) return "iOS";
   if (/\bAndroid\b/i.test(ua)) return "Android";
   return undefined;
};

const detectRenderingEngine = (ua: string): RenderingEngine => {
   if (/Gecko\/\d+/i.test(ua) && !/like Gecko/i.test(ua)) return "Gecko";
   if (/AppleWebKit\/\d+/i.test(ua) && /like Gecko/i.test(ua)) return "WebKit";
   if (/Opera\/\d+/i.test(ua)) return "Presto";
   if (/Trident\/\d+/i.test(ua)) return "Trident";
   if (/Edge\/\d+/i.test(ua)) return "EdgeHTML";
   if (/Chrome\/\d+/i.test(ua)) return "Blink";
   return undefined;
};

type DeviceState = {
   /** `iOS` | `Android` | `undefined` */
   mobileOS: mobileOSType;
   /** `Gecko` | `WebKit` | `Presto` | `Trident` | `EdgeHTML` | `Blink` | `undefined` */
   renderingEngine: RenderingEngine;
   userAgent: string;
   testing: boolean | undefined;
};

export const useDeviceDetector = (
   testing?: (ua: string) => boolean
): DeviceState => {
   const [deviceState, setDeviceState] = useState<DeviceState>({
      mobileOS: undefined,
      renderingEngine: undefined,
      userAgent: "",
      testing: undefined,
   });

   useIsomorphicLayoutEffect(() => {
      const ua = navigator.userAgent;
      const mobileOS = detectMobileOS(ua);
      const renderingEngine = detectRenderingEngine(ua);

      setDeviceState({
         mobileOS,
         renderingEngine,
         userAgent: ua,
         testing: testing && testing(ua),
      });
   }, []);

   return deviceState;
};
