/// <reference types="react" />
export type AutoScrollContainerProps = {
    /** Negative values will result in the opposite direction. default : `1` */
    speed?: number;
} & React.HTMLAttributes<HTMLDivElement>;
export declare const AutoScrollContainer: ({ children, speed, style, ...rest }: AutoScrollContainerProps) => import("react/jsx-runtime").JSX.Element;
