"use client";
import { CodeBlock } from "@/app/_component/CodeBlock";
import { MainView } from "@/app/_component/MainView";
import { useResizeObserver } from "@/packages/spice/src/client";

const Description = () => {
   return (
      <ul>
         <li>watch the resize of the target.</li>
      </ul>
   );
};

const Demo = () => {
   const ref = useResizeObserver({
      onResize: () => {
         console.log("resize");
      },
   });
   return (
      <div
         ref={ref}
         style={{
            width: "50vw",
            height: "200px",
            backgroundColor: "red",
         }}></div>
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
         demo={<Demo />}
      />
   );
};

export default Page;
