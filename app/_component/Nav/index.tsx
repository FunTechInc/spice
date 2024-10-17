import Link from "next/link";
import s from "./nav.module.scss";

const hookList = [
   {
      href: "/useFrame",
      title: "useFrame",
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
      href: "/useOnHovering",
      title: "useOnHovering",
   },
];

const componentList = [
   {
      href: "/WrapperLayout",
      title: "WrapperLayout",
   },
   {
      href: "/StickyItem",
      title: "StickyItem",
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
      href: "/ModalButton",
      title: "ModalButton",
   },
   {
      href: "/LoadingProgress",
      title: "LoadingProgress",
   },
   {
      href: "/AutoScrollContainer",
      title: "AutoScrollContainer",
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

export const AsideNav = () => {
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
      <div className={`${s.nav}`}>
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
