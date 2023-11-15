/// <reference types="react" />
type UseIntersectionObserverProps = {
    targetRef: React.RefObject<HTMLElement>;
    rootMargin?: string;
    threshold?: number;
    once: boolean;
    callback: {
        onEnter?: (target: Element) => void;
        onLeave?: (target: Element) => void;
    };
    dependencies?: any[];
};
export declare const useIntersectionObserver: ({ targetRef, rootMargin, threshold, once, callback, dependencies, }: UseIntersectionObserverProps) => void;
export {};
