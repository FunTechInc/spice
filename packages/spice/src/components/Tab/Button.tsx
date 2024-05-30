import { useCallback } from "react";
import { useSetTabState, useTabState } from "./Context";

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
   const setTabState = useSetTabState();
   const tabState = useTabState();

   const clickHandler = useCallback(() => {
      if (tabState.current === value || tabState.isLeaving) {
         return;
      }
      setTabState((state) => {
         return {
            ...state,
            isLeaving: true,
            isAnimation: true,
            prev: state.current,
            next: value,
         };
      });
   }, [setTabState, tabState, value]);

   return (
      <button
         onClick={clickHandler}
         role="tab"
         aria-controls={`tab-${value}`}
         aria-selected={tabState.current === value}
         {...rest}>
         {children}
      </button>
   );
};
