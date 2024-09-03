import { CodeBlock } from "@/app/_component/CodeBlock";
import { MainView } from "@/app/_component/MainView";
import { SplitText } from "@/packages/spice/src/client";

const Demo = () => {
   return (
      <div>
         <SplitText
            exception={[
               {
                  selector: "「",
                  attributes: {
                     style: {
                        color: "red",
                        marginLeft: "-.5em",
                     },
                  },
               },
            ]}
            text={`ほ「げほげ\nほ###br.hoge###げほげほげ`}
         />
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
