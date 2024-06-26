import { useEffect, useRef } from "react";
import { useTabState, useSetTabState } from "./Context";
import { promiseMaker } from "../../utils/promiseMaker";
import { setTabIndex } from "../../utils/setTabIndex";

export type ContentProps = {
   /** Please make sure to set it with the value of the Button component. */
   value: string;
   onOpen?: (target: Element) => void;
   onClose?: (target: Element) => void;
   /** callback if isAnimation is false when use useTabSwitch */
   onReset?: (target: Element) => void;
} & React.HTMLAttributes<HTMLDivElement>;

export const Content = ({
   children,
   value,
   onOpen,
   onClose,
   onReset,
   style,
   ...rest
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
            onReset && onReset(ref.current!);
         }
         return;
      }

      if (tabState.prev === value) {
         (async () => {
            onClose && (await promiseMaker(onClose(ref.current!)));
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
         onOpen && onOpen(ref.current!);
      }
   }, [tabState, setTabState, onOpen, onClose, onReset, value, isCurrent]);

   useEffect(() => {
      setTabIndex({
         content: ref.current!,
         isOpen: tabState.current === value,
      });
   }, [tabState, value]);

   return (
      <div
         ref={ref}
         style={{
            ...(tabState.current !== value
               ? {
                    pointerEvents: "none",
                    position: "absolute",
                    visibility: "hidden",
                    opacity: 0,
                    display: "none",
                 }
               : {}),
            ...style,
         }}
         role="tabpanel"
         id={`tab-${value}`}
         aria-hidden={tabState.current !== value}
         {...rest}>
         {children}
      </div>
   );
};
