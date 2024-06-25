"use client";

import { CodeBlock } from "@/app/_component/CodeBlock";
import { MainView } from "@/app/_component/MainView";
import { Accordion } from "@/packages/spice/src";
import s from "./style.module.scss";
import { gsap } from "gsap";

const Description = () => {
   return (
      <ul>
         <li>
            Since the callback returns a target, you can freely animate it with
            GSAP or similar.
         </li>
         <li>If you set isView to true, it will be in an open state.</li>
      </ul>
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

const accordionEvent = (
   props: {
      target: HTMLElement;
      height: number;
   },
   isOpen: boolean
) => {
   gsap.to(props.target, {
      height: isOpen ? props.height : 0,
      duration: 0.6,
      ease: "power3.out",
   });
};

const Demo = () => {
   return (
      <Accordion.Context defaultValue={["accordion-1"]}>
         {accordionList.map((list) => (
            <div key={list.value} className={s.accordion}>
               <Accordion.Button value={list.value} className={s.button}>
                  <div className={s.buttonContent}>
                     <p>{list.buttonTxt}</p>
                     <div className={s.icon}>
                        <span></span>
                        <span></span>
                     </div>
                  </div>
               </Accordion.Button>
               <Accordion.Content
                  value={list.value}
                  onOpen={(props) => {
                     accordionEvent(props, true);
                  }}
                  onClose={(props) => {
                     accordionEvent(props, false);
                  }}>
                  <div className={s.content}>
                     <p>{list.contentTxt}</p>
                     <button>
                        コンテンツ内のクリック要素のtabIndexはclose時は自動的に-1になります。
                     </button>
                  </div>
               </Accordion.Content>
            </div>
         ))}
      </Accordion.Context>
   );
};

const Code = () => {
   return (
      <CodeBlock
         code={`const Demo = () => {
   return (
      <Accordion.Context defaultValue={["accordion-1"]}>
         {accordionList.map((list) => (
            <div key={list.value} className={s.accordion}>
               <Accordion.Button value={list.value} className={s.button}>
                  <div className={s.buttonContent}>
                     <p>{list.buttonTxt}</p>
                     <div className={s.icon}>
                        <span></span>
                        <span></span>
                     </div>
                  </div>
               </Accordion.Button>
               <Accordion.Content
                  value={list.value}
                  onOpen={(props) => {
                     accordionEvent(props, true);
                  }}
                  onClose={(props) => {
                     accordionEvent(props, false);
                  }}>
                  <div className={s.content}>
                     <p>{list.contentTxt}</p>
                     <button>
                        コンテンツ内のクリック要素のtabIndexはclose時は自動的に-1になります。
                     </button>
                  </div>
               </Accordion.Content>
            </div>
         ))}
      </Accordion.Context>
   );
};
`}
      />
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
