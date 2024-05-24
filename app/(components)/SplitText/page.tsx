import { CodeBlock } from "@/app/_component/CodeBlock";
import { MainView } from "@/app/_component/MainView";
import { SplitText } from "@/packages/spice/src";

const Demo = () => {
   return (
      <div>
         <SplitText text="ほげほげほげほげほげ" />
      </div>
   );
};

const Code = () => {
   return <CodeBlock code={`<SplitText text="ほげほげほげほげほげ" />`} />;
};

const Page = () => {
   return <MainView title="SplitText" demo={<Demo />} code={<Code />} />;
};

export default Page;
