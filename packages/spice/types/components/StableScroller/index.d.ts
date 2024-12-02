/// <reference types="react" />
export declare const useStableScroller: () => HTMLDivElement | undefined;
/**
 * @param active - If the scroller should be active or not
 * - Components to stabilise the behaviour of the scroller in mobile browsers.
 * - It is possible to use `useStableScroller` to get the `HTMLDivElement` if it is in context
 */
export declare const StableScroller: ({ active, style, ...rest }: {
    active?: boolean | undefined;
} & import("react").HTMLAttributes<HTMLDivElement>) => import("react/jsx-runtime").JSX.Element;
