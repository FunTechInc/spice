"use client";

import { CodeBlock } from "@/app/_component/CodeBlock";
import { MainView } from "@/app/_component/MainView";
import { InfinityLoop, InfinityLoopOnView } from "@/packages/spice/src/client";

const Demo = () => {
   return (
      <InfinityLoopOnView
         style={{ backgroundColor: "yellow", width: "500px" }}
         speed={-10}>
         <p
            style={{
               fontSize: "120px",
               textAlign: "justify",
            }}>
            hgoehogheoghgoeh
         </p>
      </InfinityLoopOnView>
   );
};

const Code = () => {
   return (
      <CodeBlock
         code={`<InfinityLoopOnView>
            <p style={{ fontSize: "120px" }}>hgoehogheogheoghoehgoehgo</p>
         </InfinityLoopOnView>`}
      />
   );
};

const Page = () => {
   return <MainView title="InfinityLoop" demo={<Demo />} code={<Code />} />;
};

export default Page;
