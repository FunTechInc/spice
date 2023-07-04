import { CodeBlock } from "@/app/_component/CodeBlock";
import { MainView } from "@/app/_component/MainView";

const Description = () => {
   return (
      <ul>
         <li>
            one purpose, one spice. You can use it by loading a single component
            or hook for a single purpose.
         </li>
         <li>
            spice components do not operate by default. It is assumed that you
            will customize the animation in the callback.
         </li>
      </ul>
   );
};

const Code = () => {
   return (
      <>
         <CodeBlock code="npm i @funtech-inc/spice" />
         <p>install</p>
         <CodeBlock code={`import "@funtech-inc/spice/css";`} />
         <p>import css</p>
      </>
   );
};

export const HomeContent = () => {
   return (
      <MainView
         title="(hidden)spice"
         description={<Description />}
         code={<Code />}
      />
   );
};
