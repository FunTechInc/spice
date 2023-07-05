import { useEffect } from "react";
import { useOverflowDispatch } from "../WrapperLayout";
import s from "./spice.module.scss";

interface IAsideLayout {
   className?: string;
   children: React.ReactNode;
   aside: {
      chidren: React.ReactNode;
      className?: string;
      index: 0 | 1;
   };
   isSticky: boolean;
}

export const AsideLayout = ({
   className,
   children,
   aside,
   isSticky = false,
}: IAsideLayout) => {
   const setOverflow = useOverflowDispatch();

   useEffect(() => {
      if (isSticky) {
         setOverflow(() => false);
      }
      return () => {
         setOverflow(() => true);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);
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
