"use client";

import gsap from "gsap";
import { useIsomorphicLayoutEffect } from "../useIsomorphicLayoutEffect";
import { useRef } from "react";

/**
 * Reference to r3f's useMutableCallback
 */
function useMutableCallback<T>(fn: T) {
   const ref = useRef<T>(fn);
   useIsomorphicLayoutEffect(() => void (ref.current = fn), [fn]);
   return ref;
}

/**
 * Add callbacks to `gsap.ticker`. Automatically `remove` on unmounting.
 */
export const useFrame = (
   callback: gsap.TickerCallback,
   once?: boolean | undefined,
   prioritize?: boolean | undefined
) => {
   const ref = useMutableCallback(callback);
   useIsomorphicLayoutEffect(() => {
      const ticker: gsap.TickerCallback = (...args) => ref.current(...args);
      gsap.ticker.add(ticker, once, prioritize);
      return () => gsap.ticker.remove(ticker);
   }, [once, prioritize]);
};
