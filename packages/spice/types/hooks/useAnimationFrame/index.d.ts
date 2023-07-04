type TPlay = "play" | "pause";
export declare const useAnimationFrame: (fps: number) => (isPlay: TPlay, callback?: () => void) => void;
export {};
