"use client";

import { CodeBlock } from "@/app/_component/CodeBlock";
import { MainView } from "@/app/_component/MainView";
import { useAnimationFrame } from "@/packages/spice/src";

import s from "./style.module.scss";

const Description = () => {
   return (
      <>
         <p>引数にFPSを受け取るとそのFPSで制限がかかる</p>
      </>
   );
};
const Demo = () => {
   const rAF = useAnimationFrame(30);
   const playHandler = () => {
      rAF("play", () => {
         console.log("tick");
      });
   };
   const pauseHandler = () => {
      rAF("pause");
   };
   return (
      <>
         <div className={s.btnWrapper}>
            <button onClick={playHandler}>play</button>
            <button onClick={pauseHandler}>pause</button>
         </div>
         <p className={s.note}>ボタンを押すとconsole.logが呼び出されます</p>
      </>
   );
};

const Code = () => {
   return (
      <>
         <CodeBlock
            code={`const rAF = useAnimationFrame(30);
const playHandler = () => {
	rAF("play", () => {
		console.log("tick");
	});
};
const pauseHandler = () => {
	rAF("pause");
};
return (
	<>
		<button onClick={playHandler}>play</button>
		<button onClick={pauseHandler}>pause</button>
	</>
);`}
         />
      </>
   );
};

const Page = () => {
   return (
      <MainView
         title="useAnimationFrame(fps)"
         description={<Description />}
         demo={<Demo />}
         code={<Code />}
      />
   );
};

export default Page;
