"use client";

import { Parallax, ParallaxProps } from "../Parallax";

export type ParallaxThumbnailProps = ParallaxProps;

const getNumeric = (val: number | string): number =>
   typeof val === "number" ? val : parseFloat(val) || 0;

export const ParallaxThumbnail = ({
   children,
   style,
   y = "8%",
   scroller,
   scrub = 1,
   ...rest
}: ParallaxThumbnailProps) => {
   return (
      <div
         {...rest}
         style={{
            overflow: "hidden",
            ...style,
         }}>
         <Parallax
            y={y}
            scroller={scroller}
            scrub={scrub}
            style={{
               position: "absolute",
               inset: 0,
               width: "100%",
               height: "100%",
               scale: 1 + getNumeric(y) * 0.02, // 1 + scale * 2 / 100
            }}>
            {children}
         </Parallax>
      </div>
   );
};
