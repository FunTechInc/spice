import { useRef } from "react";
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
      move: (props: TCallbackProps) => void;
      leave?: (props: TCallbackProps) => void;
   };
   stopPropagation?: boolean;
   isOnClickReset?: boolean;
}

/**
 * @param callback move,leave
 * @param stopPropagation if true , set "pointer-events: none;" to children
 * @param isOnClickReset if true , reset on click
 */
export const Magnet = ({
   className,
   children,
   callback,
   fps = 60,
   stopPropagation = false,
   isOnClickReset = false,
}: IMagnet) => {
   const ref = useRef<HTMLDivElement>(null);
   const childrenRef = useRef<HTMLDivElement>(null);
   const wrapperRect = useRef<DOMRect>();
   const rAF = useAnimationFrame(fps);
   const payload: TCallbackProps = {
      target: ref.current!,
      children: childrenRef.current!,
      x: 0,
      y: 0,
   };
   const setUpPayload = (e: TMouseEvent) => {
      payload.target = ref.current!;
      payload.children = childrenRef.current!;
   };
   const updatePayload = (e: TMouseEvent) => {
      wrapperRect.current = e.currentTarget.getBoundingClientRect();
      payload.x =
         e.clientX - wrapperRect.current.left - wrapperRect.current.width / 2;
      payload.y =
         e.clientY - wrapperRect.current.top - wrapperRect.current.height / 2;
   };
   const mouseEnterHandler = (e: TMouseEvent) => {
      e.stopPropagation();
      setUpPayload(e);
      updatePayload(e);
      rAF("play", () => {
         callback.move(payload);
      });
   };
   const mouseMoveHandler = (e: TMouseEvent) => {
      e.stopPropagation();
      updatePayload(e);
   };
   /********************
	reset
	********************/
   const resetEvent = (e: TMouseEvent) => {
      e.stopPropagation();
      rAF("pause");
      callback.leave && callback.leave(payload);
   };
   const mouseLeaveHandler = (e: TMouseEvent) => {
      resetEvent(e);
   };
   const onClickReset = (e: TMouseEvent) => {
      if (!isOnClickReset) {
         return;
      }
      resetEvent(e);
   };
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
