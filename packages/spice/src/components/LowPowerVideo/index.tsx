"use client";

import { VideoHTMLAttributes, useEffect, useRef, useState } from "react";

export interface LowPowerVideoProps
   extends VideoHTMLAttributes<HTMLVideoElement> {
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

   return isLowPower ? fallback : <video ref={video} {...rest}></video>;
};
