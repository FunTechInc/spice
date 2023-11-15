type UseWindowResizeObserverProps = {
    callback: ({ winW, winH, initWinW, }: {
        winW: number;
        winH: number;
        initWinW: number;
    }) => void;
    debounce: number;
    dependencies?: any[];
};
export declare const useWindowResizeObserver: ({ callback, debounce, dependencies, }: UseWindowResizeObserverProps) => void;
export {};
