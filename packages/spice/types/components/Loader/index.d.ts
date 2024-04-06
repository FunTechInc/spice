/// <reference types="react" />
type LoaderProps = {
    className?: string;
    loader?: "skeleton" | "circular" | React.ReactNode;
    /** 1000ms */
    delay?: number;
    onView?: {
        /** 0.3s */
        transitionDuration?: React.CSSProperties["transitionDuration"];
        /** ease-in-out */
        transitionTimingFunction?: React.CSSProperties["transitionTimingFunction"];
    };
    skelton?: {
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
        boder?: React.CSSProperties["border"];
        /** 1.6s */
        animationDuration?: React.CSSProperties["animationDuration"];
        /** linear */
        animationTimingFunction?: React.CSSProperties["animationTimingFunction"];
    };
    children?: React.ReactNode;
};
export declare const Loader: import("react").ForwardRefExoticComponent<LoaderProps & import("react").RefAttributes<HTMLDivElement>>;
export {};
