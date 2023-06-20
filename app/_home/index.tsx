import { CodeBlock } from "@/app/_component/CodeBlock";
import { MainView } from "@/app/_component/MainView";

const Description = () => {
   return (
      <>
         <p>one aim, one spice</p>
      </>
   );
};
const Demo = () => {
   return <h1>Demo</h1>;
};

const Code = () => {
   return (
      <>
         <h2>install</h2>
         <CodeBlock code="npm i @funtech-inc/spice" />
         <CodeBlock code={`<CodeBlock code="hogehoge" />`} />
         <p>
            コメントコメントコメントコメントコメントコメントコメントコメントコメント
            コメント コメント コメント コメント コメント コメント
         </p>
         <CodeBlock code="hogehoge" />
      </>
   );
};

export const HomeContent = () => {
   return (
      <MainView
         title="(hidden)spice"
         description={<Description />}
         demo={<Demo />}
         code={<Code />}
      />
   );
};
