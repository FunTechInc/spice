import { useState } from "react";
import { useWindowResizeObserver } from "../useWindowResizeObserver";
import { useIsomorphicLayoutEffect } from "../useIsomorphicLayoutEffect";

interface IUseMediaQuery {
   type: "max" | "min";
   width: number;
}

export const useMediaQuery = ({ type, width }: IUseMediaQuery) => {
   const [isQuery, setIsQuery] = useState<boolean | null>(null);
   const updateState = (currentWidth: number) => {
      switch (type) {
         case "max":
            setIsQuery(width <= currentWidth);
            break;
         case "min":
            setIsQuery(width >= currentWidth);
            break;
         default:
            break;
      }
   };
   useWindowResizeObserver({
      callback: ({ winW }) => {
         updateState(winW);
      },
      debounce: 100,
      dependencies: [],
   });
   useIsomorphicLayoutEffect(() => {
      updateState(window.innerWidth);
   }, []);

   return isQuery;
};
