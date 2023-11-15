import { useCallback, useEffect, useRef } from "react";

type CallbackEvent = (timestamp: number) => void;
type RafProps = {
   callback: null | CallbackEvent;
   isPlay: boolean;
   id: number;
};
type Play = "play" | "pause";

/**
 * @returns ("play" | "pause", callback?: (timestamp) => void)
 * ```jsx
 * const rAF = useAnimationFrame();
	```
 */
export const useAnimationFrame = (fps = 60, dependencies: any[] = []) => {
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

   const rAF = useRef<RafProps>({
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
         cancelAnimationFrame(rAF.id);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, dependencies);

   return (isPlay: Play, callback?: CallbackEvent) => {
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
