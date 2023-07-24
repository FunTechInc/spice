import { useSetTabState } from "./Context";

/**
 * @param value target value
 * @param isAnimation boolean
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
