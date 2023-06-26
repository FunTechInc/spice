import { useRef, useState } from "react";
import { useResizeObserver } from "../../hooks/useResizeObserver";
import { useIsomorphicLayoutEffect } from "../../hooks/useIsomorphicLayoutEffect";
import { setTabIndex } from "./utils/setTabIndex";
import { clickHandler, TClickEvent } from "./utils/clickHandler";
import s from "./spice.module.scss";

interface IAccordion {
   isView?: boolean;
   value: string;
   wrapperClass: string;
   buttonClass: string;
   clickEvent: TClickEvent;
   buttonComponent: React.ReactNode;
   contentComponent: React.ReactNode;
}
export const Accordion = ({
   isView = false,
   value,
   wrapperClass,
   buttonClass,
   clickEvent,
   buttonComponent,
   contentComponent,
}: IAccordion) => {
   const wrapperRef = useRef<HTMLDivElement>(null);
   const innerRef = useRef<HTMLDivElement>(null);
   const [isOpen, toggle] = useState(isView);

   /*===============================================
	Set tabindex to click element in content
	===============================================*/
   useIsomorphicLayoutEffect(() => {
      setTabIndex({ content: wrapperRef.current!, isOpen });
   }, [isOpen]);

   /*===============================================
	observe content area resize 
	===============================================*/
   useResizeObserver({
      targetRef: innerRef,
      callback: (entry) => {
         const contentHeight = entry.getBoundingClientRect().height;
         if (isOpen) {
            wrapperRef.current!.style.height = `${contentHeight}px`;
         }
      },
      dependencies: [isOpen],
      debounce: 10,
   });

   return (
      <div className={wrapperClass}>
         <button
            className={buttonClass}
            onClick={() => {
               /*===============================================
					callback
					===============================================*/
               clickHandler({
                  wrapper: wrapperRef.current!,
                  inner: innerRef.current!,
                  isOpen,
                  clickEvent,
               });
               /*===============================================
					toggle state
					===============================================*/
               toggle((state) => !state);
            }}
            aria-controls={`content-${value}`}
            id={`button-${value}`}
            aria-expanded={isOpen}>
            {buttonComponent}
         </button>
         <div
            ref={wrapperRef}
            className={`${s._accordion_contentWrapper} ${
               isView ? "" : s._accordion_hidden
            }`}
            id={`content-${value}`}
            aria-labelledby={`button-${value}`}
            aria-hidden={!isOpen}>
            <div ref={innerRef}>{contentComponent}</div>
         </div>
      </div>
   );
};
