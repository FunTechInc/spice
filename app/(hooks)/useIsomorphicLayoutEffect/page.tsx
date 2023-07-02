"use client";
import { CodeBlock } from "@/app/_component/CodeBlock";
import { MainView } from "@/app/_component/MainView";

const Description = () => {
   return (
      <>
         <p>よくあるやつ</p>
      </>
   );
};

const Code = () => {
   return (
      <>
         <CodeBlock
            code={`export const useIsomorphicLayoutEffect =
typeof document !== "undefined" ? useLayoutEffect : useEffect;`}
         />
      </>
   );
};

const Page = () => {
   return (
      <MainView
         title="useIsomorphicLayoutEffect()"
         description={<Description />}
         code={<Code />}
      />
   );
};

export default Page;
