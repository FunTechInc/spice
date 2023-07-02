import { useRef } from "react";
import { useAnimationFrame } from "../../hooks/useAnimationFrame";

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
}

export const Magnet = ({
   className,
   children,
   callback,
   fps = 60,
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
      wrapperRect.current = e.currentTarget.getBoundingClientRect();
      payload.target = ref.current!;
      payload.children = childrenRef.current!;
   };
   const updatePayload = (e: TMouseEvent) => {
      if (!wrapperRect.current) {
         return;
      }
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
   const mouseLeaveHandler = (e: TMouseEvent) => {
      e.stopPropagation();
      rAF("pause");
      callback.leave && callback.leave(payload);
   };
   return (
      <div
         onMouseEnter={mouseEnterHandler}
         onMouseMove={mouseMoveHandler}
         onMouseLeave={mouseLeaveHandler}
         className={className ? className : ""}
         ref={ref}>
         <div ref={childrenRef}>{children}</div>
      </div>
   );
};
