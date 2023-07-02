"use client";
import { CodeBlock } from "@/app/_component/CodeBlock";
import { MainView } from "@/app/_component/MainView";

const Description = () => {
   return (
      <>
         <p>
            WrapperLayout内の子要素の最初のmainタグに対してflex:
            1;が適用される。それによってfooterが常に画面下に固定される。あと、AsideLayoutのisStickyをtrueにすると、overflowが外れるようになってるので、stickyも簡単。
         </p>
      </>
   );
};

const Code = () => {
   return (
      <>
         <CodeBlock
            code={`export const MainWrapper = ({ children }: { children: React.ReactNode }) => {
   return (
      <WrapperLayout>
         <Header></Header>
         <main>
            <MainInner>
               <AsideLayout
                  className={s.wrapper}
                  asideChildren={<AsideNav className={s.nav} />}
                  isSticky={false}>
                  {children}
               </AsideLayout>
            </MainInner>
         </main>
         <Footer></Footer>
      </WrapperLayout>
   );
};
`}
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
