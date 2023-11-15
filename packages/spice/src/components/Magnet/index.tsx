import { useCallback, useMemo, useRef } from "react";
import { useAnimationFrame } from "../../hooks/useAnimationFrame";
import s from "./spice.module.scss";

type CallbackProps = {
   target: Element;
   children: Element;
   x: number;
   y: number;
};
type MouseEvent = React.MouseEvent<HTMLDivElement>;
type MagnetProps = {
   /** you can custom FPS , default:60 */
   fps?: number;
   className?: string;
   children: React.ReactNode;
   /** onMove,onLeave */
   callback: {
      onMove: (props: CallbackProps) => void;
      onLeave?: (props: CallbackProps) => void;
   };
   /** if true , set "pointer-events: none;" to children , default:false */
   stopPropagation?: boolean;
   /** if true , reset on click , default:false */
   isOnClickReset?: boolean;
   dependencies?: any[];
};

export const Magnet = ({
   className,
   children,
   callback,
   fps = 60,
   stopPropagation = false,
   isOnClickReset = false,
   dependencies = [],
}: MagnetProps) => {
   const ref = useRef<HTMLDivElement>(null);
   const childrenRef = useRef<HTMLDivElement>(null);
   const wrapperRect = useRef<DOMRect>();

   if (fps > 60) {
      fps = 60;
   }
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
      (e: MouseEvent) => {
         payload.target = ref.current!;
         payload.children = childrenRef.current!;
      },
      [payload]
   );

   const update = useCallback(
      (e: MouseEvent) => {
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
      (e: MouseEvent) => {
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
      (e: MouseEvent) => {
         e.stopPropagation();
         update(e);
      },
      [update]
   );

   const reset = useCallback(
      (e: MouseEvent) => {
         e.stopPropagation();
         rAF("pause");
         callback.onLeave && callback.onLeave(payload);
      },
      [rAF, callback, payload]
   );
   const mouseLeaveHandler = useCallback(
      (e: MouseEvent) => {
         reset(e);
      },
      [reset]
   );
   const onClickReset = useCallback(
      (e: MouseEvent) => {
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
