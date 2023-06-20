import Link from "next/link";
import s from "./nav.module.scss";

type TAsideNav = {
   className: string;
};

export const AsideNav = ({ className }: TAsideNav) => {
   return (
      <div className={`${s.nav} ${className}`}>
         <h3>hooks</h3>
         <div>
            <Link href="/useAnimationFrame">useAnimationFrame</Link>
         </div>
      </div>
   );
};
