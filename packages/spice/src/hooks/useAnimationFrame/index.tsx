import { useCallback, useEffect, useRef } from "react";

type TCallbackEvent = (timestamp: number) => void;
interface IRaf {
   callback: null | TCallbackEvent;
   isPlay: boolean;
   id: number;
}
type TPlay = "play" | "pause";

/**
 * @returns ("play" | "pause", callback?: (timestamp) => void)
 * @param fps fps >= 60
 * @param dependencies  dependencies = any[]
 * 
 * ```jsx
 * const rAF = useAnimationFrame(30);
   const playHandler = () => {
      rAF("play", (timestamp) => {
         console.log(timestamp);
      });
   };
   const pauseHandler = () => {
      rAF("pause");
   };
	```
 */
export const useAnimationFrame = (fps: number, dependencies: any[] = []) => {
   // handling FPS
   if (fps > 60) {
      fps = 60;
   }
   const interval = Math.floor(1000 / fps);
   const previousTime = useRef(performance.now());
   const isWithOutFrames = useCallback(
      (timestamp: number) => {
         const deltaTime = timestamp - previousTime.current;
         const isWithOut = deltaTime <= interval;
         if (!isWithOut) {
            previousTime.current = timestamp - (deltaTime % interval);
         }
         return isWithOut;
      },
      [interval]
   );

   // rAF
   const rAF = useRef<IRaf>({
      callback: null,
      isPlay: false,
      id: 0,
   }).current;

   const animationFrameEvent = useCallback(
      (timestamp: number) => {
         rAF.id = requestAnimationFrame(animationFrameEvent);
         if (isWithOutFrames(timestamp)) {
            return;
         }
         if (rAF.callback && rAF.isPlay) {
            rAF.callback(timestamp);
         }
      },
      [isWithOutFrames, rAF]
   );

   useEffect(() => {
      rAF.id = requestAnimationFrame(animationFrameEvent);
      return () => {
         //pause frame when compoentn clean up
         cancelAnimationFrame(rAF.id);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, dependencies);

   return (isPlay: TPlay, callback?: TCallbackEvent) => {
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
