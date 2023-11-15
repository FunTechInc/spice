import { useCallback, useEffect, useState } from "react";
import { useWindowResizeObserver } from "../useWindowResizeObserver";

type UseMediaQueryProps = {
   type: "max" | "min";
   width: number;
};

export const useMediaQuery = ({ type, width }: UseMediaQueryProps) => {
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
      callback: ({ winW }) => updateState(winW),
      debounce: 100,
      dependencies: [],
   });

   useEffect(() => updateState(window.innerWidth), [updateState]);

   return isQuery;
};
