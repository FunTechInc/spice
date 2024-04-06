import { useMemo, useState } from "react";
import { useAccordionState, useSetAccordionState } from "./Context";

export type ButtonProps = {
   children: React.ReactNode;
   /** Please make sure to set it with the value of the Content component. */
   value: string;
   className?: string;
};

export const Button = ({ children, value, className }: ButtonProps) => {
   if (value === "") {
      throw new Error(
         "Please set the value to something other than an empty string."
      );
   }
   const accordionState = useAccordionState();
   const setAccordionState = useSetAccordionState();

   const isDefaultOpen = useMemo(
      () =>
         accordionState.defaultValue.find((val) => val === value)
            ? true
            : false,
      [accordionState, value]
   );

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
