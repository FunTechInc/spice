"use client";
import { CodeBlock } from "@/app/_component/CodeBlock";
import { MainView } from "@/app/_component/MainView";
import { useIsTouchDevice } from "@/packages/spice/src/client";

const Description = () => {
   return (
      <ul>
         <li>It determines whether the device is a touch device or not.</li>
         <li>When the determination switches, the state is updated.</li>
      </ul>
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
