"use client";

import { useCallback, useEffect } from "react";
import { useWindowResizeObserver } from "../useWindowResizeObserver";
import { reloadOnResize } from "./utils/reloadOnResize";
import { funtechConsole } from "./utils/funtech";
import { fixViewportForSmall } from "./utils/fixViewportForSmall";

type UseStarterProps = {
   /** Reload when crossing this threshold */
   reloadThresholds?: number[];
   /** If set to true, `width=360` will be set in `meta[name="viewport"]` , default : `true` */
   isFixViewportForSmall?: boolean;
   /** default : `false` */
   areYouFun?: boolean;
};

/**
 * When page rendering is complete, data-set `spice-rendered` to the body tag.
 */
export const useStarter = ({
   reloadThresholds = [],
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
      onResize: ({ initWinW, winW }) => {
         if (reloadThresholds.length > 0) {
            reloadThresholds.forEach((threshold) =>
               reloadOnResize({
                  initWinW,
                  winW,
                  threshold: threshold,
               })
            );
         }
         handleFixViewportForSmall(winW);
      },
      debounce: 100,
      dependencies: [],
   });

   useEffect(() => {
      document.body.dataset.spiceRendered = "true";
      handleFixViewportForSmall(window.innerWidth);
      if (areYouFun && process.env.NODE_ENV !== "development") {
         funtechConsole();
      }
   }, [areYouFun, handleFixViewportForSmall]);
};
