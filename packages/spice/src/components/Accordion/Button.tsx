import { useState } from "react";
import { useAccordionState, useSetAccordionState } from "./Context";

interface IButton {
   children: React.ReactNode;
   value: string;
   className?: string;
}

export const Button = ({ children, value, className }: IButton) => {
   if (value === "") {
      throw new Error(
         "Please set the value to something other than an empty string."
      );
   }
   const accordionState = useAccordionState();
   const setAccordionState = useSetAccordionState();
   const isDefaultOpen = accordionState.defaultValue.find(
      (val) => val === value
   )
      ? true
      : false;
   const [isOpen, setIsOpen] = useState<boolean>(isDefaultOpen);
   return (
      <button
         className={className ? className : ""}
         onClick={() => {
            setAccordionState((state) => {
               return {
                  ...state,
                  toggle: isOpen,
                  target: value,
               };
            });
            setIsOpen(!isOpen);
         }}
         aria-controls={`content-${value}`}
         id={`button-${value}`}
         aria-expanded={isOpen}>
         {children}
      </button>
   );
};
