"use client";

import { useIsomorphicLayoutEffect } from "../../hooks/useIsomorphicLayoutEffect";
import { useIsTouchDevice } from "../../hooks/useIsTouchDevice";
import { createContext, useContext, useRef, useState } from "react";

const TouchScrollerContext = createContext<HTMLDivElement | undefined>(
   undefined
);

export const useTouchScroller = () => useContext(TouchScrollerContext);

export const TouchScroller = ({
   active = true,
   style,
   ...rest
}: { active?: boolean } & React.HTMLAttributes<HTMLDivElement>) => {
   const ref = useRef<HTMLDivElement>(null);
   const isTouch = useIsTouchDevice();
   const isActive = active && isTouch;
   const [scroller, setScroller] = useState<HTMLDivElement | undefined>(
      undefined
   );

   useIsomorphicLayoutEffect(() => {
      if (isActive && ref.current) {
         setScroller(ref.current);
      } else {
         setScroller(undefined);
      }
   }, [isActive]);

   return (
      <TouchScrollerContext.Provider value={scroller}>
         <div
            ref={ref}
            style={{
               ...(isActive
                  ? {
                       height: "100svh",
                       overflowY: "auto",
                    }
                  : {}),
               ...style,
            }}
            {...rest}
         />
      </TouchScrollerContext.Provider>
   );
};
