/// <reference types="react" />
interface IUseResizeObserver {
    targetRef: React.RefObject<HTMLElement>;
    callback: (entry: Element) => void;
    debounce: number;
    dependencies?: any[];
}
/**
 * @param callback (entry: Element) => void;
 */
export declare const useResizeObserver: ({ targetRef, callback, debounce, dependencies, }: IUseResizeObserver) => void;
export {};
