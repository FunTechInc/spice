/// <reference types="react" />
type UseResizeObserverProps = {
    targetRef: React.RefObject<HTMLElement>;
    callback: (entry: Element) => void;
    debounce: number;
    dependencies?: any[];
};
export declare const useResizeObserver: ({ targetRef, callback, debounce, dependencies, }: UseResizeObserverProps) => void;
export {};
