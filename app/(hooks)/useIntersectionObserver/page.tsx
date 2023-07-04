"use client";
import { CodeBlock } from "@/app/_component/CodeBlock";
import { MainView } from "@/app/_component/MainView";
import { useIntersectionObserver } from "@/packages/spice/src";
import s from "./style.module.scss";
import { useRef } from "react";
import { gsap } from "gsap";

const Description = () => {
   return (
      <ul>
         <li>watch the intersection of the target.</li>
      </ul>
   );
};

const List = ({ index }: { index: number }) => {
   const ref = useRef(null);
   const pos = 120;
   const xPos = index % 2 === 0 ? pos : pos * -1;
   useIntersectionObserver({
      targetRef: ref,
      once: true,
      callback: {
         enter: (target) => {
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
      },
      dependencies: [],
   });
   return <li ref={ref}>target</li>;
};

const Demo = () => {
   const ref = useRef(null);
   useIntersectionObserver({
      targetRef: ref,
      once: true,
      callback: {
         enter: (target) => {
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
      },
      dependencies: [],
   });
   const ListArr = [...Array(10)].map((_, i) => <List key={i} index={i} />);
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
            code={`const List = ({ index }: { index: number }) => {
   const ref = useRef(null);
   const pos = 120;
   const xPos = index % 2 === 0 ? pos : pos * -1;
   useIntersectionObserver({
      targetRef: ref,
      once: true,
      callback: {
         enter: (target) => {
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
      },
      dependencies: [],
   });
   return <li ref={ref}></li>;
};

const Demo = () => {
   const ref = useRef(null);
   useIntersectionObserver({
      targetRef: ref,
      once: true,
      callback: {
         enter: (target) => {
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
      },
      dependencies: [],
   });
   const ListArr = [...Array(10)].map((_, i) => <List key={i} index={i} />);
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
