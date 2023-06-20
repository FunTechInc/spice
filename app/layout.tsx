import "./global.scss";
import "the-new-css-reset/css/reset.css";
// import "@funtech-inc/spice/css";
import { Lato } from "next/font/google";
import { MainWrapper } from "@/app/_layout/MainWrapper.tsx";
const lato = Lato({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
   title: "(hidden)spice",
   description: "one aim, one spice.",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
   return (
      <html lang="ja">
         <body className={lato.className}>
            <MainWrapper>{children}</MainWrapper>
         </body>
      </html>
   );
};

export default RootLayout;
