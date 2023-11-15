import { useEffect } from "react";
import { useOverflowDispatch } from "../WrapperLayout";

type StickyItemsProps = {
   children: React.ReactNode;
   className: string;
};

export const StickyItem = ({ children, className }: StickyItemsProps) => {
   const setOverflow = useOverflowDispatch();

   useEffect(() => {
      setOverflow(() => false);
      return () => {
         setOverflow(() => true);
      };
   }, [setOverflow]);

   return <div className={className ? className : ""}>{children}</div>;
};
