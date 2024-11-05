"use client";

import { useDeviceDetector } from "../../client";
import { useIsomorphicLayoutEffect } from "../../hooks/useIsomorphicLayoutEffect";
import { createContext, useContext, useRef, useState } from "react";

const StableScrollerContext = createContext<HTMLDivElement | undefined>(
   undefined
);

export const useStableScroller = () => useContext(StableScrollerContext);

/**
 * @param active - If the scroller should be active or not
 * - Components to stabilise the behaviour of the scroller in mobile browsers.
 * - based on the `isMobile` on `useDeviceDetector`
 * - It is possible to use `useStableScroller` to get the `HTMLDivElement` if it is in context
 */
export const StableScroller = ({
   active = true,
   style,
   ...rest
}: { active?: boolean } & React.HTMLAttributes<HTMLDivElement>) => {
   const ref = useRef<HTMLDivElement>(null);

   const { isMobile } = useDeviceDetector();
   const isActive = active && isMobile;

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
      <StableScrollerContext.Provider value={scroller}>
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
      </StableScrollerContext.Provider>
   );
};
