"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useIntersectionObserver } from "../../hooks/useIntersectionObserver";
import { useFrame } from "../../hooks/useFrame";

export type AutoScrollContainerProps = {
   /** Negative values will result in the opposite direction. default : `1` */
   speed?: number;
} & React.HTMLAttributes<HTMLDivElement>;

export const AutoScrollContainer = ({
   children,
   speed = 1,
   style,
   ...rest
}: AutoScrollContainerProps) => {
   const wrapperRef = useRef<HTMLDivElement>(null);

   const firstChildRef = useRef<HTMLDivElement>(null);
   const secondChildRef = useRef<HTMLDivElement>(null);

   const { isIntersecting } = useIntersectionObserver({
      target: wrapperRef,
      once: false,
   });

   const progress = useRef(0);

   useFrame(() => {
      if (!isIntersecting) {
         return;
      }

      const wrapper = wrapperRef.current;
      const firstChild = firstChildRef.current;
      const secondChild = secondChildRef.current;

      if (!wrapper || !firstChild || !secondChild) {
         return;
      }

      const delta = gsap.ticker.deltaRatio() / 1000;
      const ratio = wrapper.clientWidth / firstChild.clientWidth;
      progress.current += delta * Math.abs(speed) * ratio;

      if (progress.current >= 1) {
         progress.current = 0;
      }

      if (speed < 0) {
         const _progress = progress.current * -100;
         firstChild.style.transform = `translateX(${_progress}%)`;
         secondChild.style.transform = `translateX(${_progress}%)`;
      } else {
         const _progress = progress.current * 100;
         firstChild.style.transform = `translateX(${_progress}%)`;
         secondChild.style.transform = `translateX(${_progress - 200}%)`;
      }
   });

   return (
      <div
         ref={wrapperRef}
         style={{
            overflow: "hidden",
            ...(style || {}),
         }}
         {...rest}>
         <div
            style={{
               whiteSpace: "nowrap",
               display: "flex",
            }}>
            <div ref={firstChildRef}>{children}</div>
            <div ref={secondChildRef}>{children}</div>
         </div>
      </div>
   );
};
