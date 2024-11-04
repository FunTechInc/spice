import { MainInner } from "../MainInner/MainInner";
import { AsideNav } from "@/app/_component/Nav";
import { TouchScroller } from "@/packages/spice/src/client";
import s from "./layout.module.scss";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
   return (
      <TouchScroller style={{ overscrollBehaviorY: "none" }}>
         <div
            style={{
               flexDirection: "column",
               display: "flex",
               minHeight: "100svh",
            }}>
            <main style={{ flex: 1 }}>
               <MainInner className={s.inner}>
                  <div className={s.nav}>
                     <AsideNav />
                  </div>
                  <div className={s.wrapper}>{children}</div>
               </MainInner>
            </main>
         </div>
      </TouchScroller>
   );
};
