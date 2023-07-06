import { CodeBlock } from "@/app/_component/CodeBlock";
import { MainView } from "@/app/_component/MainView";

const Description = () => {
   return (
      <ul>
         <li>
            When wrapping with WrapperLayout, setting isSticky to true will
            remove the overflow from the wrapper.
         </li>
      </ul>
   );
};

const Code = () => {
   return (
      <>
         <CodeBlock
            code={`interface IAsideLayout {
   className?: string;
   children: React.ReactNode;
   aside: {
      chidren: React.ReactNode;
      className?: string;
      index: 0 | 1;
   };
   isSticky: boolean;
}`}
         />
      </>
   );
};

const Page = () => {
   return (
      <MainView
         title="WrapperLayout"
         description={<Description />}
         code={<Code />}
      />
   );
};

export default Page;
