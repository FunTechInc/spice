"use client";

import { forwardRef, useState } from "react";
import Image, { ImageProps } from "next/image";
import {
   Loader,
   LowPowerVideo,
   LowPowerVideoProps,
   Video,
   VideoProps,
} from "@/packages/spice/src";
import s from "./index.module.scss";

const LoaderContainer = forwardRef<
   HTMLDivElement,
   {
      fill?: boolean;
      children: React.ReactNode;
   }
>(({ fill, children }, ref) => {
   return (
      <div ref={ref} className={fill ? s.fillContainer : s.container}>
         {children}
      </div>
   );
});
LoaderContainer.displayName = "LoaderContainer";

const WAVE_COLOR = "rgba(208,208,208,0.24)";

export const VideoLoader = forwardRef<HTMLDivElement, VideoProps>(
   (props, ref) => {
      const [isLoaded, setIsLoaded] = useState(false);
      const { fill } = props;
      return (
         <LoaderContainer ref={ref} fill={fill}>
            <Video {...props} onCanPlay={() => setIsLoaded(true)}></Video>
            {!isLoaded && (
               <Loader
                  skeleton={{ waveColor: WAVE_COLOR }}
                  delay={0}
                  className={s.loader}
               />
            )}
         </LoaderContainer>
      );
   }
);
VideoLoader.displayName = "VideoLoader";

export const LowPowerVideoLoader = forwardRef<
   HTMLDivElement,
   LowPowerVideoProps
>((props, ref) => {
   const [isLoaded, setIsLoaded] = useState(false);
   const { fill } = props;
   return (
      <LoaderContainer ref={ref} fill={fill}>
         <LowPowerVideo
            {...props}
            onCanPlay={() => setIsLoaded(true)}></LowPowerVideo>
         {!isLoaded && (
            <Loader
               skeleton={{ waveColor: WAVE_COLOR }}
               delay={0}
               className={s.loader}
            />
         )}
      </LoaderContainer>
   );
});
LowPowerVideoLoader.displayName = "LowPowerVideoLoader";

export const ImageLoader = forwardRef<HTMLDivElement, ImageProps>(
   (props, ref) => {
      const [isLoaded, setIsLoaded] = useState(false);
      const { alt, fill, ...rest } = props;
      return (
         <LoaderContainer ref={ref} fill={fill}>
            <Image
               {...rest}
               alt={alt || ""}
               fill={fill}
               onLoad={() => setIsLoaded(true)}
            />
            {!isLoaded && (
               <Loader
                  skeleton={{ waveColor: WAVE_COLOR }}
                  delay={0}
                  className={s.loader}
               />
            )}
         </LoaderContainer>
      );
   }
);
ImageLoader.displayName = "ImageLoader";
