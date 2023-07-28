type TPlay = "play" | "pause";
/**
 * @param fps fps >= 60
 * @param dependencies  dependencies = []
 */
export declare const useAnimationFrame: (fps: number, dependencies?: any[]) => (isPlay: TPlay, callback?: () => void) => void;
export {};
