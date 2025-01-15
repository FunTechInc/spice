"use client";

import { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useIsomorphicLayoutEffect } from "../../hooks/useIsomorphicLayoutEffect";

export type ParallaxProps = {
   y?: number | string;
   scroller?: gsap.DOMTarget;
   scrub?: number | boolean;
} & React.HTMLAttributes<HTMLDivElement>;

const multiplyValue = (value: number | string, multiplier: number) => {
   if (typeof value === "number") return value * multiplier;
   const unit = gsap.utils.getUnit(value) || "";
   return (parseFloat(value) || 0) * multiplier + unit;
};

export const Parallax = ({
   y = "8%",
   scroller,
   scrub = 1,
   ...rest
}: ParallaxProps) => {
   const ref = useRef(null);

   const context = useRef(gsap.context(() => {}));

   useIsomorphicLayoutEffect(() => {
      gsap.registerPlugin(ScrollTrigger);
      context.current.add(() => {
         gsap.fromTo(
            ref.current,
            { y: y },
            {
               y: multiplyValue(y, -1),
               scrollTrigger: {
                  trigger: ref.current,
                  scroller,
                  start: "top bottom",
                  end: "bottom top",
                  scrub,
               },
            }
         );
      });
      return () => context.current.revert();
   }, [scroller]);

   return <div ref={ref} {...rest} />;
};
