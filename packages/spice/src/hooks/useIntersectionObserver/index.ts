import { useEffect } from "react";

type UseIntersectionObserverProps = {
   targetRef: React.RefObject<HTMLElement>;
   callback: {
      onEnter?: (entry: IntersectionObserverEntry) => void;
      onLeave?: (entry: IntersectionObserverEntry) => void;
   };
   /** default:"0px" */
   rootMargin?: string;
   /** default:0 */
   threshold?: number | number[];
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
   const options: IntersectionObserverInit = {
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
               callback.onEnter(entry);
               if (once) {
                  observer.unobserve(entry.target);
               }
            } else if (!entry.isIntersecting && callback.onLeave) {
               callback.onLeave(entry);
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
