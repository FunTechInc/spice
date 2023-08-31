import { useCallback, useEffect } from "react";
import { useWindowResizeObserver } from "../useWindowResizeObserver";
import { resizeReload } from "./utils/resizeReload";
import { funtechConsole } from "./utils/funtech";
import { fixViewportForSmall } from "./utils/fixViewportForSmall";

interface IUseStarter {
   reloadThresholds?: number[];
   isFixViewportForSmall?: boolean;
   areYouFun?: boolean;
}

/**
 * When page rendering is complete, data-set "spice-rendered" to the body tag.
 * @param reloadThresholds number[] Reload when crossing this threshold
 * @param isFixViewportForSmall boolean If set to true, "width=360" will be set in "meta[name="viewport"]"
 */
export const useStarter = ({
   reloadThresholds,
   isFixViewportForSmall = true,
   areYouFun = false,
}: IUseStarter) => {
   const fixViewportForSmallContoller = useCallback(
      (winW: number) => {
         if (isFixViewportForSmall) {
            fixViewportForSmall(winW);
         }
      },
      [isFixViewportForSmall]
   );

   useWindowResizeObserver({
      callback({ initWinW, winW }) {
         if (reloadThresholds) {
            reloadThresholds.forEach((threshold) => {
               resizeReload({
                  initWinW,
                  winW,
                  threshold: threshold,
               });
            });
         }
         fixViewportForSmallContoller(winW);
      },
      debounce: 100,
      dependencies: [],
   });

   useEffect(() => {
      // rendering is completed, set the data
      document.body.dataset.spiceRendered = "true";
      fixViewportForSmallContoller(window.innerWidth);
      // FunTech console log
      if (areYouFun && process.env.NODE_ENV !== "development") {
         funtechConsole();
      }
   }, [areYouFun, fixViewportForSmallContoller]);
};
