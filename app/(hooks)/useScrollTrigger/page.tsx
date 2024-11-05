"use client";

import { CodeBlock } from "@/app/_component/CodeBlock";
import { MainView } from "@/app/_component/MainView";
import {
   useScrollTrigger,
   useFrame,
   useValidElement,
   useStableScroller,
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
   const touchScroller = useStableScroller();

   const { lerpProgress } = useScrollTrigger(
      {
         trigger: validElm,
         scroller: touchScroller,
      },
      {
         dependencies: [validElm, touchScroller],
      }
   );

   useFrame(() => {
      const p = lerpProgress(0.1);
      gsap.set(ref.current, {
         opacity: p,
      });
   });

   return <div ref={ref} className={s.sample}></div>;
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
