"use client";

import { CodeBlock } from "@/app/_component/CodeBlock";
import { MainView } from "@/app/_component/MainView";
import { use100vh } from "@/packages/spice/src";
import { useRef } from "react";
import s from "./index.module.scss";

const Description = () => {
   return (
      <ul>
         <li>
            For some mobile browsers, if the CSS is 100vh or 100lvh, the
            navigation bar may not be included, so by using
            window.screen.height, it will be displayed to fill the screen.
         </li>
         <li>Determine touch device and apply only if true</li>
      </ul>
   );
};

const Demo = () => {
   const ref = useRef<HTMLDivElement>(null);
   use100vh(ref);
   return <div ref={ref} className={s.view}></div>;
};

const Code = () => {
   return (
      <>
         <CodeBlock
            code={`const Demo = () => {
   const ref = useRef<HTMLDivElement>(null);
   use100vh(ref);
   return <div ref={ref} className={s.view}></div>;
};`}
         />
      </>
   );
};

const Page = () => {
   return (
      <MainView
         title="use100vh()"
         demo={<Demo />}
         description={<Description />}
         code={<Code />}
      />
   );
};

export default Page;
