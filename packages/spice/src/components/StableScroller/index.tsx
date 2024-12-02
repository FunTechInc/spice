"use client";

import { useIsomorphicLayoutEffect } from "../../hooks/useIsomorphicLayoutEffect";
import { createContext, useContext, useRef, useState } from "react";

const StableScrollerContext = createContext<HTMLDivElement | undefined>(
   undefined
);

export const useStableScroller = () => useContext(StableScrollerContext);

/**
 * @param active - If the scroller should be active or not
 * - Components to stabilise the behaviour of the scroller in mobile browsers.
 * - It is possible to use `useStableScroller` to get the `HTMLDivElement` if it is in context
 */
export const StableScroller = ({
   active,
   style,
   ...rest
}: { active?: boolean } & React.HTMLAttributes<HTMLDivElement>) => {
   const ref = useRef<HTMLDivElement>(null);

   const [scroller, setScroller] = useState<HTMLDivElement | undefined>(
      undefined
   );

   useIsomorphicLayoutEffect(() => {
      if (active && ref.current) {
         setScroller(ref.current);
      } else {
         setScroller(undefined);
      }
   }, [active]);

   return (
      <StableScrollerContext.Provider value={scroller}>
         <div
            ref={ref}
            style={{
               ...(active
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
