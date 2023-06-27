import { useEffect, useReducer } from "react";

export function useIsTouchDevice() {
   const [isTouchDevice, setIsTouchDevice] = useReducer(() => {
      const touchEvent = window.ontouchstart;
      const touchPoints = navigator.maxTouchPoints;
      if (touchEvent !== undefined && 0 < touchPoints) {
         return true;
      } else {
         return false;
      }
   }, false);
   useEffect(() => {
      window.addEventListener("resize", setIsTouchDevice, false);
      setIsTouchDevice();
      return () => {
         window.removeEventListener("resize", setIsTouchDevice, false);
      };
   }, []);
   return isTouchDevice;
}
