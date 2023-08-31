/// <reference types="react" />
interface IUseIntersectionObserver {
    targetRef: React.RefObject<HTMLElement>;
    rootMargin?: string;
    threshold?: number;
    once: boolean;
    callback: {
        onEnter?: (target: Element) => void;
        onLeave?: (target: Element) => void;
    };
    dependencies?: any[];
}
/**
 * @param callback onEnter,onLeave
 */
export declare const useIntersectionObserver: ({ targetRef, rootMargin, threshold, once, callback, dependencies, }: IUseIntersectionObserver) => void;
export {};
