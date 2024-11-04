"use client";

import { CodeBlock } from "@/app/_component/CodeBlock";
import { MainView } from "@/app/_component/MainView";
import {
   useScrollTrigger,
   useFrame,
   useValidElement,
} from "@/packages/spice/src/client";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import s from "./style.module.scss";
import { useGSAP } from "@gsap/react";

const Description = () => {
   return (
      <ul>
         <li>useScrollTrigger</li>
      </ul>
   );
};

const Demo = () => {
   const ref = useRef<HTMLDivElement>(null);
   const validElm = useValidElement(ref);
   // useGSAP(
   //    () => {
   //       if (!validElm) {
   //          return;
   //       }
   //       gsap.registerPlugin(ScrollTrigger);
   //       const scrollTrigger: ScrollTrigger.Vars = {
   //          trigger: validElm,
   //          scrub: 1,
   //       };
   //       gsap.to(ref.current, {
   //          scrollTrigger,
   //          opacity: 0,
   //       });
   //    },
   //    { dependencies: [validElm] }
   // );
   const { scrollTrigger, lerpProgress, direction } = useScrollTrigger(
      {
         trigger: validElm,
         markers: true,
      },
      {
         reactive: ["direction"],
         dependencies: [validElm],
      }
   );

   useFrame(() => {
      const p = lerpProgress(0.1);
      // console.log(p, "p");
      gsap.set(ref.current, {
         opacity: p,
         // scale: p,
      });
      // if (scrollTrigger?.current?.isActive) {
      // }
   });

   return (
      <div
         ref={ref}
         className={s.sample}
         // style={{
         //    backgroundColor:
         //       direction === false ? "red" : direction === 1 ? "blue" : "green",
         // }}
      ></div>
   );
};

const Code = () => {
   return (
      <>
         <CodeBlock code={``} />
      </>
   );
};

const Page = () => {
   return (
      <MainView
         title="useScrollTrigger()"
         description={<Description />}
         demo={<Demo />}
         code={<Code />}
      />
   );
};

export default Page;
