interface IUseWindowResizeObserver {
    callback: ({ winW, winH, initWinW, }: {
        winW: number;
        winH: number;
        initWinW: number;
    }) => void;
    debounce: number;
    dependencies?: any[];
}
/**
 * @param callback ({
      winW,
      winH,
      initWinW,
   }: {
      winW: number;
      winH: number;
      initWinW: number;
   }) => void
    
    The callback receives the screen size after resizing and the initial screen width at the time of loading. This can be used when you want to create a branch to determine whether the screen has expanded compared to the loading point.
 */
export declare const useWindowResizeObserver: ({ callback, debounce, dependencies, }: IUseWindowResizeObserver) => void;
export {};
