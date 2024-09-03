"use client";

import { CodeBlock } from "@/app/_component/CodeBlock";
import { MainView } from "@/app/_component/MainView";
import { Loader } from "@/packages/spice/src/client";
import s from "./index.module.scss";

const Demo = () => {
   return (
      <>
         <div className={s.container}>
            <Loader
               delay={0}
               style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  top: 0,
                  left: 0,
                  backgroundColor: "red",
               }}
            />
         </div>
         <div className={s.container} style={{ marginTop: 10 }}>
            <Loader
               loader={"circular"}
               delay={0}
               style={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  top: 0,
                  left: 0,
                  backgroundColor: "red",
               }}
            />
         </div>
      </>
   );
};

const Code = () => {
   return (
      <CodeBlock
         code={`<Loader
            delay={0}
            style={{
               position: "absolute",
               width: "100%",
               height: "100%",
               top: 0,
               left: 0,
               backgroundColor: "red",
            }}
         />`}
      />
   );
};

const Page = () => {
   return <MainView title="Loader" demo={<Demo />} code={<Code />} />;
};

export default Page;
