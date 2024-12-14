"use client";

import { useCallback, useRef, useState } from "react";
import { useFrame } from "../useFrame";

export const useOnHovering = (
   onHovering: React.PointerEventHandler
): {
   onPointerEnter: React.PointerEventHandler;
   onPointerLeave: React.PointerEventHandler;
   onPointerMove: React.PointerEventHandler;
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
   const onPointerMove = useCallback(
      (e: React.PointerEvent) => {
         if (!isHovering) setIsHovering(true);
         pointerEvent.current = e;
      },
      [isHovering]
   );

   return {
      onPointerEnter,
      onPointerLeave,
      onPointerMove,
   };
};
