/// <reference types="react" />
export type IntersectionObserverProps = {
    targetRef: React.RefObject<HTMLElement>;
    /** default:"0px" */
    rootMargin?: string;
    /** default:0 */
    threshold?: number | number[];
    /** default:false */
    once?: boolean;
    dependencies?: any[];
};
export type UseIntersectionObserverProps = {
    callback: {
        onEnter?: (entry: IntersectionObserverEntry) => void;
        onLeave?: (entry: IntersectionObserverEntry) => void;
    };
} & IntersectionObserverProps;
export declare const useIntersectionObserver: ({ targetRef, rootMargin, threshold, once, callback, dependencies, }: UseIntersectionObserverProps) => void;
