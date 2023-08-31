import { CodeBlock } from "@/app/_component/CodeBlock";
import { MainView } from "@/app/_component/MainView";

const Description = () => {
   return (
      <ul>
         <li>
            The first main tag of the child elements within WrapperLayout has
            flex: 1; applied, allowing the footer to always be fixed at the
            bottom of the screen.
         </li>
         <li>
            If you set isSticky to true in AsideLayout, overflow is disabled,
            making sticky positioning simple.
         </li>
      </ul>
   );
};

const Page = () => {
   return <MainView title="WrapperLayout" description={<Description />} />;
};

export default Page;
