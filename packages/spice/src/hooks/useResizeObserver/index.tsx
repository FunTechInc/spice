import { useRef } from "react";
import { useIsomorphicLayoutEffect } from "../useIsomorphicLayoutEffect";

interface IUseResizeObserver {
   targetRef: React.RefObject<HTMLElement>;
   callback: (entry: Element) => void;
   debounce: number;
   dependencies?: any[];
}
export const useResizeObserver = ({
   targetRef,
   callback,
   debounce,
   dependencies = [],
}: IUseResizeObserver) => {
   const timeoutID = useRef<NodeJS.Timeout | number>(0);
   useIsomorphicLayoutEffect(() => {
      const targetElm = targetRef.current;
      if (!targetElm) {
         return;
      }
      let isFirst = true;
      const resizeObserver = new ResizeObserver((entries) => {
         clearTimeout(timeoutID.current);
         timeoutID.current = setTimeout(() => {
            if (isFirst) {
               isFirst = false;
               return;
            }
            callback(entries[0].target);
         }, debounce);
      });
      resizeObserver.observe(targetElm);
      return () => {
         resizeObserver.unobserve(targetElm);
      };
   }, dependencies);
};
