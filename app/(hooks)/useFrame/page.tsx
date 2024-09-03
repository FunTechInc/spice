"use client";

import { CodeBlock } from "@/app/_component/CodeBlock";
import { MainView } from "@/app/_component/MainView";
import { useFrame } from "@/packages/spice/src/client";

const Description = () => {
   return (
      <ul>
         <li>
            Add callbacks to `gsap.ticker`. Automatically `remove` on
            unmounting.
         </li>
      </ul>
   );
};
const Demo = () => {
   useFrame((t, d) => {
      console.log(t, d);
   });
   return <p>console log</p>;
};

const Code = () => {
   return (
      <>
         <CodeBlock
            code={`useFrame((t, d) => {
      console.log(t, d);
   });`}
         />
      </>
   );
};

const Page = () => {
   return (
      <MainView
         title="useFrame()"
         description={<Description />}
         demo={<Demo />}
         code={<Code />}
      />
   );
};

export default Page;
