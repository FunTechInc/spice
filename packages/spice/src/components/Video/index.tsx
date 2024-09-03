import { VideoHTMLAttributes, forwardRef } from "react";

export interface VideoProps extends VideoHTMLAttributes<HTMLVideoElement> {
   fill?: boolean;
}

export const Video = forwardRef<HTMLVideoElement, VideoProps>((props, ref) => {
   const { fill, style, ...rest } = props;
   return (
      <video
         ref={ref}
         style={
            fill
               ? {
                    ...{
                       position: "absolute",
                       width: "100%",
                       height: "100%",
                       top: 0,
                       bottom: 0,
                       left: 0,
                       right: 0,
                       color: "transparent",
                    },
                    ...style,
                 }
               : style
         }
         {...rest}></video>
   );
});

Video.displayName = "Video";
