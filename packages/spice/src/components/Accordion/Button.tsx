import { useState } from "react";
import { useAccordionState, useSetAccordionState } from "./Context";

export type ButtonProps = {
   /** Please make sure to set it with the value of the Content component. */
   value: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, value, ...rest }: ButtonProps) => {
   if (value === "") {
      throw new Error(
         "Please set the value to something other than an empty string."
      );
   }
   const accordionState = useAccordionState();
   const setAccordionState = useSetAccordionState();

   const [isOpen, setIsOpen] = useState<boolean>(() =>
      accordionState.defaultValue.find((val) => val === value) ? true : false
   );
   return (
      <button
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
         aria-expanded={isOpen}
         {...rest}>
         {children}
      </button>
   );
};
