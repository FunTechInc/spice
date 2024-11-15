"use client";

import gsap from "gsap";
import { useIsomorphicLayoutEffect } from "../useIsomorphicLayoutEffect";
import { useRef } from "react";

/**
 * Add callbacks to `gsap.ticker`. Automatically `remove` on unmounting.
 */
export const useFrame = (
   callback: gsap.TickerCallback,
   once?: boolean | undefined,
   prioritize?: boolean | undefined
) => {
   const ref = useRef(callback);
   ref.current = callback;
   useIsomorphicLayoutEffect(() => {
      const ticker: gsap.TickerCallback = (...args) => ref.current(...args);
      gsap.ticker.add(ticker, once, prioritize);
      return () => gsap.ticker.remove(ticker);
   }, [once, prioritize]);
};
