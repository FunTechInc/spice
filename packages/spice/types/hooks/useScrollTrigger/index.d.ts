/// <reference types="react" />
import ScrollTrigger from "gsap/ScrollTrigger";
type ReactiveState = "isActive" | "direction";
export declare const useScrollTrigger: (vars: ScrollTrigger.StaticVars, { reactive, dependencies, }?: {
    reactive?: ReactiveState[] | undefined;
    dependencies?: import("react").DependencyList | undefined;
}) => {
    isActive: boolean;
    direction: number | false;
    lerpProgress: (alpha: number, precision?: number) => number;
    scrollTrigger: import("react").MutableRefObject<globalThis.ScrollTrigger | undefined>;
};
export {};
