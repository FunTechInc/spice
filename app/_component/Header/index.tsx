import Link from "next/link";
import s from "./header.module.scss";

export const Header = () => {
   return (
      <div className={s.header}>
         <Link href="/">top</Link>
      </div>
   );
};
