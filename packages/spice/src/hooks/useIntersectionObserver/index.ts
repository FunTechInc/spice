"use client";

import { useEffect, useRef, useState } from "react";

export type IntersectionObserverProps = {
   targetRef?: React.RefObject<HTMLElement>;
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
}: UseIntersectionObserverProps = {}) => {
   const ref = useRef(null);
   const [isIntersecting, setIsIntersecting] = useState(false);

   useEffect(() => {
      const target = targetRef?.current ?? ref.current;
      if (!target) {
         return;
      }

      const callbackEvent = (
         entries: IntersectionObserverEntry[],
         observer: IntersectionObserver
      ) => {
         entries.forEach((entry) => {
            setIsIntersecting(entry.isIntersecting);
            if (entry.isIntersecting) {
               if (onEnter) onEnter(entry);
               if (once) observer.unobserve(entry.target);
            } else if (!entry.isIntersecting) {
               if (onLeave) onLeave(entry);
            }
         });
      };

      const observer = new IntersectionObserver(callbackEvent, {
         rootMargin,
         threshold,
      });
      observer.observe(target);

      return () => {
         observer.unobserve(target);
      };
   }, [
      ref,
      onEnter,
      onLeave,
      once,
      threshold,
      rootMargin,
      targetRef,
      // eslint-disable-next-line react-hooks/exhaustive-deps
      ...dependencies,
   ]);

   return { ref, isIntersecting };
};
