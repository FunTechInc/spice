import "the-new-css-reset/css/reset.css";

import { Lato } from "next/font/google";
import { MainLayout } from "@/app/_layout/MainLayout";
import { AppHooks } from "./app-hooks";

const lato = Lato({ weight: ["400", "700"], subsets: ["latin"] });

const metadata = {
   title: "spice for sauce",
   description: "spice for sauce",
   twitter: {
      card: "summary_large_image",
   },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
   return (
      <html lang="ja">
         <body className={lato.className}>
            <MainLayout>{children}</MainLayout>
         </body>
         <AppHooks />
      </html>
   );
};

export { metadata };
export default RootLayout;
