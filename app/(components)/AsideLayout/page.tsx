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

const Page = () => {
   return <MainView title="AsideLayout" description={<Description />} />;
};

export default Page;
