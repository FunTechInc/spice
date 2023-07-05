import { useEffect } from "react";
import { useWindowResizeObserver } from "../useWindowResizeObserver";
import { resizeReload } from "./utils/resizeReload";
import { funtechConsole } from "./utils/funtech";
import { fixViewportForSmall } from "./utils/fixViewportForSmall";

interface IUseStarter {
   reloadThresholds?: number[];
   isFixViewportForSmall?: boolean;
   areYouFun?: boolean;
}

export const useStarter = ({
   reloadThresholds,
   isFixViewportForSmall = true,
   areYouFun = false,
}: IUseStarter) => {
   const fixViewportForSmallContoller = (winW: number) => {
      if (isFixViewportForSmall) {
         fixViewportForSmall(winW);
      }
   };

   useWindowResizeObserver({
      callback({ initWinW, winW }) {
         /*===============================================
			resizeReload
			===============================================*/
         if (reloadThresholds) {
            reloadThresholds.forEach((threshold) => {
               resizeReload({
                  initWinW,
                  winW,
                  threshold: threshold,
               });
            });
         }
         /*===============================================
			fixViewportForSmall
			===============================================*/
         fixViewportForSmallContoller(winW);
      },
      debounce: 100,
      dependencies: [],
   });

   useEffect(() => {
      /*===============================================
		rendering is completed, set the data
		===============================================*/
      document.body.dataset.spiceRendered = "true";
      /*===============================================
		fixViewportForSmall
		===============================================*/
      fixViewportForSmallContoller(window.innerWidth);
      /*===============================================
		FunTech console log
		===============================================*/
      if (areYouFun && process.env.NODE_ENV !== "development") {
         funtechConsole();
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);
};
