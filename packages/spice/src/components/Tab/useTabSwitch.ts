import { useSetTabState } from "./Context";

/**
 * This is a custom hook that is useful when you want to operate tabs other than Button components.
 * @returns (value: string, isAnimation: boolean)=> void
 * @param value target value
 * @param isAnimation boolean
 * 
 * ```jsx
 * const tabSwitch = Tab.useTabSwitch();
   tabSwitch("tab", true);
	```
 */
export const useTabSwitch = () => {
   const setTabState = useSetTabState();
   return (value: string, isAnimation: boolean) => {
      setTabState((state) => {
         return {
            isAnimation: isAnimation,
            isLeaving: isAnimation,
            prev: isAnimation ? state.current : "",
            current: isAnimation ? state.current : value,
            next: isAnimation ? value : "",
         };
      });
   };
};
