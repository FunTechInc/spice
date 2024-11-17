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
                     display: "inline-block",
                  },
               }}
               style={{
                  display: "inline-block",
               }}
               exception={[
                  {
                     selector: "「",
                     attributes: {
                        style: {
                           color: "red",
                           fontWeight: "bold",
                        },
                     },
                  },
               ]}>
               {`ほ「げ ほげ\nほ###br.hoge###げほげほげ`}
            </SplitText>
         </p>
         <p>
            <CustomBreakLineParser>
               {`ほ「げほげ\nほ###br.hoge###げほげほげ`}
            </CustomBreakLineParser>
         </p>
      </div>
   );
};

const Code = () => {
   return (
      <CodeBlock
         code={`<SplitText
               containerProps={{
                  className: "container",
                  style: {
                     backgroundColor: "lightblue",
                     display: "inline-block",
                  },
               }}
               style={{
                  display: "inline-block",
               }}
               exception={[
                  {
                     selector: "「",
                     attributes: {
                        style: {
                           color: "red",
                           fontWeight: "bold",
                        },
                     },
                  },
               ]}>
               {\`ほ「げ ほげ\nほ###br.hoge###げほげほげ\`}
            </SplitText>`}
      />
   );
};

const Page = () => {
   return <MainView title="SplitText" demo={<Demo />} code={<Code />} />;
};

export default Page;
