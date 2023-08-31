import { useEffect } from "react";

interface IUseIntersectionObserver {
   targetRef: React.RefObject<HTMLElement>;
   rootMargin?: string;
   threshold?: number;
   once: boolean;
   callback: {
      onEnter?: (target: Element) => void;
      onLeave?: (target: Element) => void;
   };
   dependencies?: any[];
}

/**
 * @param callback onEnter,onLeave
 */
export const useIntersectionObserver = ({
   targetRef,
   rootMargin = "0px",
   threshold = 0,
   once,
   callback,
   dependencies = [],
}: IUseIntersectionObserver) => {
   const options = {
      rootMargin: rootMargin,
      threshold: threshold,
   };

   useEffect(() => {
      //return false if target is undifined
      const target = targetRef?.current;
      if (!target) {
         return;
      }
      //set callback
      const callbackEvent = (
         entries: IntersectionObserverEntry[],
         observer: IntersectionObserver
      ) => {
         entries.forEach((entry) => {
            if (entry.isIntersecting && callback.onEnter) {
               callback.onEnter(entry.target);
               if (once) {
                  observer.unobserve(entry.target);
               }
            } else if (!entry.isIntersecting && callback.onLeave) {
               callback.onLeave(entry.target);
            }
         });
      };
      //set observer
      const observer = new IntersectionObserver(callbackEvent, options);
      observer.observe(target);
      //clean up
      return () => {
         observer.unobserve(target);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, dependencies);
};
