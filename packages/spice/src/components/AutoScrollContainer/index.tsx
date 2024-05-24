"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useIsIntersecting } from "../../hooks/useIsIntersecting";
import { useFrame } from "../../hooks/useFrame";

type AutoScrollContainerProps = {
   children: React.ReactNode;
   className?: string;
   style?: React.CSSProperties;
   isReverse?: boolean;
   speed?: number;
};

export const AutoScrollContainer = ({
   children,
   className,
   style = {},
   isReverse = false,
   speed = 1,
}: AutoScrollContainerProps) => {
   const wrapperRef = useRef<HTMLDivElement>(null);

   const firstChildRef = useRef<HTMLDivElement>(null);
   const secondChildRef = useRef<HTMLDivElement>(null);

   const isIntersecting = useIsIntersecting({
      targetRef: wrapperRef,
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
      progress.current += delta * speed * ratio;

      if (progress.current >= 1) {
         progress.current = 0;
      }

      if (isReverse) {
         firstChild.style.transform = `translateX(${progress.current * -100}%)`;
         secondChild.style.transform = `translateX(${
            100 - progress.current * 100
         }%)`;
      } else {
         firstChild.style.transform = `translateX(${progress.current * 100}%)`;
         secondChild.style.transform = `translateX(${
            progress.current * 100 - 200
         }%)`;
      }
   });

   return (
      <div
         ref={wrapperRef}
         className={className ? className : ""}
         style={{
            overflow: "hidden",
            ...style,
         }}>
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
