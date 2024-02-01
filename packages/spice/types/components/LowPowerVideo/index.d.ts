import { VideoHTMLAttributes } from "react";
export interface LowPowerVideoProps extends VideoHTMLAttributes<HTMLVideoElement> {
    fallback: React.ReactNode;
}
export declare const LowPowerVideo: (props: LowPowerVideoProps) => string | number | boolean | Iterable<import("react").ReactNode> | import("react/jsx-runtime").JSX.Element | null | undefined;
