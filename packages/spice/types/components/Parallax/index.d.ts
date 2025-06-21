/// <reference types="react" />
export type ParallaxProps = {
    y?: number | string;
    scroller?: gsap.DOMTarget;
    scrub?: number | boolean;
} & React.HTMLAttributes<HTMLDivElement>;
export declare const Parallax: ({ y, scroller, scrub, ...rest }: ParallaxProps) => import("react/jsx-runtime").JSX.Element;
