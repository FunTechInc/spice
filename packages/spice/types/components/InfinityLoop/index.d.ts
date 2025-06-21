/// <reference types="react" />
export type InfinityLoopProps = {
    active?: boolean;
    /** Negative values will result in the opposite direction. default : `1` */
    speed?: number | React.RefObject<number>;
} & React.HTMLAttributes<HTMLDivElement>;
export declare const InfinityLoop: import("react").ForwardRefExoticComponent<{
    active?: boolean | undefined;
    /** Negative values will result in the opposite direction. default : `1` */
    speed?: number | import("react").RefObject<number> | undefined;
} & import("react").HTMLAttributes<HTMLDivElement> & import("react").RefAttributes<HTMLDivElement>>;
export declare const InfinityLoopOnView: (props: Omit<InfinityLoopProps, "active">) => import("react/jsx-runtime").JSX.Element;
