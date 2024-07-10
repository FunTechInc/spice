"use client";

import { useCallback, useEffect } from "react";
import { useWindowResizeObserver } from "../useWindowResizeObserver";
import { funtechConsole } from "./utils/funtech";
import { fixViewportForSmall } from "./utils/fixViewportForSmall";

type UseStarterProps = {
   /** If set to true, `width=360` will be set in `meta[name="viewport"]` , default : `true` */
   isFixViewportForSmall?: boolean;
   /** If a string is set, it is concatenated with the default string. default : `false` */
   areYouFun?: boolean | string;
};

/**
 * When page rendering is complete, data-set `spice-rendered` to the body tag.
 */
export const useStarter = ({
   isFixViewportForSmall = true,
   areYouFun = false,
}: UseStarterProps = {}) => {
   const handleFixViewportForSmall = useCallback(
      (winW: number) => {
         if (isFixViewportForSmall) {
            fixViewportForSmall(winW);
         }
      },
      [isFixViewportForSmall]
   );

   useWindowResizeObserver({
      onResize: ({ winW }) => handleFixViewportForSmall(winW),
      debounce: 100,
      dependencies: [],
   });

   useEffect(() => {
      document.body.dataset.spiceRendered = "true";
      handleFixViewportForSmall(window.innerWidth);
      if (areYouFun && process.env.NODE_ENV !== "development") {
         funtechConsole(areYouFun);
      }
   }, [areYouFun, handleFixViewportForSmall]);
};
