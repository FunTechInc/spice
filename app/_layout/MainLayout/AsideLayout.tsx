"use client";

import { AsideLayout as MyAside } from "@/packages/spice/src";
import { AsideNav } from "@/app/_component/Nav";
import s from "./layout.module.scss";

export const AsideLayout = ({ children }: { children: React.ReactNode }) => {
   return (
      <MyAside
         className={s.wrapper}
         aside={{
            chidren: <AsideNav className={s.nav} />,
            index: 1,
         }}
         isSticky={true}>
         {children}
      </MyAside>
   );
};
