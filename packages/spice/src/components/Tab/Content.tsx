import { useEffect, useRef } from "react";
import { useTabState, useSetTabState } from "./Context";
import { promiseMaker } from "../../utils/promiseMaker";
import s from "./spice.module.scss";
import { setTabIndex } from "../../utils/setTabIndex";

interface IContent {
   children: React.ReactNode;
   value: string;
   className?: string;
   callback?: {
      onOpen?: (target: Element) => void;
      onClose?: (target: Element) => void;
      onReset?: (target: Element) => void;
   };
}

/**
 * @param value string Please make sure to set it with the value of the Button component.
 * @param callback onOpen,onClose,onReset(callback if isAnimation is false when use useTabSwitch)
 */
export const Content = ({ children, value, className, callback }: IContent) => {
   if (value === "") {
      throw new Error(
         "Please set the value to something other than an empty string."
      );
   }
   const isFirst = useRef(true);
   const ref = useRef<HTMLDivElement>(null);
   const setTabState = useSetTabState();
   const tabState = useTabState();
   const isCurrent = tabState.current === value && !tabState.isLeaving;
   useEffect(() => {
      if (isFirst.current) {
         isFirst.current = false;
         return;
      }
      /********************
		return if isAnimation is false
		********************/
      if (!tabState.isAnimation) {
         //callback reset event
         if (isCurrent) {
            callback?.onReset && callback.onReset(ref.current!);
         }
         return;
      }
      /********************
		close
		********************/
      if (tabState.prev === value) {
         (async () => {
            callback?.onClose &&
               (await promiseMaker(callback.onClose(ref.current!)));
            setTabState((state) => {
               return {
                  ...state,
                  isLeaving: false,
                  prev: "",
                  current: state.next,
                  next: "",
               };
            });
         })();
      }
      /********************
		open
		********************/
      if (isCurrent) {
         callback?.onOpen && callback.onOpen(ref.current!);
      }
   }, [tabState, setTabState, callback, value, isCurrent]);

   /*===============================================
	control tabIndex
	===============================================*/
   useEffect(() => {
      setTabIndex({
         content: ref.current!,
         isOpen: tabState.current === value,
      });
   }, [tabState, value]);

   return (
      <div
         ref={ref}
         className={`${tabState.current !== value ? s.spice_tab_hidden : ""} ${
            className ? className : ""
         }`}
         role="tabpanel"
         id={`tab-${value}`}
         aria-hidden={tabState.current !== value}>
         {children}
      </div>
   );
};
