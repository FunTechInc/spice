import { useOverflowDispatch } from "../WrapperLayout";
import { useIsomorphicLayoutEffect } from "../../hooks/useIsomorphicLayoutEffect";
import s from "./spice.module.scss";

export const AsideLayout = ({
   className,
   children,
   asideChildren,
   isSticky = false,
}: {
   className?: string;
   children: React.ReactNode;
   asideChildren: React.ReactNode;
   isSticky: boolean;
}) => {
   const setOverflow = useOverflowDispatch();
   useIsomorphicLayoutEffect(() => {
      if (isSticky) {
         setOverflow(() => false);
      }
      return () => {
         setOverflow(() => true);
      };
   }, []);
   return (
      <div className={className ? className : ""}>
         <aside className={s._aside_aside}>{asideChildren}</aside>
         <div className={s._aside_main}>{children}</div>
      </div>
   );
};
