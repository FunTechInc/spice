"use client";

import { useEffect } from "react";

export type IntersectionObserverProps = {
   targetRef: React.RefObject<HTMLElement>;
   /** default : `0px` */
   rootMargin?: string;
   /** default : `0` */
   threshold?: number | number[];
   /** default : `false` */
   once?: boolean;
   dependencies?: any[];
};

export type UseIntersectionObserverProps = {
   onEnter?: (entry: IntersectionObserverEntry) => void;
   onLeave?: (entry: IntersectionObserverEntry) => void;
} & IntersectionObserverProps;

export const useIntersectionObserver = ({
   targetRef,
   rootMargin = "0px",
   threshold = 0,
   once = false,
   onEnter,
   onLeave,
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
            if (entry.isIntersecting && onEnter) {
               onEnter(entry);
               if (once) {
                  observer.unobserve(entry.target);
               }
            } else if (!entry.isIntersecting && onLeave) {
               onLeave(entry);
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
