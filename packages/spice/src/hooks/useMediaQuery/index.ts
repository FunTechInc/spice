"use client";

import { useCallback, useEffect, useState } from "react";
import { useWindowResizeObserver } from "../useWindowResizeObserver";

export const useMediaQuery = (
   mediaQueryType: "max" | "min",
   breakpoint: number
) => {
   const [isRange, setIsRange] = useState<boolean | null>(null);

   const updateIsRange = useCallback(
      (currentWidth: number) => {
         switch (mediaQueryType) {
            case "max":
               setIsRange(breakpoint >= currentWidth);
               break;
            case "min":
               setIsRange(breakpoint <= currentWidth);
               break;
            default:
               break;
         }
      },
      [mediaQueryType, breakpoint]
   );

   useWindowResizeObserver({
      onResize: ({ winW }) => updateIsRange(winW),
      debounce: 100,
      dependencies: [updateIsRange],
   });

   useEffect(() => updateIsRange(window.innerWidth), [updateIsRange]);

   return isRange;
};
