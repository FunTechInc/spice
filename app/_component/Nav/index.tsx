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
      href: "/useWindowResizeObserver",
      title: "useWindowResizeObserver",
   },
   {
      href: "/useIsTouchDevice",
      title: "useIsTouchDevice",
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
   {
      href: "/useValidElement",
      title: "useValidElement",
   },
   {
      href: "/useScrollTrigger",
      title: "useScrollTrigger",
   },
];

const componentList = [
   {
      href: "/WrapperLayout",
      title: "WrapperLayout",
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
      href: "/InfinityLoop",
      title: "InfinityLoop",
   },
   {
      href: "/SplitText",
      title: "SplitText",
   },
   {
      href: "/Loader",
      title: "Loader",
   },
   {
      href: "/ParallaxThumbnail",
      title: "Parallax",
   },
   {
      href: "/Float",
      title: "Float",
   },
];

const utilsList = [
   {
      href: "/paging",
      title: "paging",
   },
];

export const AsideNav = () => {
   const renderLinks = (list: any) => {
      return list.map((elm: any) => (
         <Link key={elm.href} href={elm.href}>
            {elm.title}
         </Link>
      ));
   };

   const sections = [
      { title: "hooks", links: hookList },
      { title: "components", links: componentList },
      { title: "utils", links: utilsList },
   ];

   return (
      <div className={s.nav}>
         {sections.map(({ title, links }) => (
            <div key={title} className={s.block}>
               <h3>{title}</h3>
               <div>{renderLinks(links)}</div>
            </div>
         ))}
      </div>
   );
};
