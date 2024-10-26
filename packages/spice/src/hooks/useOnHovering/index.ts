"use client";

import { useCallback, useRef, useState } from "react";
import { useFrame } from "../useFrame";

export const useOnHovering = (
   onHovering: (e: React.PointerEvent) => void
): {
   onPointerEnter: (e: React.PointerEvent) => void;
   onPointerLeave: () => void;
   onPointerMove: (e: React.PointerEvent) => void;
} => {
   const [isHovering, setIsHovering] = useState(false);
   const pointerEvent = useRef<React.PointerEvent>();

   useFrame(() => {
      if (isHovering && pointerEvent.current) {
         onHovering(pointerEvent.current);
      }
   });

   const onPointerEnter = useCallback((e: React.PointerEvent) => {
      pointerEvent.current = e;
      setIsHovering(true);
   }, []);
   const onPointerLeave = useCallback(() => {
      pointerEvent.current = undefined;
      setIsHovering(false);
   }, []);
   const onPointerMove = useCallback((e: React.PointerEvent) => {
      pointerEvent.current = e;
   }, []);

   return {
      onPointerEnter,
      onPointerLeave,
      onPointerMove,
   };
};
