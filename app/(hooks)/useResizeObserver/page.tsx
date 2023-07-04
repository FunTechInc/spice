"use client";
import { CodeBlock } from "@/app/_component/CodeBlock";
import { MainView } from "@/app/_component/MainView";

const Description = () => {
   return (
      <ul>
         <li>watch the resize of the target.</li>
      </ul>
   );
};

const Code = () => {
   return (
      <>
         <CodeBlock
            code={`useResizeObserver({
	targetRef: targetRef,
	callback: (entry) => {
		console.log(entry)
	},
	dependencies: [],
	debounce: 100,
});`}
         />
      </>
   );
};

const Page = () => {
   return (
      <MainView
         title="useResizeObserver()"
         description={<Description />}
         code={<Code />}
      />
   );
};

export default Page;
