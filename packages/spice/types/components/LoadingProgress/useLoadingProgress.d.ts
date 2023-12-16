/// <reference types="react" />
type UseLoadingProgressProps = {
    onesRef: React.RefObject<HTMLElement>;
    tensRef: React.RefObject<HTMLElement>;
    hundredsRef: React.RefObject<HTMLElement>;
    /** Tempo to update. Fallback to at least 60fps. defaul:3.0 */
    tempo?: number;
    onProgress?: ({ digitContainer, digit, percent, destination, duration, }: {
        /** container element. Animate the digits by transforming this */
        digitContainer: HTMLElement;
        percent: number;
        digit: 1 | 10 | 100;
        destination: number;
        duration: number;
    }) => void;
    onStart?: (targets: NodeListOf<HTMLDivElement>[]) => void;
    /** If you want to wait for onComplete to complete, you can make the promise return. */
    onComplete?: (targets: NodeListOf<HTMLDivElement>[]) => void;
};
type UpdateProgress = (destination: number) => Promise<number>;
/**
 * Returns an update function for counting up. Pass the target number you want to count up to the update function.
 * @returns updateProgress:(destination: number) => Promise<number>
 */
export declare const useLoadingProgress: ({ tempo, onesRef, tensRef, hundredsRef, onProgress, onStart, onComplete, }: UseLoadingProgressProps) => UpdateProgress;
export {};
