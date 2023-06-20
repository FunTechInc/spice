"use client";

import { AsideLayout, WrapperLayout } from "@/packages/spice/src";
import { Footer } from "@/app/_component/Footer";
import { Header } from "@/app/_component/Header";
import { AsideNav } from "@/app/_component/Nav";
import s from "./layout.module.scss";

export const MainWrapper = ({ children }: { children: React.ReactNode }) => {
   return (
      <WrapperLayout>
         <Header></Header>
         <main>
            <AsideLayout
               className={s.wrapper}
               asideChildren={<AsideNav className={s.nav} />}
               isSticky={false}>
               {children}
            </AsideLayout>
         </main>
         <Footer></Footer>
      </WrapperLayout>
   );
};
