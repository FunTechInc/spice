"use client";

import { CodeBlock } from "@/app/_component/CodeBlock";
import { MainView } from "@/app/_component/MainView";
import { SplitText } from "@/packages/spice/src";
import s from "./style.module.scss";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const Description = () => {
   return (
      <>
         <ul>
            <li>SPLIT with SPAN tag.</li>
            <li>You can choose between `chars` and `words`.</li>
            <li>Newlines can use `\n`.</li>
         </ul>
      </>
   );
};

const Demo = () => {
   const ref = useRef<HTMLParagraphElement>(null);
   useGSAP(
      () => {
         gsap.from("span", {
            opacity: 0,
            duration: 1.2,
            ease: "power2.out",
            stagger: 0.01,
         });
      },
      { scope: ref }
   );
   return (
      <div className={s.wrapper}>
         <p ref={ref}>
            <SplitText
               text={`これはダミーテキストです。 これはダミーテキストです。 これはダミーテキストです。これはダミーテキストです。これはダミーテキストです。\nこれはダミーテキストです。これはダミーテキストです。これはダミーテキストです。これはダミーテキストです。これはダミーテキストです。`}
            />
         </p>
      </div>
   );
};

const Code = () => {
   return (
      <CodeBlock
         code={`const Demo = () => {
   const ref = useRef<HTMLParagraphElement>(null);
   useGSAP(
      () => {
         gsap.from("span", {
            opacity: 0,
            duration: 1.2,
            ease: "power2.out",
            stagger: 0.01,
         });
      },
      { scope: ref }
   );
   return (
      <div className={s.wrapper}>
         <p ref={ref}>
            <SplitText
               text={\`これはダミーテキストです。 これはダミーテキストです。 これはダミーテキストです。これはダミーテキストです。これはダミーテキストです。\\nこれはダミーテキストです。これはダミーテキストです。これはダミーテキストです。これはダミーテキストです。これはダミーテキストです。\`}
            />
         </p>
      </div>
   );
};`}
      />
   );
};

const Page = () => {
   return (
      <MainView
         title="SplitText"
         description={<Description />}
         demo={<Demo />}
         code={<Code />}
      />
   );
};

export default Page;
