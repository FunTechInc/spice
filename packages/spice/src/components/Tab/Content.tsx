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
      open?: (target: Element) => void;
      close?: (target: Element) => void;
      reset?: (target: Element) => void;
   };
}

/**
 * @param callback open,close,reset(callback if isAnimation is false when use useTabSwitch)
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
            callback?.reset && callback.reset(ref.current!);
         }
         return;
      }
      /********************
		close
		********************/
      if (tabState.prev === value) {
         (async () => {
            callback?.close &&
               (await promiseMaker(callback.close(ref.current!)));
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
         callback?.open && callback.open(ref.current!);
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
