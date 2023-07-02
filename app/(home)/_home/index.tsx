import { CodeBlock } from "@/app/_component/CodeBlock";
import { MainView } from "@/app/_component/MainView";

const Description = () => {
   return (
      <>
         <p>one aim, one spice</p>
      </>
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
