type TCallbackEvent = (timestamp: number) => void;
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
export declare const useAnimationFrame: (fps: number, dependencies?: any[]) => (isPlay: TPlay, callback?: TCallbackEvent) => void;
export {};
