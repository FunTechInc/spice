import { useIsomorphicLayoutEffect } from "../../hooks/useIsomorphicLayoutEffect";
import { useOverflowDispatch } from "../WrapperLayout";
import s from "./spice.module.scss";

type AsideLayoutProps = {
   className?: string;
   children: React.ReactNode;
   aside: {
      chidren: React.ReactNode;
      className?: string;
      index: 0 | 1;
   };
   /** If set to true, handles the overflow of the WrapperLayout */
   isSticky: boolean;
};

export const AsideLayout = ({
   className,
   children,
   aside,
   isSticky = false,
}: AsideLayoutProps) => {
   const setOverflow = useOverflowDispatch();

   useIsomorphicLayoutEffect(() => {
      if (isSticky) {
         setOverflow(() => false);
      }
      return () => {
         setOverflow(() => true);
      };
   }, [isSticky, setOverflow]);

   return (
      <div className={className ? className : ""}>
         {aside.index === 1 && (
            <div className={s.spice_aside_main}>{children}</div>
         )}
         <aside
            className={`${s.spice_aside_aside} ${
               aside.className ? aside.className : ""
            }`}>
            {aside.chidren}
         </aside>
         {aside.index === 0 && (
            <div className={s.spice_aside_main}>{children}</div>
         )}
      </div>
   );
};
