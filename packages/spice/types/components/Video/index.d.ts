import { VideoHTMLAttributes } from "react";
export interface VideoProps extends VideoHTMLAttributes<HTMLVideoElement> {
    fill?: boolean;
}
export declare const Video: import("react").ForwardRefExoticComponent<VideoProps & import("react").RefAttributes<HTMLVideoElement>>;
