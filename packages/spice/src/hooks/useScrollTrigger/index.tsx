"use client";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useCallback, useRef, useState } from "react";
import { useIsomorphicLayoutEffect } from "../useIsomorphicLayoutEffect";

type ReactiveState = "isActive" | "direction";

const isReactive = (frag: ReactiveState[] | undefined, key: ReactiveState) =>
   Boolean(frag?.includes(key));

export const useScrollTrigger = (
   vars: ScrollTrigger.StaticVars,
   {
      reactive = [],
      dependencies = [],
   }: {
      reactive?: ReactiveState[];
      dependencies?: React.DependencyList;
   } = {}
) => {
   const [isActive, setIsActive] = useState(false);
   const [direction, setDirection] = useState<number | false>(false);

   const scrollTrigger = useRef<globalThis.ScrollTrigger>();

   const lerpP = useRef<number | null>(null);
   const lerpProgress = useCallback(
      (alpha: number, precision: number = 4, threshold: number = 1e-3) => {
         if (!scrollTrigger.current) return 0;

         precision = Math.max(precision, 0);

         const { progress } = scrollTrigger.current;
         if (lerpP.current === null) lerpP.current = progress;

         lerpP.current = gsap.utils.interpolate(lerpP.current, progress, alpha);

         const factor = Math.pow(10, precision);
         lerpP.current = Math.round(lerpP.current * factor) / factor;

         if (lerpP.current < threshold) return 0;
         if (1 - lerpP.current < threshold) return 1;

         return lerpP.current;
      },
      []
   );

   useIsomorphicLayoutEffect(() => {
      const { onUpdate, onToggle, trigger, ...rest } = vars;
      if (!trigger) return;
      gsap.registerPlugin(ScrollTrigger);
      const _scrollTrigger = ScrollTrigger.create({
         ...rest,
         trigger,
         onToggle: (self) => {
            onToggle?.(self);
            if (isReactive(reactive, "isActive")) setIsActive(self.isActive);
         },
         onUpdate: (self) => {
            scrollTrigger.current = self;
            onUpdate?.(self);
            if (isReactive(reactive, "direction")) setDirection(self.direction);
         },
      });
      return () => _scrollTrigger.kill();
   }, dependencies);

   return {
      isActive,
      direction,
      lerpProgress,
      scrollTrigger,
   };
};
