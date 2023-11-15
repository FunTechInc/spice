import { useEffect } from "react";

type UseIntersectionObserverProps = {
   targetRef: React.RefObject<HTMLElement>;
   callback: {
      onEnter?: (target: Element) => void;
      onLeave?: (target: Element) => void;
   };
   rootMargin?: string;
   threshold?: number;
   /** default:false */
   once?: boolean;
   dependencies?: any[];
};

export const useIntersectionObserver = ({
   targetRef,
   rootMargin = "0px",
   threshold = 0,
   once = false,
   callback,
   dependencies = [],
}: UseIntersectionObserverProps) => {
   const options = {
      rootMargin: rootMargin,
      threshold: threshold,
   };

   useEffect(() => {
      const target = targetRef?.current;
      if (!target) {
         return;
      }

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

      const observer = new IntersectionObserver(callbackEvent, options);
      observer.observe(target);

      return () => {
         observer.unobserve(target);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, dependencies);
};
