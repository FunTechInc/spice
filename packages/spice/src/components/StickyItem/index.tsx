import { useEffect, forwardRef } from "react";
import { useOverflowDispatch } from "../WrapperLayout";

type StickyItemsProps = {
   children: React.ReactNode;
   className?: string;
};

export const StickyItem = forwardRef<HTMLDivElement, StickyItemsProps>(
   ({ children, className }, ref) => {
      const setOverflow = useOverflowDispatch();

      useEffect(() => {
         setOverflow(() => false);
         return () => {
            setOverflow(() => true);
         };
      }, [setOverflow]);

      return (
         <div ref={ref} className={className ? className : ""}>
            {children}
         </div>
      );
   }
);

StickyItem.displayName = "StickyItem";
