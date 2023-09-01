"use client";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { CodeBlock } from "@/app/_component/CodeBlock";
import { MainView } from "@/app/_component/MainView";
import { BackgroundImage } from "@/packages/spice/src";
import { useRef, useEffect } from "react";
import s from "./style.module.scss";

const Description = () => {
   return (
      <ul>
         <li>please use Thumbnail instead.</li>
      </ul>
   );
};

const Demo = () => {
   const ref = useRef(null);
   useEffect(() => {
      gsap.registerPlugin(ScrollTrigger);
      const parallax = gsap.to(ref.current, {
         y: "-8%",
         scrollTrigger: {
            start: "top bottom-=10%",
            trigger: ref.current,
            scrub: 2.4,
            markers: true,
         },
      });
      return () => {
         parallax.revert();
      };
   }, []);
   return (
      <>
         <BackgroundImage ratio={"16-9"} className={s.hover}>
            <Image
               src={"/logo-l.jpg"}
               fill
               sizes="(max-width: 768px) 100vw, 50vw"
               priority
               alt="FunTech Inc"
            />
            <div className={s.mask}></div>
         </BackgroundImage>
         <p>hover sample</p>
         <BackgroundImage ratio={"silver"} className={s.parallax}>
            <Image
               ref={ref}
               src={"/logo-l.jpg"}
               fill
               sizes="(max-width: 768px) 100vw, 50vw"
               priority
               alt="FunTech Inc"
            />
         </BackgroundImage>
         <p>parallax sample</p>
      </>
   );
};

const Page = () => {
   return (
      <MainView
         title="BackgroundImage"
         description={<Description />}
         demo={<Demo />}
      />
   );
};

export default Page;
