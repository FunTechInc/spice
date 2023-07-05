import { useIsomorphicLayoutEffect } from "../useIsomorphicLayoutEffect";

interface IRaf {
   callback: null | (() => void);
   isPlay: boolean;
   id: number;
}
type TPlay = "play" | "pause";

export const useAnimationFrame = (fps: number) => {
   /*===============================================
	handling FPS
	===============================================*/
   if (fps > 60) {
      fps = 60;
   }
   const interval = Math.floor(1000 / fps);
   let previousTime = performance.now();
   const isWithOutFrames = (timestamp: number) => {
      const deltaTime = timestamp - previousTime;
      const isWithOut = deltaTime <= interval;
      if (!isWithOut) {
         previousTime = timestamp - (deltaTime % interval);
      }
      return isWithOut;
   };

   /*===============================================
	rAF
	===============================================*/
   const rAF: IRaf = {
      callback: null,
      isPlay: false,
      id: 0,
   };
   const animationFrameEvent = (timestamp: number) => {
      rAF.id = requestAnimationFrame(animationFrameEvent);
      if (isWithOutFrames(timestamp)) {
         return;
      }
      if (rAF.callback && rAF.isPlay) {
         rAF.callback();
      }
   };
   useIsomorphicLayoutEffect(() => {
      rAF.id = requestAnimationFrame(animationFrameEvent);
      return () => {
         //pause frame when compoentn clean up
         cancelAnimationFrame(rAF.id);
      };
   }, []);
   return (isPlay: TPlay, callback?: () => void) => {
      if (isPlay === "play") {
         if (!callback) {
            console.warn("Callback function is required when 'play'");
            return;
         }
         rAF.callback = callback;
         rAF.isPlay = true;
      } else if (isPlay === "pause") {
         rAF.isPlay = false;
      }
   };
};
