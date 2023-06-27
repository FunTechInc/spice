"use client";
import { CodeBlock } from "@/app/_component/CodeBlock";
import { MainView } from "@/app/_component/MainView";

const Description = () => {
   return (
      <>
         <p>
            WrapperLayoutでwrapしてる場合、isStickyをtrueにするとwrapperのoverflowが外れる。
         </p>
      </>
   );
};

const Code = () => {
   return (
      <>
         <CodeBlock
            code={`<AsideLayout
	className={s.wrapper}
	asideChildren={<AsideNav className={s.nav} />}
	isSticky={false}>
	{children}
</AsideLayout>`}
         />
      </>
   );
};

const Page = () => {
   return (
      <MainView
         title="WrapperLayout"
         description={<Description />}
         code={<Code />}
      />
   );
};

export default Page;
