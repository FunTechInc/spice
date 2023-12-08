type UseWindowResizeObserverProps = {
    callback: ({ winW, winH, initWinW, }: {
        winW: number;
        winH: number;
        initWinW: number;
    }) => void;
    /** default:100 */
    debounce?: number;
    dependencies?: any[];
};
export declare const useWindowResizeObserver: ({ callback, debounce, dependencies, }: UseWindowResizeObserverProps) => void;
export {};
