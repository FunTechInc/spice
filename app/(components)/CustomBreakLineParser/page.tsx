import { CodeBlock } from "@/app/_component/CodeBlock";
import { MainView } from "@/app/_component/MainView";
import { CustomBreakLineParser } from "@/packages/spice/src";


const testContent = "Hello World\nThis is a test###br.customClass###with custom breaks###br###and normal breaks.";

const Description = () => {
   return (      
      <ul>
         <li>The CustomBreakLineParser component is a React utility that converts specific text markers into HTML line breaks. </li>         
         <li>It supports standard breaks using \n or ###br### and custom breaks with CSS classes like ###br.className###.</li>         
         <li>This allows for dynamic text formatting and easy styling of content within React applications.</li>
      </ul>      
   );
};

const Demo = () => {
   return (
      <div style={{ width: "400px" }}>         
         <h2 style={{fontSize: '24px', margin: '30px 0 10px', fontWeight: 700}}>Original Text</h2>
         <p>{testContent}</p>
         <br />
         <h2 style={{fontSize: '24px', margin: '30px 0 10px', fontWeight: 700}}>Formatted Text</h2>
         <CustomBreakLineParser content={testContent} />
      </div>
   );
};

const Code = () => {
   return (
      <CodeBlock
         code={`<CustomBreakLineParser content={'${testContent}'} />`}
      />
   );
};

const Page = () => {
   return (
      <MainView title="CustomBreakLineParser" description={<Description />} demo={<Demo />} code={<Code />} />
   );
};

export default Page;
