import { MainInner } from "@/app/_layout/MainInner/MainInner";
import s from "./footer.module.scss";

export const Footer = () => {
   return (
      <div className={s.footer}>
         <MainInner className={s.inner}>
            <a href="https://twitter.com/tkm_hmng8" target="_blank">
               © HASHIMOTO Takuma
            </a>
         </MainInner>
      </div>
   );
};
