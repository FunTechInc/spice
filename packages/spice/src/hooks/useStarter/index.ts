import { useIsomorphicLayoutEffect } from "../useIsomorphicLayoutEffect";
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
         if (isFixViewportForSmall) {
            fixViewportForSmall(winW);
         }
      },
      debounce: 10,
      dependencies: [],
   });

   /*===============================================
	FunTech console log
	===============================================*/
   useIsomorphicLayoutEffect(() => {
      if (areYouFun) {
         funtechConsole();
      }
   }, []);
};
