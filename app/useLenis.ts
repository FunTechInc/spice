import { useCallback, useEffect, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { create } from "zustand";
import { LinkProps } from "next/link";
import { useRouter } from "next/navigation";
import { useFrame } from "@/packages/spice/src/client";

export const LENIS_CONFIG = {
   duration: 1.2,
   easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
};

type LenisStore = {
   lenis: Lenis | null;
   setLenis: (value: Lenis) => void;
};

export const useLenis = create<LenisStore>((set) => ({
   lenis: null,
   setLenis: (value: Lenis) => set({ lenis: value }),
}));

export const useLenisRegister = () => {
   const lenis = useRef<Lenis | null>(null);
   const setLenis = useLenis((state) => state.setLenis);

   useEffect(() => {
      lenis.current = new Lenis(LENIS_CONFIG);
      setLenis(lenis.current);

      // integrate with GSAP
      ScrollTrigger.refresh();
      lenis.current.on("scroll", ScrollTrigger.update);

      gsap.ticker.lagSmoothing(0);

      // Scrolling is stopped at popstate because the scrolling before the transition is inherited.
      const handlePopstate = () => {
         lenis.current?.stop();
         setTimeout(() => lenis.current?.start(), 0);
      };
      window.addEventListener("popstate", handlePopstate);

      return () => {
         lenis.current?.destroy();
         window.removeEventListener("popstate", handlePopstate);
      };
   }, [setLenis]);

   useFrame((time) => {
      lenis.current?.raf(time * 1000);
   });

   return lenis;
};

/**
 * Call `lenis.stop()` when routing because scrolling continues after page transitions if routing is done during `lenis-scrolling`.
 * 
 * ```tsx
 * const bild = useLenisLink(props);
   return <Link {...bild}>{children}</Link>;
 * ```
 */
export const useLenisLink = (
   props: LinkProps & React.AnchorHTMLAttributes<HTMLAnchorElement>
) => {
   const router = useRouter();
   const lenis = useLenis((state) => state.lenis);

   const onClick: React.MouseEventHandler<HTMLAnchorElement> = useCallback(
      (e) => {
         if (
            (!props.target || props.target === "_self") &&
            props.scroll !== false
         ) {
            e.preventDefault();
            lenis?.stop();
            router.push(props.href);
            lenis?.start();
            props.onClick && props.onClick(e);
         }
      },
      [props, lenis, router]
   );

   return { ...props, onClick };
};
