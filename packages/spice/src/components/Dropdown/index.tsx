import { useRef, useState } from "react";
import { promiseMaker } from "../../utils/promiseMaker";
import s from "./spice.module.scss";

interface IDropdown {
   position:
      | "bottom-left"
      | "bottom-center"
      | "bottom-right"
      | "left-top"
      | "left-center"
      | "left-bottom"
      | "right-top"
      | "right-center"
      | "right-bottom"
      | "top-left"
      | "top-center"
      | "top-right";
   parent: {
      children: React.ReactNode;
   };
   content: {
      children: React.ReactNode;
   };
   callback?: {
      enter?: (target: Element) => void;
      leave?: (target: Element) => void;
   };
   className?: string;
}

export const Dropdown = ({
   position,
   parent,
   content,
   callback,
   className,
}: IDropdown) => {
   const ref = useRef(null);
   const isMouseOn = useRef(false);
   const [isView, setIsView] = useState(false);
   const [isPointerPrevent, setPointerPrevent] = useState(true);
   return (
      <div
         onMouseEnter={() => {
            isMouseOn.current = true;
            setPointerPrevent(false);
            setIsView(true);
            if (callback?.enter) {
               callback.enter(ref.current!);
            }
         }}
         onMouseLeave={async () => {
            isMouseOn.current = false;
            setPointerPrevent(true);
            if (callback?.leave) {
               await promiseMaker(callback.leave(ref.current!));
            }
            if (!isMouseOn.current) {
               setIsView(false);
            }
         }}
         className={`${s._dropdown_wrapper} ${className ? className : ""}`}>
         {parent.children}
         <div
            ref={ref}
            className={`${s._dropdown_content} ${
               isView ? "" : s._dropdown_content_hidden
            } ${isPointerPrevent ? s._dropdown_content_pointerPrevent : ""} ${
               s[`_dropdown_` + position]
            }`}>
            {content.children}
         </div>
      </div>
   );
};
