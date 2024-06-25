"use client";

import { useCallback, useEffect, useState } from "react";
import { useWindowResizeObserver } from "../useWindowResizeObserver";

export const useMediaQuery = (type: "max" | "min", width: number) => {
   const [isQuery, setIsQuery] = useState<boolean | null>(null);

   const updateState = useCallback(
      (currentWidth: number) => {
         switch (type) {
            case "max":
               setIsQuery(width >= currentWidth);
               break;
            case "min":
               setIsQuery(width <= currentWidth);
               break;
            default:
               break;
         }
      },
      [type, width]
   );

   useWindowResizeObserver({
      onResize: ({ winW }) => updateState(winW),
      debounce: 100,
      dependencies: [],
   });

   useEffect(() => updateState(window.innerWidth), [updateState]);

   return isQuery;
};
