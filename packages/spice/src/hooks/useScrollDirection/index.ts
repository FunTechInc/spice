"use client";

import { useReducer, useRef, useEffect, useCallback } from "react";

type ActionType = "down" | "up" | null;
type ScrollType = { type: typeof SCROLL_ACTION; payload: ActionType };

type UseScrollDirectionProps = {
   /** default:0 */
   threshold?: number;
   /** default:10 */
   debounce?: number;
   dependencies?: any[];
};

const SCROLL_ACTION = "scroll";

export const useScrollDirection = ({
   threshold = 0,
   debounce = 10,
   dependencies = [],
}: UseScrollDirectionProps) => {
   const directionRef = useRef<ActionType>(null);

   const [direction, setDirection] = useReducer(
      (state: ActionType, action: ScrollType) => {
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

   const lastScrollY = useRef(0);
   const timeoutID = useRef<NodeJS.Timeout | number>(0);
   const getScrollPos = () =>
      window.scrollY || document.documentElement.scrollTop;

   const scrollHandler = useCallback(() => {
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
   }, [debounce, threshold]);

   useEffect(() => {
      lastScrollY.current = getScrollPos();
      window.addEventListener("scroll", scrollHandler, { passive: true });
      return () => {
         window.removeEventListener("scroll", scrollHandler);
         clearTimeout(timeoutID.current);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, dependencies);

   return direction;
};
