"use client";

import { CodeBlock } from "@/app/_component/CodeBlock";
import { MainView } from "@/app/_component/MainView";
import { useShare } from "@/packages/spice/src";
import s from "./index.module.scss";

const Description = () => {
   return (
      <ul>
         <li>share</li>
      </ul>
   );
};

const Demo = () => {
   const { Facebook, X, LINE, share } = useShare({
      shareUrl: "https://google.com/",
   });
   return (
      <div>
         <button>copy</button>
         <button {...X}>Twitter/X</button>
         <button {...share}>instagram</button>
         <button {...Facebook}>facebook</button>
         <button {...LINE}>LINE</button>
      </div>
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
         title="useShare()"
         demo={<Demo />}
         description={<Description />}
         code={<Code />}
      />
   );
};

export default Page;
