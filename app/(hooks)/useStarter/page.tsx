"use client";
import { CodeBlock } from "@/app/_component/CodeBlock";
import { MainView } from "@/app/_component/MainView";

const Description = () => {
   return (
      <ul>
         <li>
            It loads settings to fix the ratio when a resize reload is executed
            and the screen width is 360px or less.
         </li>
      </ul>
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
