import "./global.scss";
import "the-new-css-reset/css/reset.css";
//style from spice
import "@/packages/spice/src/scss/global.scss";
// import "@funtech-inc/spice/css";
import { Lato } from "next/font/google";
import { MainWrapper } from "@/app/_layout/MainWrapper";
import { AppHooks } from "./app-hooks";
import { MyLenis } from "./_layout/MyLenis";
const lato = Lato({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
   title: "(hidden)spice",
   description: "one aim, one spice.",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
   return (
      <html lang="ja">
         <body className={lato.className}>
            <MyLenis>
               <MainWrapper>{children}</MainWrapper>
            </MyLenis>
         </body>
         <AppHooks />
      </html>
   );
};

export default RootLayout;
