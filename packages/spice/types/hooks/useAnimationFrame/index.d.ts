type TPlay = "play" | "pause";
/**
 * @returns ("play" | "pause", callback?: () => void)
 * @param fps fps >= 60
 * @param dependencies  dependencies = any[]
 *
 * ```jsx
 * const rAF = useAnimationFrame(30);
   const playHandler = () => {
      rAF("play", () => {
         console.log("tick");
      });
   };
   const pauseHandler = () => {
      rAF("pause");
   };
    ```
 */
export declare const useAnimationFrame: (fps: number, dependencies?: any[]) => (isPlay: TPlay, callback?: () => void) => void;
export {};
