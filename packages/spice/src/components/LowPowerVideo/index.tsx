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
      video.current
         ?.play()
         .then(() => {
            setIsLowPower(false);
         })
         .catch(() => {
            setIsLowPower(true);
         });
   }, []);

   return isLowPower ? fallback : <Video ref={video} {...rest}></Video>;
};
