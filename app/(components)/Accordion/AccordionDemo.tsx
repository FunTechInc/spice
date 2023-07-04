"use client";

import gsap from "gsap";
import s from "./style.module.scss";
import { Accordion } from "@/packages/spice/src";

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
         className={s.accordion}
         callback={{
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
      />
   );
};
