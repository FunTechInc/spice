"use client";

import { CodeBlock } from "@/app/_component/CodeBlock";
import { MainView } from "@/app/_component/MainView";
import { useIntersectionObserver } from "@/packages/spice/src/client";
import { useCallback, useRef } from "react";
import { gsap } from "gsap";
import s from "./style.module.scss";

const Description = () => {
   return (
      <ul>
         <li>watch the intersection of the target.</li>
      </ul>
   );
};

const List = ({ index }: { index: number }) => {
   const pos = 120;
   const xPos = index % 2 === 0 ? pos : pos * -1;
   const { ref, isIntersecting } = useIntersectionObserver({
      onEnter: useCallback(
         ({ target }: any) => {
            gsap.fromTo(
               target,
               {
                  opacity: 0,
                  x: xPos,
               },
               {
                  opacity: 1,
                  x: 0,
                  duration: 1,
                  ease: "power3.out",
               }
            );
         },
         [xPos]
      ),
   });

   return (
      <li
         ref={ref}
         style={{ backgroundColor: isIntersecting ? "red" : "blue" }}>
         target
      </li>
   );
};

const Demo = () => {
   const ref = useRef(null);
   useIntersectionObserver({
      target: ref,
      onEnter: ({ target }) => {
         gsap.fromTo(
            target,
            {
               y: 120,
            },
            {
               y: 0,
               duration: 1,
               ease: "power3.out",
            }
         );
      },
   });
   const ListArr = [...Array(3)].map((_, i) => <List key={i} index={i} />);
   return (
      <ul ref={ref} className={s.sample}>
         {ListArr}
      </ul>
   );
};

const Code = () => {
   return (
      <>
         <CodeBlock
            code={`const Demo = () => {
   const ref = useRef(null);
   useIntersectionObserver({
      targetRef: ref,
      onEnter: (target) => {
            gsap.fromTo(
               target,
               {
                  y: 120,
               },
               {
                  y: 0,
                  duration: 1,
                  ease: "power3.out",
               }
            );
         },
   });
   const ListArr = [...Array(3)].map((_, i) => <List key={i} index={i} />);
   return (
      <ul ref={ref} className={s.sample}>
         {ListArr}
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
         title="useIntersectionObserver()"
         description={<Description />}
         demo={<Demo />}
         code={<Code />}
      />
   );
};

export default Page;
