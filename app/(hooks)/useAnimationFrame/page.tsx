"use client";

import { CodeBlock } from "@/app/_component/CodeBlock";
import { MainView } from "@/app/_component/MainView";
import { useAnimationFrame } from "@/packages/spice/src";

import s from "./style.module.scss";

const Description = () => {
   return (
      <ul>
         <li>It internally calls requestAnimationFrame.</li>
         <li>If you pass FTP, it will limit the frame rate.</li>
      </ul>
   );
};
const Demo = () => {
   const rAF = useAnimationFrame(10);
   const playHandler = () => {
      rAF("play", (timestamp) => {
         console.log(timestamp);
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
