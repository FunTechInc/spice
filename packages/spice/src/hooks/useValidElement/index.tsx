"use client";

import { useState, useEffect } from "react";

/**
 * When passing a reference to a parent component's Element to a child component, it cannot be referenced by the child component's `useLayoutEffect` due to the rendering order. The `useGSAP` uses `useLayoutEffect` and therefore gets the reference with `useValidElement`.
 */
export const useValidElement = <T extends Element>(
   ref: React.RefObject<T> | null | undefined
) => {
   const [element, setElement] = useState<T | null>(null);

   useEffect(() => {
      if (ref == null) return;
      if (ref.current) setElement(ref.current);
   }, [ref]);

   return element;
};