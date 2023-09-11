"use client";

import { useEffect, useRef } from "react";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import { useStore } from "@/app/_context/store";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useWindowResizeObserver } from "@/packages/spice/src";

const option = {
   duration: 0.6,
   easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
   orientation: "vertical",
   gestureOrientation: "vertical",
   smoothWheel: true,
   wheelMultiplier: 1,
   smoothTouch: false,
   touchMultiplier: 2,
   infinite: false,
};

export const MyLenis = ({ children }: { children: React.ReactNode }) => {
   /*===============================================
	integrate GSAP & ScrollTrigger
	===============================================*/
   const lenis = useLenis();
   useEffect(() => {
      if (!lenis) {
         return;
      }
      gsap.registerPlugin(ScrollTrigger);
      lenis?.on("scroll", ScrollTrigger.update);
   }, [lenis]);

   const lenisRef = useRef<any>();
   useEffect(() => {
      function update(time: number) {
         lenisRef.current?.raf(time * 1000);
      }
      gsap.ticker.add(update);
      gsap.ticker.lagSmoothing(0);
      return () => {
         gsap.ticker.remove(update);
      };
   }, []);

   /*===============================================
	resize
	===============================================*/
   useWindowResizeObserver({
      callback: () => {
         if (!lenisRef.current) {
            return;
         }
         lenisRef.current?.resize();
      },
      debounce: 50,
   });

   /*===============================================
	stop lenis
	===============================================*/
   const isModalOpen = useStore((state) => state);
   useEffect(() => {
      if (isModalOpen) {
         lenisRef.current?.stop();
      } else {
         lenisRef.current?.start();
      }
   }, [isModalOpen]);
   return (
      <ReactLenis root ref={lenisRef} autoRaf={false} option={option}>
         {children}
      </ReactLenis>
   );
};
