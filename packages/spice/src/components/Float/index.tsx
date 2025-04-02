"use client";

import { useFrame, useIntersectionObserver } from "../../client";
import gsap from "gsap";

export type FloatProps = {
   speed?: number;
   range?: number | string;
   ease?: (x: number) => number;
} & React.HTMLAttributes<HTMLDivElement>;

export const Float = ({
   speed = 1,
   range = "100px",
   ease = (x) => x,
   ...rest
}: FloatProps) => {
   const { ref, isIntersecting } = useIntersectionObserver<HTMLDivElement>();
   const unit =
      typeof range === "string" ? gsap.utils.getUnit(range) || "px" : "px";
   const rangeValue = parseFloat(range.toString()) || 0;
   useFrame((t) => {
      if (!isIntersecting) return;
      const y = (ease((Math.sin(t * speed) + 1) / 2) * 2 - 1) * rangeValue;
      ref.current!.style.transform = `translateY(${y}${unit})`;
   });
   return <div ref={ref} {...rest} />;
};
