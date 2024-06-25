/// <reference types="react" />
type UseResizeObserverProps = {
    targetRef: React.RefObject<HTMLElement>;
    onResize: (entry: Element) => void;
    /** default:100 */
    debounce?: number;
    dependencies?: any[];
};
export declare const useResizeObserver: ({ targetRef, onResize, debounce, dependencies, }: UseResizeObserverProps) => void;
export {};
