/// <reference types="react" />
type UseIntersectionObserverProps = {
    targetRef: React.RefObject<HTMLElement>;
    callback: {
        onEnter?: (entry: IntersectionObserverEntry) => void;
        onLeave?: (entry: IntersectionObserverEntry) => void;
    };
    /** default:"0px" */
    rootMargin?: string;
    /** default:0 */
    threshold?: number | number[];
    /** default:false */
    once?: boolean;
    dependencies?: any[];
};
export declare const useIntersectionObserver: ({ targetRef, rootMargin, threshold, once, callback, dependencies, }: UseIntersectionObserverProps) => void;
export {};
