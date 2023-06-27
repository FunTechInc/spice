"use client";
import { CodeBlock } from "@/app/_component/CodeBlock";
import { MainView } from "@/app/_component/MainView";

const Description = () => {
   return (
      <>
         <p>touchデバイスの判定</p>
      </>
   );
};

const Code = () => {
   return (
      <>
         <CodeBlock
            code={`const isTouch = useIsTouchDevice(); //return boolean`}
         />
      </>
   );
};

const Page = () => {
   return (
      <MainView
         title="useIsTouchDevice()"
         description={<Description />}
         code={<Code />}
      />
   );
};

export default Page;
