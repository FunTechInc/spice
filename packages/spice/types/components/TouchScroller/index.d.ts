/// <reference types="react" />
export declare const useTouchScroller: () => HTMLDivElement | undefined;
export declare const TouchScroller: ({ active, style, ...rest }: {
    active?: boolean | undefined;
} & import("react").HTMLAttributes<HTMLDivElement>) => import("react/jsx-runtime").JSX.Element;
