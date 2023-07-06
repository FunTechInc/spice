import "./global.scss";
import "the-new-css-reset/css/reset.css";
import { Lato } from "next/font/google";
import { MainLayout } from "@/app/_layout/MainLayout";
import { AppHooks } from "./app-hooks";
import { MyLenis } from "./_layout/MyLenis";
/*===============================================
spice styles
===============================================*/
import "@/packages/spice/src/scss/global.scss";
// import "@funtech-inc/spice/css";

const lato = Lato({ weight: ["400", "700"], subsets: ["latin"] });

const metadata = {
   title: "(hidden)spice",
   description: "one aim, one spice.",
   twitter: {
      card: "summary_large_image",
   },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
   return (
      <html lang="ja">
         <MyLenis>
            <body className={lato.className}>
               <MainLayout>{children}</MainLayout>
            </body>
         </MyLenis>
         <AppHooks />
      </html>
   );
};

export { metadata };
export default RootLayout;
