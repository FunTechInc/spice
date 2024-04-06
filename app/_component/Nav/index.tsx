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
   {
      href: "/useScrollDirection",
      title: "useScrollDirection",
   },
   {
      href: "/useMediaQuery",
      title: "useMediaQuery",
   },
   {
      href: "/useShare",
      title: "useShare",
   },
   {
      href: "/use100vh",
      title: "use100vh",
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
      href: "/StickyItem",
      title: "StickyItem",
   },
   {
      href: "/Thumbnail",
      title: "Thumbnail",
   },
   {
      href: "/Accordion",
      title: "Accordion",
   },
   {
      href: "/FormField",
      title: "FormField",
   },
   {
      href: "/Tab",
      title: "Tab",
   },
   {
      href: "/Dropdown",
      title: "Dropdown",
   },
   {
      href: "/Magnet",
      title: "Magnet",
   },
   {
      href: "/ModalButton",
      title: "ModalButton",
   },
   {
      href: "/LoadingProgress",
      title: "LoadingProgress",
   },
   {
      href: "/LowPowerVideo",
      title: "LowPowerVideo",
   },
   {
      href: "/SplitText",
      title: "SplitText",
   },
   {
      href: "/Loader",
      title: "Loader",
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
