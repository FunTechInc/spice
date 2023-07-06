import { CodeBlock } from "@/app/_component/CodeBlock";
import { MainView } from "@/app/_component/MainView";

const Description = () => {
   return (
      <ul>
         <li>It monitors screen resizing.</li>
         <li>
            The callback receives the screen size after resizing and the initial
            screen width at the time of loading. This can be used when you want
            to create a branch to determine whether the screen has expanded
            compared to the loading point.
         </li>
      </ul>
   );
};

const Code = () => {
   return (
      <>
         <CodeBlock
            code={`interface IUseWindowResizeObserver {
	callback: ({
		winW,
		winH,
		initWinW,
	}: {
		winW: number;
		winH: number;
		initWinW: number;
	}) => void;
	debounce: number;
	dependencies?: any[];
}`}
         />
      </>
   );
};

const Page = () => {
   return (
      <MainView
         title="useWindowResizeObserver()"
         description={<Description />}
         code={<Code />}
      />
   );
};

export default Page;
