/// <reference types="react" />
export type LoaderProps = {
    loader?: "skeleton" | "circular" | React.ReactNode;
    /** 1000ms */
    delay?: number;
    onView?: {
        /** 0.3s */
        transitionDuration?: React.CSSProperties["transitionDuration"];
        /** ease-in-out */
        transitionTimingFunction?: React.CSSProperties["transitionTimingFunction"];
    };
    skeleton?: {
        /** rgba(255,255,255,0.64) */
        waveColor?: string;
        /** 1.6s */
        animationDuration?: React.CSSProperties["animationDuration"];
        /** ease-in-out */
        animationTimingFunction?: React.CSSProperties["animationTimingFunction"];
    };
    circular?: {
        /** 24px */
        width?: React.CSSProperties["width"];
        /** 24px */
        height?: React.CSSProperties["height"];
        /** 2px solid #fff */
        border?: React.CSSProperties["border"];
        /** 1.6s */
        animationDuration?: React.CSSProperties["animationDuration"];
        /** linear */
        animationTimingFunction?: React.CSSProperties["animationTimingFunction"];
    };
} & React.HTMLAttributes<HTMLDivElement>;
export declare const Loader: import("react").ForwardRefExoticComponent<{
    loader?: "skeleton" | "circular" | React.ReactNode;
    /** 1000ms */
    delay?: number | undefined;
    onView?: {
        /** 0.3s */
        transitionDuration?: React.CSSProperties["transitionDuration"];
        /** ease-in-out */
        transitionTimingFunction?: React.CSSProperties["transitionTimingFunction"];
    } | undefined;
    skeleton?: {
        /** rgba(255,255,255,0.64) */
        waveColor?: string | undefined;
        /** 1.6s */
        animationDuration?: React.CSSProperties["animationDuration"];
        /** ease-in-out */
        animationTimingFunction?: React.CSSProperties["animationTimingFunction"];
    } | undefined;
    circular?: {
        /** 24px */
        width?: React.CSSProperties["width"];
        /** 24px */
        height?: React.CSSProperties["height"];
        /** 2px solid #fff */
        border?: React.CSSProperties["border"];
        /** 1.6s */
        animationDuration?: React.CSSProperties["animationDuration"];
        /** linear */
        animationTimingFunction?: React.CSSProperties["animationTimingFunction"];
    } | undefined;
} & import("react").HTMLAttributes<HTMLDivElement> & import("react").RefAttributes<HTMLDivElement>>;
