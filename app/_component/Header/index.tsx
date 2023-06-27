import Link from "next/link";
import s from "./header.module.scss";
import { MainInner } from "@/app/_layout/MainInner/MainInner";

export const Header = () => {
   return (
      <div className={s.header}>
         <MainInner className={s.inner}>
            <Link href="/">(hidden)spice</Link>
            <div>
               <a href="https://twitter.com/tkm_hmng8" target="_blank">
                  GitHub
               </a>
            </div>
         </MainInner>
      </div>
   );
};
