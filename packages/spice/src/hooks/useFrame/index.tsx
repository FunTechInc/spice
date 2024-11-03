"use client";

import gsap from "gsap";
import { useIsomorphicLayoutEffect } from "../useIsomorphicLayoutEffect";
import { useRef } from "react";

/**
 * Add callbacks to `gsap.ticker`. Automatically `remove` on unmounting.
 * Reference to r3f's useFrame.
 */
export const useFrame = (
   callback: gsap.TickerCallback,
   once?: boolean | undefined,
   prioritize?: boolean | undefined
) => {
   const ref = useRef(callback);
   useIsomorphicLayoutEffect(() => void (ref.current = callback), [callback]);
   useIsomorphicLayoutEffect(() => {
      const ticker: gsap.TickerCallback = (...args) => ref.current(...args);
      gsap.ticker.add(ticker, once, prioritize);
      return () => gsap.ticker.remove(ticker);
   }, [once, prioritize]);
};
