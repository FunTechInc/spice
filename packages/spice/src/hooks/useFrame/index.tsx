"use client";

import gsap from "gsap";
import { useEffect } from "react";

/**
 * Add callbacks to `gsap.ticker`. Automatically `remove` on unmounting.
 */
export const useFrame = (
   callback: gsap.TickerCallback,
   once?: boolean | undefined,
   prioritize?: boolean | undefined
) => {
   useEffect(() => {
      gsap.ticker.add(callback, once, prioritize);
      return () => gsap.ticker.remove(callback);
   }, [once, prioritize, callback]);
};
