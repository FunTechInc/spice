"use client";
import { CodeBlock } from "@/app/_component/CodeBlock";
import { MainView } from "@/app/_component/MainView";

const Description = () => {
   return (
      <>
         <p>
            callbackはリサイズ後の画面サイズと、読み込み時点での初期の画面幅を受け取る。読み込み時点より広がったかどうかの分岐を作りたい場合などに。
         </p>
      </>
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
