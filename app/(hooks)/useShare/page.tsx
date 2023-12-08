"use client";

import { CodeBlock } from "@/app/_component/CodeBlock";
import { MainView } from "@/app/_component/MainView";
import { useShare } from "@/packages/spice/src";
import s from "./index.module.scss";

const Description = () => {
   return (
      <ul>
         <li>hook returns an object with event handlers</li>
      </ul>
   );
};

const Demo = () => {
   const { Facebook, X, LINE, share, copy, isCopied } = useShare({
      shareUrl: "url",
   });
   return (
      <div className={s.buttons}>
         <button {...copy} className={isCopied ? s.copied : ""}>
            copy
         </button>
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
            code={`const Demo = () => {
   const { Facebook, X, LINE, share, copy, isCopied } = useShare({
      shareUrl: "url",
   });
   return (
      <div className={s.buttons}>
         <button {...copy} className={isCopied ? s.copied : ""}>
            copy
         </button>
         <button {...X}>Twitter/X</button>
         <button {...share}>instagram</button>
         <button {...Facebook}>facebook</button>
         <button {...LINE}>LINE</button>
      </div>
   );
};`}
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
