"use client";
import { CodeBlock } from "@/app/_component/CodeBlock";
import { MainView } from "@/app/_component/MainView";
import { useScrollDirection } from "@/packages/spice/src";
import s from "./style.module.scss";
import { gsap } from "gsap";
import { useRef, useEffect } from "react";

const Description = () => {
   return (
      <ul>
         <li>watch the scroll direction up or down.</li>
      </ul>
   );
};

const Demo = () => {
   const direction = useScrollDirection({
      threshold: 10,
   });
   const ref = useRef(null);
   useEffect(() => {
      if (!direction) {
         return;
      }
      gsap.context(() => {
         gsap.to("p", {
            y: direction === "up" ? -120 : 120,
            duration: 1,
            ease: "power3.out",
            stagger: {
               each: 0.05,
            },
         });
      }, ref.current!);
   }, [direction]);
   const List = [...Array(10)].map((_, i) => (
      <p key={i}>{direction ?? "scroll down"}</p>
   ));
   return (
      <div className={s.scrollsect} ref={ref}>
         {List}
      </div>
   );
};

const Code = () => {
   return (
      <>
         <CodeBlock
            code={`const Demo = () => {
   const direction = useScrollDirection({
      threshold: 10,
   });
   const ref = useRef(null);
   useEffect(() => {
      if (!direction) {
         return;
      }
      gsap.context(() => {
         gsap.to("p", {
            y: direction === "up" ? -120 : 120,
            duration: 1,
            ease: "power3.out",
            stagger: {
               each: 0.05,
            },
         });
      }, ref.current!);
   }, [direction]);
   const List = [...Array(10)].map((_, i) => (
      <p key={i}>{direction ?? "scroll down"}</p>
   ));
   return (
      <div className={s.scrollsect} ref={ref}>
         {List}
      </div>
   );
};`}
         />
      </>
   );
};

const Page = () => {
   return (
      <MainView
         title="useScrollDirection()"
         description={<Description />}
         demo={<Demo />}
         code={<Code />}
      />
   );
};

export default Page;
