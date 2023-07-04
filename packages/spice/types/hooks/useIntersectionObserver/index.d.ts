/// <reference types="react" />
interface IUseIntersectionObserver {
    targetRef: React.RefObject<HTMLElement>;
    rootMargin?: string;
    threshold?: number;
    once: boolean;
    callback: {
        enter?: (target: Element) => void;
        leave?: (target: Element) => void;
    };
    dependencies?: any[];
}
export declare const useIntersectionObserver: ({ targetRef, rootMargin, threshold, once, callback, dependencies, }: IUseIntersectionObserver) => void;
export {};
