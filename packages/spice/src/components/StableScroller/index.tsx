"use client";

import { createContext, useContext, useRef, useState } from "react";
import { useIsomorphicLayoutEffect } from "../../hooks/useIsomorphicLayoutEffect";
import { useDeviceDetector } from "../../hooks/useDeviceDetector";

const StableScrollerContext = createContext<HTMLDivElement | undefined>(
   undefined
);

export const useStableScroller = () => useContext(StableScrollerContext);

/**
 * - Components to stabilise the behaviour of the scroller in mobile browsers.
 * - It is possible to use `useStableScroller` to get the `HTMLDivElement` if it is in context
 */
export const StableScroller = ({
   style,
   ...rest
}: React.HTMLAttributes<HTMLDivElement>) => {
   const { isMobile } = useDeviceDetector();

   const ref = useRef<HTMLDivElement>(null);

   const [scroller, setScroller] = useState<HTMLDivElement | undefined>(
      undefined
   );

   useIsomorphicLayoutEffect(() => {
      if (isMobile && ref.current) {
         setScroller(ref.current);
      } else {
         setScroller(undefined);
      }
   }, [isMobile]);

   return (
      <StableScrollerContext.Provider value={scroller}>
         <div
            ref={ref}
            style={{
               ...(isMobile
                  ? {
                       height: "100svh",
                       overflowY: "auto",
                    }
                  : {}),
               ...style,
            }}
            {...rest}
         />
      </StableScrollerContext.Provider>
   );
};
