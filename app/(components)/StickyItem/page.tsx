"use client";

import { CodeBlock } from "@/app/_component/CodeBlock";
import { MainView } from "@/app/_component/MainView";
import { StickyItem } from "@/packages/spice/src/client";
import s from "./style.module.scss";

const Description = () => {
   return (
      <ul>
         <li>
            When wrapping with WrapperLayout,this component remove the overflow
            from the wrapper.
         </li>
      </ul>
   );
};

const Demo = () => {
   return (
      <>
         <StickyItem className={s.item}>
            <p>this is sticky</p>
         </StickyItem>
         <div className={s.other}></div>
      </>
   );
};

const Code = () => {
   return (
      <CodeBlock
         code={`const Demo = () => {
   return (
      <>
         <StickyItem className={s.item}>
            <p>this is sticky</p>
         </StickyItem>
         <div className={s.other}></div>
      </>
   );
};`}
      />
   );
};

const Page = () => {
   return (
      <MainView
         title="Accordion"
         description={<Description />}
         demo={<Demo />}
         code={<Code />}
      />
   );
};

export default Page;
