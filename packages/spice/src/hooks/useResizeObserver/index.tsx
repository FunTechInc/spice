import { useRef, useEffect } from "react";

type UseResizeObserverProps = {
   targetRef: React.RefObject<HTMLElement>;
   callback: (entry: Element) => void;
   /** default:100 */
   debounce?: number;
   dependencies?: any[];
};

export const useResizeObserver = ({
   targetRef,
   callback,
   debounce = 100,
   dependencies = [],
}: UseResizeObserverProps) => {
   const timeoutID = useRef<NodeJS.Timeout | number>(0);
   const isInitialRender = useRef(true);

   useEffect(() => {
      const resizeObserver = new ResizeObserver((entries) => {
         clearTimeout(timeoutID.current);
         timeoutID.current = setTimeout(() => {
            if (isInitialRender.current) {
               isInitialRender.current = false;
               return;
            }
            callback(entries[0].target);
         }, debounce);
      });
      const targetElm = targetRef.current;
      if (!targetElm) {
         return;
      }
      resizeObserver.observe(targetElm);
      return () => {
         resizeObserver.unobserve(targetElm);
         clearTimeout(timeoutID.current);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, dependencies);
};
