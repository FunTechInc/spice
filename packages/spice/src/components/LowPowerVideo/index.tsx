"use client";

import { useEffect, useRef, useState } from "react";
import { Video, VideoProps } from "../Video";

export interface LowPowerVideoProps extends VideoProps {
   fallback: React.ReactNode;
}

export const LowPowerVideo = (props: LowPowerVideoProps) => {
   const video = useRef<HTMLVideoElement>(null);
   const [isLowPower, setIsLowPower] = useState(false);

   const { fallback, ...rest } = props;

   useEffect(() => {
      let isActive = true;

      const playVideo = async () => {
         try {
            await video.current?.play();
            if (isActive) {
               setIsLowPower(false);
            }
         } catch (error) {
            if (isActive) {
               setIsLowPower(true);
            }
         }
      };

      playVideo();

      return () => {
         isActive = false;
      };
   }, [props.src]);

   return isLowPower ? fallback : <Video ref={video} {...rest}></Video>;
};
