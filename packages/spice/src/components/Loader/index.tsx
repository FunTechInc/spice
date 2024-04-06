import { useEffect, useState } from "react";
import s from "./spice.module.scss";

type LoaderProps = {
   className?: string;
   loader?: "skeleton" | "circular" | React.ReactNode;
   /** 1000ms */
   delay?: number;
   onView?: {
      /** 0.3s */
      transitionDuration?: React.CSSProperties["transitionDuration"];
      /** ease-in-out */
      transitionTimingFunction?: React.CSSProperties["transitionTimingFunction"];
   };
   skelton?: {
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
      boder?: React.CSSProperties["border"];
      /** 1.6s */
      animationDuration?: React.CSSProperties["animationDuration"];
      /** linear */
      animationTimingFunction?: React.CSSProperties["animationTimingFunction"];
   };
   children?: React.ReactNode;
};

export const Loader = ({
   className,
   loader = "skeleton",
   delay = 1000,
   onView,
   skelton,
   circular,
   children,
}: LoaderProps) => {
   const [isView, setIsView] = useState(delay === 0);
   const hasChildren = Boolean(children);
   useEffect(() => {
      if (delay === 0) return;
      setTimeout(() => setIsView(true), delay);
   }, [delay]);
   return (
      <div
         className={`${className ? className : ""} ${s.spice_loader_wrapper} `}
         style={
            hasChildren
               ? {
                    maxWidth: "fit-content",
                    height: "auto",
                 }
               : {}
         }>
         <div
            className={s.spice_loader_container}
            style={
               isView
                  ? {
                       opacity: 1,
                       transitionProperty: "opacity",
                       transitionDuration: onView?.transitionDuration || "0.3s",
                       transitionTimingFunction:
                          onView?.transitionTimingFunction || "ease-in-out",
                    }
                  : {}
            }>
            {loader === "skeleton" ? (
               <div
                  className={s.spice_loader_skelton}
                  style={{
                     background: `linear-gradient(90deg,transparent,${
                        skelton?.waveColor || "rgba(255,255,255,0.64)"
                     },transparent)`,
                     animationDuration: skelton?.animationDuration || "1.6s",
                     animationTimingFunction:
                        skelton?.animationTimingFunction || "ease-in-out",
                  }}></div>
            ) : loader === "circular" ? (
               <div
                  className={s.spice_loader_circular}
                  style={{
                     width: circular?.width ? circular?.width : "24px",
                     height: circular?.height ? circular?.height : "24px",
                     border: circular?.boder || "2px solid #fff",
                     borderBottomColor: "transparent",
                     animationDuration: skelton?.animationDuration || "1.6s",
                     animationTimingFunction:
                        skelton?.animationTimingFunction || "linear",
                  }}></div>
            ) : (
               loader
            )}
            {hasChildren && (
               <div style={{ visibility: "hidden" }}>{children}</div>
            )}
         </div>
      </div>
   );
};
