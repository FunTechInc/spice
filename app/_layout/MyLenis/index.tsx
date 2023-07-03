"use client";

import { Lenis, useLenis } from "@studio-freight/react-lenis";
import { useStore } from "@/app/_context/store";
import { useIsomorphicLayoutEffect } from "@/packages/spice/src";

const lenisOptions = {
   duration: 0.6,
   easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -12 * t)),
   orientation: "vertical",
   gestureOrientation: "vertical",
   smoothWheel: true,
   wheelMultiplier: 1,
   smoothTouch: false,
   touchMultiplier: 2,
   infinite: false,
};

export const MyLenis = ({ children }: { children: React.ReactNode }) => {
   const lenis = useLenis();
   const isModalOpen = useStore((state: any) => state.isModalOpen);
   useIsomorphicLayoutEffect(() => {
      if (isModalOpen) {
         lenis?.stop();
      } else {
         lenis?.start();
      }
   }, [isModalOpen, lenis]);
   return (
      <Lenis root options={{ ...lenisOptions }}>
         {children}
      </Lenis>
   );
};
