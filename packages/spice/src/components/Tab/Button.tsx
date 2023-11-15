import { useCallback } from "react";
import { useSetTabState, useTabState } from "./Context";

type ButtonProps = {
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
         className={className ? className : ""}
         role="tab"
         aria-controls={`tab-${value}`}
         aria-selected={tabState.current === value}>
         {children}
      </button>
   );
};
