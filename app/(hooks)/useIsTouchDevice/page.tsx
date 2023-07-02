"use client";
import { CodeBlock } from "@/app/_component/CodeBlock";
import { MainView } from "@/app/_component/MainView";
import { useIsTouchDevice } from "@/packages/spice/src";

const Description = () => {
   return (
      <>
         <p>touchデバイスの判定</p>
      </>
   );
};

const Code = () => {
   const isTouch = useIsTouchDevice();
   const match = () => {
      if (isTouch === null) {
         return;
      }
      return isTouch ? "true" : "false";
   };
   return (
      <>
         <CodeBlock
            code={`const isTouch = useIsTouchDevice(); //return boolean`}
         />
         <p>return: {match()}</p>
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
