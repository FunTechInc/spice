import { useIsomorphicLayoutEffect } from "../useIsomorphicLayoutEffect";

interface IUseIntersectionObserver {
   targetRef: React.RefObject<HTMLElement>;
   rootMargin?: string;
   threshold?: number;
   once: boolean;
   callback: {
      enter?: (target: Element) => void;
      leave?: (target: Element) => void;
   };
   dependencies?: any[];
}

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
   useIsomorphicLayoutEffect(() => {
      //return false if target is undifined
      const target = targetRef.current;
      if (!target) {
         return;
      }
      //set callback
      const callbackEvent = (
         entries: IntersectionObserverEntry[],
         observer: IntersectionObserver
      ) => {
         entries.forEach((entry) => {
            if (entry.isIntersecting && callback.enter) {
               callback.enter(entry.target);
               if (once) {
                  observer.unobserve(entry.target);
               }
            } else if (!entry.isIntersecting && callback.leave) {
               callback.leave(entry.target);
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
   }, dependencies);
};
