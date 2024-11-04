import { MainInner } from "../MainInner/MainInner";
import { StickyItem, SpiceWrapper } from "@/packages/spice/src/client";
import { AsideNav } from "@/app/_component/Nav";
import s from "./layout.module.scss";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
   return (
      <SpiceWrapper>
         <main style={{ flex: 1 }}>
            <MainInner className={s.inner}>
               <StickyItem className={s.nav}>
                  <AsideNav />
               </StickyItem>
               <div className={s.wrapper}>{children}</div>
            </MainInner>
         </main>
      </SpiceWrapper>
   );
};
