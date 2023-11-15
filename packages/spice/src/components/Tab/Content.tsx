import { useEffect, useRef } from "react";
import { useTabState, useSetTabState } from "./Context";
import { promiseMaker } from "../../utils/promiseMaker";
import s from "./spice.module.scss";
import { setTabIndex } from "../../utils/setTabIndex";

type ContentProps = {
   children: React.ReactNode;
   /** Please make sure to set it with the value of the Button component. */
   value: string;
   className?: string;
   /** onOpen,onClose,onReset(onReset is callback if isAnimation is false when use useTabSwitch) */
   callback?: {
      onOpen?: (target: Element) => void;
      onClose?: (target: Element) => void;
      onReset?: (target: Element) => void;
   };
};

export const Content = ({
   children,
   value,
   className,
   callback,
}: ContentProps) => {
   if (value === "") {
      throw new Error(
         "Please set the value to something other than an empty string."
      );
   }
   const isInitialRender = useRef(true);
   const ref = useRef<HTMLDivElement>(null);
   const setTabState = useSetTabState();
   const tabState = useTabState();
   const isCurrent = tabState.current === value && !tabState.isLeaving;

   useEffect(() => {
      if (isInitialRender.current) {
         isInitialRender.current = false;
         return;
      }

      if (!tabState.isAnimation) {
         if (isCurrent) {
            callback?.onReset && callback.onReset(ref.current!);
         }
         return;
      }

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

      if (isCurrent) {
         callback?.onOpen && callback.onOpen(ref.current!);
      }
   }, [tabState, setTabState, callback, value, isCurrent]);

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
