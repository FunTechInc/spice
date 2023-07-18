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
      close?: (target: Element) => void;
      open?: (target: Element) => void;
   };
}

export const Content = ({ children, value, className, callback }: IContent) => {
   const isFirst = useRef(true);
   const ref = useRef<HTMLDivElement>(null);
   const setTabState = useSetTabState();
   const tabState = useTabState();
   useEffect(() => {
      if (isFirst.current) {
         isFirst.current = false;
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
      if (tabState.current === value && !tabState.isLeaving) {
         callback?.open && callback.open(ref.current!);
      }
   }, [tabState, setTabState, callback, value]);

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
