import { useSetTabState, useTabState } from "./Context";

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
   const setTabState = useSetTabState();
   const tabState = useTabState();
   const clickHandler = () => {
      if (tabState.current === value || tabState.isLeaving) {
         return;
      }
      setTabState((state) => {
         return {
            ...state,
            isLeaving: true,
            prev: state.current,
            next: value,
         };
      });
   };
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
