import { CodeBlock } from "@/app/_component/CodeBlock";
import { MainView } from "@/app/_component/MainView";

const Description = () => {
   return (
      <ul>
         <li>
            The first main tag of the child elements within WrapperLayout has
            flex: 1; applied, allowing the footer to always be fixed at the
            bottom of the screen.
         </li>
         <li>
            If you set isSticky to true in AsideLayout, overflow is disabled,
            making sticky positioning simple.
         </li>
      </ul>
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
