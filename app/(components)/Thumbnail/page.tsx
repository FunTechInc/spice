"use client";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { CodeBlock } from "@/app/_component/CodeBlock";
import { MainView } from "@/app/_component/MainView";
import { Thumbnail } from "@/packages/spice/src";
import { useRef, useEffect } from "react";
import s from "./style.module.scss";

const Description = () => {
   return (
      <ul>
         <li>Supports image, video, iframe</li>
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
      <ul className={s.demo_list}>
         <li>
            <Thumbnail ratio={"16-9"} className={s.hover}>
               <Image
                  src={"/logo-l.jpg"}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                  alt="FunTech Inc"
               />
               <div className={s.mask}></div>
            </Thumbnail>
         </li>
         <li>
            <Thumbnail ratio={"silver"} className={s.parallax}>
               <Image
                  ref={ref}
                  src={"/logo-l.jpg"}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                  alt="FunTech Inc"
               />
            </Thumbnail>
         </li>
         <li>
            <Thumbnail ratio={"16-9"} className={s.video}>
               <video
                  autoPlay
                  loop
                  muted
                  preload={"none"}
                  playsInline
                  src="/logo.mp4"></video>
            </Thumbnail>
         </li>
         <li>
            <Thumbnail ratio={"square"}>
               <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/R1Gph3qEijw?si=DdeNW9deIVoatrU6"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen></iframe>
            </Thumbnail>
         </li>
      </ul>
   );
};

const Code = () => {
   return (
      <>
         <CodeBlock
            code={`const Demo = () => {
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
      <ul className={s.demo_list}>
         <li>
            <Thumbnail ratio={"16-9"} className={s.hover}>
               <Image
                  src={"/logo-l.jpg"}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                  alt="FunTech Inc"
               />
               <div className={s.mask}></div>
            </Thumbnail>
         </li>
         <li>
            <Thumbnail ratio={"silver"} className={s.parallax}>
               <Image
                  ref={ref}
                  src={"/logo-l.jpg"}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                  alt="FunTech Inc"
               />
            </Thumbnail>
         </li>
         <li>
            <Thumbnail ratio={"16-9"} className={s.video}>
               <video
                  autoPlay
                  loop
                  muted
                  preload={"none"}
                  playsInline
                  src="/logo.mp4"></video>
            </Thumbnail>
         </li>
         <li>
            <Thumbnail ratio={"square"}>
               <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/R1Gph3qEijw?si=DdeNW9deIVoatrU6"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen></iframe>
            </Thumbnail>
         </li>
      </ul>
   );
};`}
         />
      </>
   );
};

const Page = () => {
   return (
      <MainView
         title="Thumbnail"
         description={<Description />}
         demo={<Demo />}
         code={<Code />}
      />
   );
};

export default Page;
