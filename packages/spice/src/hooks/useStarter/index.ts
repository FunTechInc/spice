"use client";

import { useCallback, useEffect } from "react";
import { useWindowResizeObserver } from "../useWindowResizeObserver";
import { resizeReload } from "./utils/resizeReload";
import { funtechConsole } from "./utils/funtech";
import { fixViewportForSmall } from "./utils/fixViewportForSmall";

type UseStarterProps = {
   /** Reload when crossing this threshold */
   reloadThresholds?: number[];
   /** If set to true, "width=360" will be set in "meta[name="viewport"]" , default : `true` */
   isFixViewportForSmall?: boolean;
   /** default : `false` */
   areYouFun?: boolean;
};

/**
 * When page rendering is complete, data-set "spice-rendered" to the body tag.
 */
export const useStarter = ({
   reloadThresholds,
   isFixViewportForSmall = true,
   areYouFun = false,
}: UseStarterProps = {}) => {
   const fixViewportForSmallContoller = useCallback(
      (winW: number) => {
         if (isFixViewportForSmall) {
            fixViewportForSmall(winW);
         }
      },
      [isFixViewportForSmall]
   );

   useWindowResizeObserver({
      onResize: ({ initWinW, winW }) => {
         if (reloadThresholds) {
            reloadThresholds.forEach((threshold) =>
               resizeReload({
                  initWinW,
                  winW,
                  threshold: threshold,
               })
            );
         }
         fixViewportForSmallContoller(winW);
      },
      debounce: 100,
      dependencies: [],
   });

   useEffect(() => {
      document.body.dataset.spiceRendered = "true";
      fixViewportForSmallContoller(window.innerWidth);
      if (areYouFun && process.env.NODE_ENV !== "development") {
         funtechConsole();
      }
   }, [areYouFun, fixViewportForSmallContoller]);
};
