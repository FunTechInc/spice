/// <reference types="react" />
type UseIntersectionObserverProps = {
    targetRef: React.RefObject<HTMLElement>;
    callback: {
        onEnter?: (target: Element) => void;
        onLeave?: (target: Element) => void;
    };
    rootMargin?: string;
    threshold?: number;
    /** default:false */
    once?: boolean;
    dependencies?: any[];
};
export declare const useIntersectionObserver: ({ targetRef, rootMargin, threshold, once, callback, dependencies, }: UseIntersectionObserverProps) => void;
export {};
