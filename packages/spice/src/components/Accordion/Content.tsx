import { useEffect, useRef, useState } from "react";
import { useAccordionState } from "./Context";
import { useResizeObserver } from "../../hooks/useResizeObserver";
import { setTabIndex } from "../../utils/setTabIndex";

type AccordionToggleEvent = {
   height: number;
   target: HTMLDivElement;
};

export type ContentProps = {
   /** Please make sure to set it with the value of the Button component. */
   value: string;
   onOpen: (props: AccordionToggleEvent) => void;
   onClose: (props: AccordionToggleEvent) => void;
} & React.HTMLAttributes<HTMLDivElement>;

export const Content = ({
   value,
   onOpen,
   onClose,
   children,
   ...rest
}: ContentProps) => {
   if (value === "") {
      throw new Error(
         "Please set the value to something other than an empty string."
      );
   }

   const accordionState = useAccordionState();
   const [isOpen, setIsOpen] = useState<boolean>(() =>
      accordionState.defaultValue.find((val) => val === value) ? true : false
   );
   const isOpenDefault = useRef(isOpen);

   useEffect(() => {
      if (accordionState.target === value) {
         setIsOpen(!isOpen);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [accordionState.target, accordionState.toggle]);

   const isFirst = useRef(true);
   const wrapperRef = useRef<HTMLDivElement>(null);
   const innerRef = useRef<HTMLDivElement>(null);

   useEffect(() => {
      if (isFirst.current) {
         isFirst.current = false;
         return;
      }
      const callbackProps = {
         height: innerRef.current!.getBoundingClientRect().height,
         target: wrapperRef.current!,
      };

      isOpen ? onOpen(callbackProps) : onClose(callbackProps);
   }, [isOpen, onOpen, onClose]);

   useEffect(() => {
      setTabIndex({ content: wrapperRef.current!, isOpen });
   }, [isOpen]);

   useResizeObserver(
      {
         target: innerRef,
         onResize: (entry) => {
            const contentHeight = entry.getBoundingClientRect().height;
            if (isOpen) {
               wrapperRef.current!.style.height = `${contentHeight}px`;
            }
         },
         debounce: 100,
      },
      [isOpen]
   );

   return (
      <div
         ref={wrapperRef}
         style={{
            overflow: "hidden",
            height: isOpenDefault.current ? "auto" : "0px",
         }}
         id={`content-${value}`}
         aria-labelledby={`button-${value}`}
         aria-hidden={!isOpen}>
         <div ref={innerRef} {...rest}>
            {children}
         </div>
      </div>
   );
};
