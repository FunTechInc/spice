import { MainInner } from "../MainInner/MainInner";
import { StickyItem, SpiceWrapper } from "@/packages/spice/src";
import { AsideNav } from "@/app/_component/Nav";
import s from "./layout.module.scss";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
   return (
      <SpiceWrapper>
         <main>
            <MainInner style={{ display: "flex", alignItems: "flex-start" }}>
               <StickyItem className={s.nav}>
                  <AsideNav />
               </StickyItem>
               <div className={s.wrapper}>{children}</div>
            </MainInner>
         </main>
      </SpiceWrapper>
   );
};
