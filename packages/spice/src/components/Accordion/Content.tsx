import { useEffect, useRef, useState } from "react";
import { useAccordionState } from "./Context";
import s from "./spice.module.scss";
import { useResizeObserver } from "../../hooks/useResizeObserver";
import { setTabIndex } from "../../utils/setTabIndex";

/*===============================================
content component
===============================================*/
type TClickHandler = {
   height: number;
   target: HTMLDivElement;
};

interface IContent {
   children: React.ReactNode;
   value: string;
   className?: string;
   callback: {
      open: (props: TClickHandler) => void;
      close: (props: TClickHandler) => void;
   };
}

export const Content = ({ value, callback, children, className }: IContent) => {
   const isFirst = useRef(true);
   const wrapperRef = useRef<HTMLDivElement>(null);
   const innerRef = useRef<HTMLDivElement>(null);
   const accordionState = useAccordionState();
   const isDefaultOpen = accordionState.defaultValue.find(
      (val) => val === value
   )
      ? true
      : false;
   const [isOpen, setIsOpen] = useState<boolean>(isDefaultOpen);
   /*===============================================
	toggle isOpen
	===============================================*/
   useEffect(() => {
      if (accordionState.target === value) {
         setIsOpen(!isOpen);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [accordionState.target, accordionState.toggle]);

   /*===============================================
	callback
	===============================================*/
   useEffect(() => {
      if (isFirst.current) {
         isFirst.current = false;
         return;
      }
      const callbackProps = {
         height: innerRef.current!.getBoundingClientRect().height,
         target: wrapperRef.current!,
      };
      if (isOpen) {
         callback.open(callbackProps);
      } else {
         callback.close(callbackProps);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [isOpen]);

   /*===============================================
	control tabIndex
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
      <div
         ref={wrapperRef}
         className={`${s.spice_accordion_content} ${
            isDefaultOpen ? "" : s.spice_accordion_hidden
         }`}
         id={`content-${value}`}
         aria-labelledby={`button-${value}`}
         aria-hidden={!isOpen}>
         <div ref={innerRef} className={className ? className : ""}>
            {children}
         </div>
      </div>
   );
};
