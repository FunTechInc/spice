"use client";

import { CodeBlock } from "@/app/_component/CodeBlock";
import { MainView } from "@/app/_component/MainView";
import { useValidElement } from "@/packages/spice/src/client";
import { useRef, useEffect, useLayoutEffect } from "react";

const Description = () => {
   return (
      <ul>
         <li>
            When passing a reference to a parent component's Element to a child
            component, it cannot be referenced by the child component's
            `useLayoutEffect` due to the rendering order. The `useGSAP` uses
            `useLayoutEffect` and therefore gets the reference with
            `useValidElement`.
         </li>
      </ul>
   );
};

const Parent = () => {
   const ref =
      useRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement>;

   useLayoutEffect(() => {
      console.log(ref.current, "parent useLayoutEffect"); // valid
   }, []);

   useEffect(() => {
      console.log(ref.current, "parent useEffect"); // valid
   }, []);

   return (
      <div ref={ref}>
         <Child trigger={ref} />
      </div>
   );
};

const Child = ({ trigger }: { trigger: React.RefObject<HTMLDivElement> }) => {
   useLayoutEffect(() => {
      if (!trigger.current) return;
      console.log(trigger.current, "child useLayoutEffect"); // undefined
   }, [trigger]);

   useEffect(() => {
      if (!trigger.current) return;
      console.log(trigger.current, "child useEffect"); // valid
   }, [trigger]);

   const validElement = useValidElement(trigger);
   useLayoutEffect(() => {
      if (!validElement) return;
      console.log(validElement, "child useLayoutEffect useValid"); // valid
   }, [validElement]);

   useEffect(() => {
      if (!validElement) return;
      console.log(validElement, "child useEffect useValid"); // valid
   }, [validElement]);

   return <div>console...</div>;
};

const Demo = () => {
   return <Parent />;
};

const Code = () => {
   return (
      <>
         <CodeBlock
            code={`const Child = ({ trigger }: { trigger: React.RefObject<HTMLDivElement> }) => {
   useLayoutEffect(() => {
      if (!trigger.current) return;
      console.log(trigger.current, "child useLayoutEffect"); // undefined
   }, [trigger]);

   useEffect(() => {
      if (!trigger.current) return;
      console.log(trigger.current, "child useEffect"); // valid
   }, [trigger]);

   const validElement = useValidElement(trigger);
   useLayoutEffect(() => {
      if (!validElement) return;
      console.log(validElement, "child useLayoutEffect useValid"); // valid
   }, [validElement]);

   useEffect(() => {
      if (!validElement) return;
      console.log(validElement, "child useEffect useValid"); // valid
   }, [validElement]);

   return <div></div>;
};`}
         />
      </>
   );
};

const Page = () => {
   return (
      <MainView
         title="useValidElement()"
         description={<Description />}
         demo={<Demo />}
         code={<Code />}
      />
   );
};

export default Page;
