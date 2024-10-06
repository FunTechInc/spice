import { CodeBlock } from "@/app/_component/CodeBlock";
import { MainView } from "@/app/_component/MainView";
import { SplitText, CustomBreakLineParser } from "@/packages/spice/src/client";

const Demo = () => {
   return (
      <div>
         <p>
            <SplitText
               containerProps={{
                  className: "container",
                  style: {
                     backgroundColor: "lightblue",
                     overflow: "hidden",
                     display: "inline-block",
                  },
               }}
               style={{
                  display: "inline-block",
                  translate: "0 12px",
               }}
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
         </p>
         {/* <p>
            <CustomBreakLineParser
               text={`ほ「げほげ\nほ###br.hoge###げほげほげ`}
            />
         </p> */}
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
