"use client";

import { Lenis, useLenis } from "@studio-freight/react-lenis";
import { useStore } from "@/app/_context/store";
import { useIsomorphicLayoutEffect } from "@/packages/spice/src";

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
   return <Lenis root>{children}</Lenis>;
};
