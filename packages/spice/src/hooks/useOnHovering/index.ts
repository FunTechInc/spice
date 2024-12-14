"use client";

import { useCallback, useRef, useState } from "react";
import { useFrame } from "../useFrame";

export const useOnHovering = (
   onHovering: React.PointerEventHandler,
   onStart?: React.PointerEventHandler
): {
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

   const onPointerLeave = useCallback(() => {
      pointerEvent.current = undefined;
      setIsHovering(false);
   }, []);
   const onPointerMove = useCallback(
      (e: React.PointerEvent) => {
         if (!isHovering) {
            setIsHovering(true);
            onStart?.(e);
         }
         pointerEvent.current = e;
      },
      [isHovering, onStart]
   );

   return {
      onPointerLeave,
      onPointerMove,
   };
};
