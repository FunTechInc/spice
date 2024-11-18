"use client";

import { CodeBlock } from "@/app/_component/CodeBlock";
import { MainView } from "@/app/_component/MainView";
import { AutoScrollContainer } from "@/packages/spice/src/client";

const Demo = () => {
   return (
      <AutoScrollContainer
         style={{ backgroundColor: "yellow", width: "500px" }}
         speed={-10}>
         <p
            style={{
               fontSize: "120px",
               textAlign: "justify",
            }}>
            hgoehogheoghgoeh
         </p>
      </AutoScrollContainer>
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
