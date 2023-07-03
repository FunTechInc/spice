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
            code={`interface IAccordion {
   isView?: boolean;
   value: string;
   className: string;
   clickEvent: TClickEvent;
   button: {
      children: React.ReactNode;
      className?: string;
   };
   content: {
      children: React.ReactNode;
      className?: string;
   };
}`}
         />
         <CodeBlock
            code={`<Accordion
	isView={isView}
	value={value}
	className={s.accordion}
	clickEvent={{
		open: (props) => {
			accordionEvent(props, true);
		},
		close: (props) => {
			accordionEvent(props, false);
		},
	}}
	button={{
		children: (
			<div className={s.buttonContent}>
				<p>{buttonTxt}</p>
				<div className={s.icon}>
					<span></span>
					<span></span>
				</div>
			</div>
		),
		className: s.button,
	}}
	content={{
		children: (
			<div className={s.content}>
				<p>{contentTxt}</p>
				<button>
					コンテンツ内のクリック要素のtabIndexはclose時は自動的に-1になります。
				</button>
			</div>
		),
	}}
/>`}
         />
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
