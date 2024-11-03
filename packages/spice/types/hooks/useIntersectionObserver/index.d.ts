/// <reference types="react" />
export type UseIntersectionObserverProps = {
    target?: React.RefObject<Element> | Element;
    options?: IntersectionObserverInit;
    /** default : `false` */
    once?: boolean;
    onEnter?: (entry: IntersectionObserverEntry) => void;
    onLeave?: (entry: IntersectionObserverEntry) => void;
};
export declare const useIntersectionObserver: ({ target, options, once, onEnter, onLeave, }?: UseIntersectionObserverProps, dependencies?: React.DependencyList) => {
    ref: import("react").MutableRefObject<null>;
    isIntersecting: boolean;
};
