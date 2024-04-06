"use client";

import { CodeBlock } from "@/app/_component/CodeBlock";
import { MainView } from "@/app/_component/MainView";
import { Loader } from "@/packages/spice/src";
import s from "./index.module.scss";

const Description = () => {
   return (
      <>
         <ul>
            <li>
               `skelton` and `circular` can be selected. To make the production
               richer, you can also pass a custom loader
            </li>
            <li>
               Passing `children` causes it to `fit-content` to the size of the
               child element
            </li>
            <li>
               By default, the display is delayed by 1 second to prevent
               flickering; if delay is set to 0, it is displayed by default.
            </li>
         </ul>
      </>
   );
};

const Demo = () => {
   return (
      <div className={s.container}>
         <div className={s.block}>
            <p>skelton</p>
            <Loader delay={0} className={s.skelton} />
         </div>
         <div className={s.block}>
            <p>circular</p>
            <Loader loader="circular" className={s.circular} />
         </div>
         <div className={s.block}>
            <p>has children</p>
            <Loader className={s.fitSkelton}>
               <h1>ほげほげほげほげほげ</h1>
            </Loader>
         </div>
         <div className={s.block}>
            <p>custom</p>
            <Loader loader={<div className={s.customLoader}></div>}></Loader>
         </div>
      </div>
   );
};

const Code = () => {
   return (
      <CodeBlock
         code={`const Demo = () => {
   return (
      <div className={s.container}>
         <div className={s.block}>
            <p>skelton</p>
            <Loader delay={0} className={s.skelton} />
         </div>
         <div className={s.block}>
            <p>circular</p>
            <Loader loader="circular" className={s.circular} />
         </div>
         <div className={s.block}>
            <p>has children</p>
            <Loader className={s.fitSkelton}>
               <h1>ほげほげほげほげほげ</h1>
            </Loader>
         </div>
         <div className={s.block}>
            <p>custom</p>
            <Loader loader={<div className={s.customLoader}></div>}></Loader>
         </div>
      </div>
   );
};`}
      />
   );
};

const Page = () => {
   return (
      <MainView
         title="Loader"
         description={<Description />}
         demo={<Demo />}
         code={<Code />}
      />
   );
};

export default Page;
