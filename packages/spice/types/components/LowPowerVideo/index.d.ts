/// <reference types="react" />
import { VideoProps } from "../Video";
export interface LowPowerVideoProps extends VideoProps {
    fallback: React.ReactNode;
}
export declare const LowPowerVideo: (props: LowPowerVideoProps) => string | number | boolean | Iterable<import("react").ReactNode> | import("react/jsx-runtime").JSX.Element | null | undefined;
