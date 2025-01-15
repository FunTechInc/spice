"use client";

import { CodeBlock } from "@/app/_component/CodeBlock";
import { MainView } from "@/app/_component/MainView";
import { Float } from "@/packages/spice/src/client";
import { utils } from "@/packages/spice/src/server";

const Demo = () => {
   return (
      <Float ease={undefined} speed={2} range={"30%"}>
         <div style={{ width: 100, height: 100, background: "red" }}>hoge</div>
      </Float>
   );
};

const Code = () => {
   return (
      <CodeBlock
         code={`<Float ease={utils.Easing.easeInBack} speed={2} range={"40px"}>
         <div style={{ width: 100, height: 100, background: "red" }}>hoge</div>
      </Float>`}
      />
   );
};

const Page = () => {
   return <MainView title="Float" demo={<Demo />} code={<Code />} />;
};

export default Page;
