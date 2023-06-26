import Link from "next/link";
import s from "./nav.module.scss";

type TAsideNav = {
   className: string;
};

const hookList = [
   {
      href: "/useAnimationFrame",
      title: "useAnimationFrame",
   },
   {
      href: "/useResizeObserver",
      title: "useResizeObserver",
   },
];

const componentList = [
   {
      href: "/accordion",
      title: "Accordion",
   },
];

export const AsideNav = ({ className }: TAsideNav) => {
   const HookLinks = hookList.map((elm) => {
      return (
         <Link key={elm.href} href={elm.href}>
            {elm.title}
         </Link>
      );
   });
   const ComponentLinks = componentList.map((elm) => {
      return (
         <Link key={elm.href} href={elm.href}>
            {elm.title}
         </Link>
      );
   });

   return (
      <div className={`${s.nav} ${className}`}>
         <div className={s.block}>
            <h3>hooks</h3>
            <div>{HookLinks}</div>
         </div>
         <div className={s.block}>
            <h3>components</h3>
            <div>{ComponentLinks}</div>
         </div>
      </div>
   );
};
