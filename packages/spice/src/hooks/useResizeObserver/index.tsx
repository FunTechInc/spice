"use client";

import { useRef, useEffect } from "react";

type UseResizeObserverProps = {
   target?: React.RefObject<Element> | Element;
   onResize?: (entry: Element) => void;
   /** default:100 */
   debounce?: number;
};

export const useResizeObserver = (
   { target, onResize, debounce = 100 }: UseResizeObserverProps = {},
   dependencies?: React.DependencyList
) => {
   const ref = useRef(null);
   const timeoutID = useRef<NodeJS.Timeout | number>(0);
   const isInitialRender = useRef(true);

   useEffect(() => {
      const _target =
         target instanceof Element ? target : target?.current ?? ref.current;
      if (!_target) return;

      const resizeObserver = new ResizeObserver((entries) => {
         clearTimeout(timeoutID.current);
         timeoutID.current = setTimeout(() => {
            if (isInitialRender.current) {
               isInitialRender.current = false;
               return;
            }
            onResize?.(entries[0].target);
         }, debounce);
      });
      resizeObserver.observe(_target);
      return () => {
         resizeObserver.unobserve(_target);
         clearTimeout(timeoutID.current);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, dependencies);

   return ref;
};
