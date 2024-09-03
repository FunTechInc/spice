"use client";

import { CodeBlock } from "@/app/_component/CodeBlock";
import { MainView } from "@/app/_component/MainView";
import { AutoScrollContainer } from "@/packages/spice/src/client";

const Demo = () => {
   return (
      <div style={{ width: "400px" }}>
         <AutoScrollContainer speed={-10}>
            <p style={{ fontSize: "120px" }}>hgoehogheog</p>
         </AutoScrollContainer>
      </div>
   );
};

const Code = () => {
   return (
      <CodeBlock
         code={`<AutoScrollContainer>
            <p style={{ fontSize: "120px" }}>hgoehogheogheoghoehgoehgo</p>
         </AutoScrollContainer>`}
      />
   );
};

const Page = () => {
   return (
      <MainView title="AutoScrollContainer" demo={<Demo />} code={<Code />} />
   );
};

export default Page;
