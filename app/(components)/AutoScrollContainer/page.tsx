"use client";

import { CodeBlock } from "@/app/_component/CodeBlock";
import { MainView } from "@/app/_component/MainView";
import { AutoScrollContainer } from "@/packages/spice/src";

const Description = () => {
   return (
      <>
         <ul>
            <li>AutoScrollContainer</li>
         </ul>
      </>
   );
};

const Demo = () => {
   return (
      <div
         style={{
            width: "500px",
            height: "100px",
            fontSize: "100px",
            overflow: "hidden",
            backgroundColor: "gray",
         }}>
         <AutoScrollContainer speed={2}>
            HOGEHOGEHOGHEOGHOEGHOEGHOE
         </AutoScrollContainer>
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
