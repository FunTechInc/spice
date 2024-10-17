"use client";

import { CodeBlock } from "@/app/_component/CodeBlock";
import { MainView } from "@/app/_component/MainView";
import { useOnHovering } from "@/packages/spice/src/client";

const Description = () => {
   return (
      <ul>
         <li>onHovering()</li>
      </ul>
   );
};
const Demo = () => {
   const bind = useOnHovering((e) => {
      console.log(e);
   });

   return (
      <div
         {...bind}
         style={{ width: "200px", height: "200px", background: "blue" }}>
         hover
      </div>
   );
};

const Code = () => {
   return (
      <>
         <CodeBlock
            code={`const bind = useOnHovering((e) => {
      console.log(e);
   });

   return (
      <div
         {...bind}
         style={{ width: "200px", height: "200px", background: "blue" }}>
         hover
      </div>
   );`}
         />
      </>
   );
};

const Page = () => {
   return (
      <MainView
         title="useOnHovering()"
         description={<Description />}
         demo={<Demo />}
         code={<Code />}
      />
   );
};

export default Page;
