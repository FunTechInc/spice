import { useReducer, useRef } from "react";
import { useIsomorphicLayoutEffect } from "../useIsomorphicLayoutEffect";

const SCROLL_ACTION = "scroll";
type TState = "down" | "up" | null;
type TScrollType = { type: typeof SCROLL_ACTION; payload: TState };

interface IUseScrollDirection {
   threshold: number;
   debounce: number;
   dependencies?: any[];
}

export const useScrollDirection = ({
   threshold = 0,
   debounce,
   dependencies = [],
}: IUseScrollDirection) => {
   /*===============================================
	To avoid unnecessary rendering, retain the state value in the ref.
	===============================================*/
   const directionRef = useRef<TState>(null);
   /*===============================================
	set Reducer
	===============================================*/
   const [direction, setDirection] = useReducer(
      (state: TState, action: TScrollType) => {
         switch (action.type) {
            case SCROLL_ACTION:
               directionRef.current = action.payload;
               return action.payload;
            default:
               return state;
         }
      },
      directionRef.current
   );
   /*===============================================
	Determine up and down by comparing the previous position and the current one.
	===============================================*/
   const lastScrollY = useRef(0);
   const timeoutID = useRef<NodeJS.Timeout | number>(0);
   const getScrollPos = () => {
      return window.scrollY || document.documentElement.scrollTop;
   };
   const scrollHandler = () => {
      clearTimeout(timeoutID.current);
      timeoutID.current = setTimeout(() => {
         const currentScrollY = getScrollPos();
         if (
            currentScrollY > lastScrollY.current + threshold &&
            directionRef.current !== "down"
         ) {
            setDirection({ type: SCROLL_ACTION, payload: "down" });
         } else if (
            currentScrollY < lastScrollY.current - threshold &&
            directionRef.current !== "up"
         ) {
            setDirection({ type: SCROLL_ACTION, payload: "up" });
         }
         lastScrollY.current = currentScrollY;
      }, debounce);
   };
   useIsomorphicLayoutEffect(() => {
      lastScrollY.current = getScrollPos();
      window.addEventListener("scroll", scrollHandler, { passive: true });
      return () => {
         window.removeEventListener("scroll", scrollHandler);
         clearTimeout(timeoutID.current);
      };
   }, dependencies);
   return direction;
};