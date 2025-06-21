export declare const useStableScroller: () => HTMLDivElement | undefined;
/**
 * - Components to stabilise the behaviour of the scroller in mobile browsers.
 * - It is possible to use `useStableScroller` to get the `HTMLDivElement` if it is in context
 */
export declare const StableScroller: ({ style, ...rest }: React.HTMLAttributes<HTMLDivElement>) => import("react/jsx-runtime").JSX.Element;
