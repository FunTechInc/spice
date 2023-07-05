import { useRef, useState, useEffect } from "react";
import { useResizeObserver } from "../../hooks/useResizeObserver";
import { setTabIndex } from "./utils/setTabIndex";
import { clickHandler, TCallback } from "./utils/clickHandler";
import s from "./spice.module.scss";

interface IAccordion {
   isView?: boolean;
   value: string;
   className?: string;
   callback: TCallback;
   button: {
      children: React.ReactNode;
      className?: string;
   };
   content: {
      children: React.ReactNode;
      className?: string;
   };
}

export const Accordion = ({
   isView = false,
   value,
   className,
   button,
   callback,
   content,
}: IAccordion) => {
   const wrapperRef = useRef<HTMLDivElement>(null);
   const innerRef = useRef<HTMLDivElement>(null);
   const [isOpen, toggle] = useState(isView);

   /*===============================================
	Set tabindex to click element in content
	===============================================*/
   useEffect(() => {
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
      debounce: 100,
   });

   return (
      <div className={className ? className : ""}>
         <button
            className={button.className ? button.className : ""}
            onClick={() => {
               /*===============================================
					callback
					===============================================*/
               clickHandler({
                  wrapper: wrapperRef.current!,
                  inner: innerRef.current!,
                  isOpen,
                  callback,
               });
               /*===============================================
					toggle state
					===============================================*/
               toggle((state) => !state);
            }}
            aria-controls={`content-${value}`}
            id={`button-${value}`}
            aria-expanded={isOpen}>
            {button.children}
         </button>
         <div
            ref={wrapperRef}
            className={`${s.spice_accordion_contentWrapper} ${
               isView ? "" : s.spice_accordion_hidden
            }`}
            id={`content-${value}`}
            aria-labelledby={`button-${value}`}
            aria-hidden={!isOpen}>
            <div
               ref={innerRef}
               className={content.className ? content.className : ""}>
               {content.children}
            </div>
         </div>
      </div>
   );
};
