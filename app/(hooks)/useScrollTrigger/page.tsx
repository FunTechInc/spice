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
import s from "./style.module.scss";

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
      if (scrollTrigger?.current?.isActive) {
         gsap.set(ref.current, {
            opacity: lerpProgress(0.1),
         });
      }
   });

   return (
      <div
         ref={ref}
         className={s.sample}
         style={{
            backgroundColor:
               direction === false ? "red" : direction === 1 ? "blue" : "green",
         }}></div>
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
