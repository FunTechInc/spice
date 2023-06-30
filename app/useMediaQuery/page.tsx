"use client";
import { CodeBlock } from "@/app/_component/CodeBlock";
import { MainView } from "@/app/_component/MainView";
import { useMediaQuery } from "@/packages/spice/src";

const Description = () => {
   return (
      <>
         <p>useMediaQuery</p>
      </>
   );
};

const Code = () => {
   const isMatch = useMediaQuery({
      type: "max",
      width: 960,
   });

   const match = () => {
      if (isMatch === null) {
         return;
      }
      return isMatch ? "true" : "false";
   };

   return (
      <>
         <CodeBlock
            code={`const isMatch = useMediaQuery({
	type: "max",
	width: 960,
});`}
         />
         <p>return:{match()}</p>
      </>
   );
};

const Page = () => {
   return (
      <MainView
         title="useMediaQuery()"
         description={<Description />}
         code={<Code />}
      />
   );
};

export default Page;
