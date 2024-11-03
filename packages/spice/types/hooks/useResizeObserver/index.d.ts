/// <reference types="react" />
type UseResizeObserverProps = {
    target?: React.RefObject<Element> | Element;
    onResize?: (entry: Element) => void;
    /** default:100 */
    debounce?: number;
};
export declare const useResizeObserver: ({ target, onResize, debounce }?: UseResizeObserverProps, dependencies?: React.DependencyList) => import("react").MutableRefObject<null>;
export {};
