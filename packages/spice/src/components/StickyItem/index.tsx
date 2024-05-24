"use client";

import { useEffect, forwardRef } from "react";
import { useOverflowDispatch } from "../SpiceWrapper";

export type StickyItemsProps = React.DetailedHTMLProps<
   React.HTMLAttributes<HTMLDivElement>,
   HTMLDivElement
>;

export const StickyItem = forwardRef<HTMLDivElement, StickyItemsProps>(
   ({ children, ...props }, ref) => {
      const setOverflow = useOverflowDispatch();

      useEffect(() => {
         setOverflow(() => false);
         return () => {
            setOverflow(() => true);
         };
      }, [setOverflow]);

      return (
         <div ref={ref} {...props}>
            {children}
         </div>
      );
   }
);

StickyItem.displayName = "StickyItem";
