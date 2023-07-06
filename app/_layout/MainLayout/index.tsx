import { Footer } from "@/app/_component/Footer";
import { Header } from "@/app/_component/Header";
import { MainInner } from "../MainInner/MainInner";
import { WrapperLayout } from "./WrapperLayout";
import { AsideLayout } from "./AsideLayout";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
   return (
      <WrapperLayout>
         <Header></Header>
         <main>
            <MainInner>
               <AsideLayout>{children}</AsideLayout>
            </MainInner>
         </main>
         <Footer></Footer>
      </WrapperLayout>
   );
};
