"use client";

import { forwardRef, useEffect, useState } from "react";

export type LoaderProps = {
   loader?: "skeleton" | "circular" | React.ReactNode;
   /** 1000ms */
   delay?: number;
   onView?: {
      /** 0.3s */
      transitionDuration?: React.CSSProperties["transitionDuration"];
      /** ease-in-out */
      transitionTimingFunction?: React.CSSProperties["transitionTimingFunction"];
   };
   skeleton?: {
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
      border?: React.CSSProperties["border"];
      /** 1.6s */
      animationDuration?: React.CSSProperties["animationDuration"];
      /** linear */
      animationTimingFunction?: React.CSSProperties["animationTimingFunction"];
   };
} & React.HTMLAttributes<HTMLDivElement>;

export const Loader = forwardRef<HTMLDivElement, LoaderProps>(
   (
      {
         loader = "skeleton",
         delay = 1000,
         onView,
         skeleton,
         circular,
         children,
         style,
         ...rest
      },
      ref
   ) => {
      const [isView, setIsView] = useState(delay === 0);
      const hasChildren = Boolean(children);
      useEffect(() => {
         if (delay === 0) return;
         setTimeout(() => setIsView(true), delay);
      }, [delay]);
      return (
         <div
            ref={ref}
            style={{
               ...{
                  overflow: "hidden",
                  pointerEvents: "none",
               },
               ...(hasChildren
                  ? {
                       maxWidth: "fit-content",
                       height: "auto",
                    }
                  : {}),
               ...style,
            }}
            {...rest}>
            <div
               style={{
                  ...{
                     position: "relative",
                     width: "100%",
                     height: "100%",
                     opacity: 0,
                  },
                  ...(isView
                     ? {
                          opacity: 1,
                          transitionProperty: "opacity",
                          transitionDuration:
                             onView?.transitionDuration || "0.3s",
                          transitionTimingFunction:
                             onView?.transitionTimingFunction || "ease-in-out",
                       }
                     : {}),
               }}>
               {loader === "skeleton" ? (
                  <div
                     style={{
                        background: `linear-gradient(90deg,transparent,${
                           skeleton?.waveColor || "rgba(255,255,255,0.64)"
                        },transparent)`,
                        animationDuration:
                           skeleton?.animationDuration || "1.6s",
                        animationTimingFunction:
                           skeleton?.animationTimingFunction || "ease-in-out",
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        top: 0,
                        left: 0,
                        animationName: "skeleton",
                        animationIterationCount: "infinite",
                     }}>
                     <style>
                        {`@keyframes skeleton {0% {transform: translateX(-100%);}100% {transform: translateX(100%);}}`}
                     </style>
                  </div>
               ) : loader === "circular" ? (
                  <div
                     style={{
                        width: circular?.width ? circular?.width : "24px",
                        height: circular?.height ? circular?.height : "24px",
                        border: circular?.border || "2px solid #fff",
                        borderBottomColor: "transparent",
                        animationDuration:
                           skeleton?.animationDuration || "1.6s",
                        animationTimingFunction:
                           skeleton?.animationTimingFunction || "linear",
                        position: "absolute",
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        margin: "auto",
                        borderRadius: "50%",
                        animationName: "circular",
                        animationIterationCount: "infinite",
                     }}>
                     <style>
                        {`@keyframes circular {0% {transform: rotate(0deg);}100% {transform: rotate(360deg);}}`}
                     </style>
                  </div>
               ) : (
                  loader
               )}
               {hasChildren && (
                  <div style={{ visibility: "hidden" }}>{children}</div>
               )}
            </div>
         </div>
      );
   }
);

Loader.displayName = "Loader";
