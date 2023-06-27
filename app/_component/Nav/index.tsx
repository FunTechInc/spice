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
      href: "/useIsomorphicLayoutEffect",
      title: "useIsomorphicLayoutEffect",
   },
   {
      href: "/useResizeObserver",
      title: "useResizeObserver",
   },
   {
      href: "/useIntersectionObserver",
      title: "useIntersectionObserver",
   },
   {
      href: "/useStarter",
      title: "useStarter",
   },
   {
      href: "/useWindowResizeObserver",
      title: "useWindowResizeObserver",
   },
   {
      href: "/useIsTouchDevice",
      title: "useIsTouchDevice",
   },
];

const componentList = [
   {
      href: "/WrapperLayout",
      title: "WrapperLayout",
   },
   {
      href: "/AsideLayout",
      title: "AsideLayout",
   },
   {
      href: "/Accordion",
      title: "Accordion",
   },
   {
      href: "/Form",
      title: "Form",
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
