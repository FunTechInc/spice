"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useAccordionState } from "./Context";
import { useResizeObserver } from "../../hooks/useResizeObserver";
import { setTabIndex } from "../../utils/setTabIndex";

type ClickHandler = {
   height: number;
   target: HTMLDivElement;
};

export type ContentProps = {
   children: React.ReactNode;
   /** Please make sure to set it with the value of the Button component. */
   value: string;
   className?: string;
   /** onOpen,onClose */
   callback: {
      onOpen: (props: ClickHandler) => void;
      onClose: (props: ClickHandler) => void;
   };
};

export const Content = ({
   value,
   callback,
   children,
   className,
}: ContentProps) => {
   if (value === "") {
      throw new Error(
         "Please set the value to something other than an empty string."
      );
   }

   const accordionState = useAccordionState();
   const isDefaultOpen = useMemo(
      () =>
         accordionState.defaultValue.find((val) => val === value)
            ? true
            : false,
      [accordionState, value]
   );
   const [isOpen, setIsOpen] = useState<boolean>(isDefaultOpen);

   useMemo(() => {
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

      isOpen ? callback.onOpen(callbackProps) : callback.onClose(callbackProps);
   }, [isOpen, callback]);

   useEffect(() => {
      setTabIndex({ content: wrapperRef.current!, isOpen });
   }, [isOpen]);

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
         style={{
            overflow: "hidden",
            height: isDefaultOpen ? "auto" : "0px",
         }}
         id={`content-${value}`}
         aria-labelledby={`button-${value}`}
         aria-hidden={!isOpen}>
         <div ref={innerRef} className={className ? className : ""}>
            {children}
         </div>
      </div>
   );
};
