"use client";

import { forwardRef, useRef, useLayoutEffect, useCallback } from "react";
import gsap from "gsap";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { useFrame } from "../../hooks/useFrame";

export type InfinityLoopProps = {
   active?: boolean;
   /** Negative values will result in the opposite direction. default : `1` */
   speed?: number | React.RefObject<number>;
} & React.HTMLAttributes<HTMLDivElement>;

export const InfinityLoop = forwardRef<HTMLDivElement, InfinityLoopProps>(
   ({ active = false, speed = 1, children, ...rest }, ref) => {
      const wrapperRef = useRef<HTMLDivElement>(null);
      const scrollerRef = useRef<HTMLDivElement>(null);

      const progress = useRef(0);
      const childWidth = useRef(0);

      // Update childWidth on mount and resize
      useLayoutEffect(() => {
         const updateWidth = () => {
            if (scrollerRef.current) {
               childWidth.current = scrollerRef.current.clientWidth / 2;
            }
         };
         updateWidth();
         window.addEventListener("resize", updateWidth);
         return () => window.removeEventListener("resize", updateWidth);
      }, []);

      useFrame(() => {
         if (!active) return;
         const scroller = scrollerRef.current;
         if (!scroller || childWidth.current === 0) return;

         const delta = gsap.ticker.deltaRatio() / 1000;
         const speedValue =
            typeof speed === "number" ? speed : speed?.current ?? 1;
         progress.current += delta * speedValue * childWidth.current;

         // Always wrap progress between 0 and childWidth
         progress.current =
            ((progress.current % childWidth.current) + childWidth.current) %
            childWidth.current;

         scroller.style.transform = `translateX(${-progress.current}px)`;
      });

      return (
         <div ref={ref} {...rest}>
            <div
               ref={wrapperRef}
               style={{
                  overflow: "hidden",
                  width: "100%",
               }}>
               <div
                  ref={scrollerRef}
                  style={{
                     display: "flex",
                     width: "fit-content",
                     willChange: "transform",
                  }}>
                  {children}
                  {children}
               </div>
            </div>
         </div>
      );
   }
);
InfinityLoop.displayName = "InfinityLoop";

export const InfinityLoopOnView = (
   props: Omit<InfinityLoopProps, "active">
) => {
   const { isIntersecting, ref } = useIntersectionObserver<HTMLDivElement>({
      once: false,
   });
   return <InfinityLoop ref={ref} {...props} active={isIntersecting} />;
};
