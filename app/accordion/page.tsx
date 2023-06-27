"use client";
import { CodeBlock } from "@/app/_component/CodeBlock";
import { MainView } from "@/app/_component/MainView";
import { AccordionDemo } from "./AccordionDemo";

const Description = () => {
   return (
      <>
         <p>Accordion component</p>
      </>
   );
};

const accordionList = [
   {
      value: "accordion-1",
      buttonTxt: "アコーディオン1",
      contentTxt:
         "コンテンツが入ります。コンテンツが入ります。コンテンツが入ります。コンテンツが入ります。コンテンツが入ります。コンテンツが入ります。コンテンツが入ります。コンテンツが入ります。コンテンツが入ります。コンテンツが入ります。コンテンツが入ります。コンテンツが入ります。コンテンツが入ります。コンテンツが入ります。コンテンツが入ります。コンテンツが入ります。コンテンツが入ります。コンテンツが入ります。コンテンツが入ります。",
   },
   {
      value: "accordion-2",
      buttonTxt: "アコーディオン2",
      contentTxt:
         "コンテンツが入ります。コンテンツが入ります。コンテンツが入ります。コンテンツが入ります。コンテンツが入ります。コンテンツが入ります。コンテンツが入ります。コンテンツが入ります。コンテンツが入ります。コンテンツが入ります。コンテンツが入ります。コンテンツが入ります。コンテンツが入ります。コンテンツが入ります。コンテンツが入ります。コンテンツが入ります。コンテンツが入ります。コンテンツが入ります。コンテンツが入ります。",
   },
];

const Demo = () => {
   const AccordionList = accordionList.map((list, index) => {
      return (
         <AccordionDemo
            isView={index === 0 ? true : false}
            value={list.value}
            key={list.value}
            buttonTxt={list.buttonTxt}
            contentTxt={list.contentTxt}
         />
      );
   });
   return <div>{AccordionList}</div>;
};

const Code = () => {
   return (
      <>
         <CodeBlock
            code={`import gsap from "gsap";
import { Accordion } from "@/packages/spice/src";
import s from "./style.module.scss";

interface IAccordion {
   buttonTxt: string;
   contentTxt: string;
   value: string;
   isView: boolean;
}

type TProps = {
   target: HTMLElement;
   height: number;
};
const accordionEvent = (props: TProps, isOpen: boolean) => {
   gsap.to(props.target, {
      height: isOpen ? props.height : 0,
      duration: 0.6,
      ease: "power3.out",
   });
};

export const AccordionDemo = ({
   buttonTxt,
   contentTxt,
   value,
   isView,
}: IAccordion) => {
   return (
      <Accordion
         isView={isView}
         value={value}
         wrapperClass={s.accordion}
         buttonClass={s.button}
         clickEvent={{
            open: (props) => {
               accordionEvent(props, true);
            },
            close: (props) => {
               accordionEvent(props, false);
            },
         }}
         buttonComponent={
            <div className={s.buttonContent}>
               <p>{buttonTxt}</p>
               <div className={s.icon}>
                  <span></span>
                  <span></span>
               </div>
            </div>
         }
         contentComponent={
            <div className={s.content}>
               <p>{contentTxt}</p>
               <button>
                  コンテンツ内のクリック要素のtabIndexはclose時は自動的に-1になります。
               </button>
            </div>
         }
      />
   );
};
`}
         />
         <p>AccordionDemo.tsx</p>
         <CodeBlock
            code={`const accordionList = [
   {
      value: "accordion-1",
      buttonTxt: "アコーディオン1",
      contentTxt:
         "コンテンツが入ります。コンテンツが入ります。コンテンツが入ります。コンテンツが入ります。コンテンツが入ります。コンテンツが入ります。コンテンツが入ります。コンテンツが入ります。コンテンツが入ります。コンテンツが入ります。コンテンツが入ります。コンテンツが入ります。コンテンツが入ります。コンテンツが入ります。コンテンツが入ります。コンテンツが入ります。コンテンツが入ります。コンテンツが入ります。コンテンツが入ります。",
   },
   {
      value: "accordion-2",
      buttonTxt: "アコーディオン2",
      contentTxt:
         "コンテンツが入ります。コンテンツが入ります。コンテンツが入ります。コンテンツが入ります。コンテンツが入ります。コンテンツが入ります。コンテンツが入ります。コンテンツが入ります。コンテンツが入ります。コンテンツが入ります。コンテンツが入ります。コンテンツが入ります。コンテンツが入ります。コンテンツが入ります。コンテンツが入ります。コンテンツが入ります。コンテンツが入ります。コンテンツが入ります。コンテンツが入ります。",
   },
];

const Demo = () => {
   const AccordionList = accordionList.map((list, index) => {
      return (
         <AccordionDemo
            isView={index === 0 ? true : false}
            value={list.value}
            key={list.value}
            buttonTxt={list.buttonTxt}
            contentTxt={list.contentTxt}
         />
      );
   });
   return <div>{AccordionList}</div>;
};`}
         />
         <p>page.tsx</p>
      </>
   );
};

const Page = () => {
   return (
      <MainView
         title="Accordion"
         description={<Description />}
         demo={<Demo />}
         code={<Code />}
      />
   );
};

export default Page;
