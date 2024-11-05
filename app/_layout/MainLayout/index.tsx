import { MainInner } from "../MainInner/MainInner";
import { AsideNav } from "@/app/_component/Nav";
import { StableScroller } from "@/packages/spice/src/client";
import s from "./layout.module.scss";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
   return (
      <StableScroller>
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
            <footer
               style={{
                  marginTop: 40,
                  height: "20px",
                  color: "white",
                  textAlign: "center",
                  backgroundColor: "#333",
               }}>
               footer
            </footer>
         </div>
      </StableScroller>
   );
};
