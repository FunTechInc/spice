import { useCallback, useMemo, useRef } from "react";
import { useAnimationFrame } from "../../hooks/useAnimationFrame";
import s from "./spice.module.scss";

type TCallbackProps = {
   target: Element;
   children: Element;
   x: number;
   y: number;
};
type TMouseEvent = React.MouseEvent<HTMLDivElement>;
interface IMagnet {
   fps?: number;
   className?: string;
   children: React.ReactNode;
   callback: {
      onMove: (props: TCallbackProps) => void;
      onLeave?: (props: TCallbackProps) => void;
   };
   stopPropagation?: boolean;
   isOnClickReset?: boolean;
   dependencies?: any[];
}

/**
 * @param callback onMove,onLeave
 * @param stopPropagation if true , set "pointer-events: none;" to children
 * @param isOnClickReset if true , reset on click
 * @param fps you can custom FPS
 * @param dependencies dependencies = any[]
 */
export const Magnet = ({
   className,
   children,
   callback,
   fps = 60,
   stopPropagation = false,
   isOnClickReset = false,
   dependencies = [],
}: IMagnet) => {
   const ref = useRef<HTMLDivElement>(null);
   const childrenRef = useRef<HTMLDivElement>(null);
   const wrapperRect = useRef<DOMRect>();
   const rAF = useAnimationFrame(fps, dependencies);

   const payload = useMemo(
      () => ({
         target: ref.current!,
         children: childrenRef.current!,
         x: 0,
         y: 0,
      }),
      []
   );

   const setUp = useCallback(
      (e: TMouseEvent) => {
         payload.target = ref.current!;
         payload.children = childrenRef.current!;
      },
      [payload]
   );

   const update = useCallback(
      (e: TMouseEvent) => {
         wrapperRect.current = e.currentTarget.getBoundingClientRect();
         payload.x =
            e.clientX -
            wrapperRect.current.left -
            wrapperRect.current.width / 2;
         payload.y =
            e.clientY -
            wrapperRect.current.top -
            wrapperRect.current.height / 2;
      },
      [payload]
   );

   const mouseEnterHandler = useCallback(
      (e: TMouseEvent) => {
         e.stopPropagation();
         setUp(e);
         update(e);
         rAF("play", () => {
            callback.onMove(payload);
         });
      },
      [setUp, update, rAF, callback, payload]
   );
   const mouseMoveHandler = useCallback(
      (e: TMouseEvent) => {
         e.stopPropagation();
         update(e);
      },
      [update]
   );

   // reset
   const reset = useCallback(
      (e: TMouseEvent) => {
         e.stopPropagation();
         rAF("pause");
         callback.onLeave && callback.onLeave(payload);
      },
      [rAF, callback, payload]
   );
   const mouseLeaveHandler = useCallback(
      (e: TMouseEvent) => {
         reset(e);
      },
      [reset]
   );
   const onClickReset = useCallback(
      (e: TMouseEvent) => {
         if (!isOnClickReset) {
            return;
         }
         reset(e);
      },
      [reset, isOnClickReset]
   );

   return (
      <div
         onMouseEnter={mouseEnterHandler}
         onMouseMove={mouseMoveHandler}
         onMouseLeave={mouseLeaveHandler}
         onClick={onClickReset}
         className={className ? className : ""}
         ref={ref}>
         <div
            ref={childrenRef}
            className={stopPropagation ? s.spice_magnet_stopPropagation : ""}>
            {children}
         </div>
      </div>
   );
};
