import { useOverflowDispatch } from "../WrapperLayout";
import { useIsomorphicLayoutEffect } from "../../hooks/useIsomorphicLayoutEffect";
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
         {aside.index === 1 && <div className={s._aside_main}>{children}</div>}
         <aside
            className={`${s._aside_aside} ${
               aside.className ? aside.className : ""
            }`}>
            {aside.chidren}
         </aside>
         {aside.index === 0 && <div className={s._aside_main}>{children}</div>}
      </div>
   );
};
