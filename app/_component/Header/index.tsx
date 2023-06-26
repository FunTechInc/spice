import Link from "next/link";
import s from "./header.module.scss";

export const Header = () => {
   return (
      <div className={s.header}>
         <Link href="/">(hidden)spice</Link>
         <div>
            <a href="https://twitter.com/tkm_hmng8" target="_blank">
               GitHub
            </a>
         </div>
      </div>
   );
};
