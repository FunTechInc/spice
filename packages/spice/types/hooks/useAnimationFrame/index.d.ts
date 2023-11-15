type CallbackEvent = (timestamp: number) => void;
type Play = "play" | "pause";
/**
 * @returns ("play" | "pause", callback?: (timestamp) => void)
 * ```jsx
 * const rAF = useAnimationFrame();
    ```
 */
export declare const useAnimationFrame: (fps?: number, dependencies?: any[]) => (isPlay: Play, callback?: CallbackEvent) => void;
export {};
