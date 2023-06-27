"use client";
import { CodeBlock } from "@/app/_component/CodeBlock";
import { MainView } from "@/app/_component/MainView";

const Description = () => {
   return (
      <>
         <p>layout.tsxとかで呼び出す。</p>
      </>
   );
};

const Code = () => {
   return (
      <>
         <CodeBlock
            code={`useStarter({
	reloadThresholds: [960, 560],
	isFixViewportForSmall: true
});`}
         />
      </>
   );
};

const Page = () => {
   return (
      <MainView
         title="useStarter()"
         description={<Description />}
         code={<Code />}
      />
   );
};

export default Page;
