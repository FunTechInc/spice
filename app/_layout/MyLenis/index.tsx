"use client";

import { useEffect } from "react";
import { Lenis, useLenis } from "@studio-freight/react-lenis";
import { useStore } from "@/app/_context/store";

export const MyLenis = ({ children }: { children: React.ReactNode }) => {
   const lenis = useLenis();
   const isModalOpen = useStore((state: any) => state.isModalOpen);
   useEffect(() => {
      if (isModalOpen) {
         lenis?.stop();
      } else {
         lenis?.start();
      }
   }, [isModalOpen, lenis]);
   return <Lenis root>{children}</Lenis>;
};
