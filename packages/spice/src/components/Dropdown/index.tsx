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
      onEnter?: (target: Element) => void;
      onLeave?: (target: Element) => void;
   };
   className?: string;
}

/** 
 * @param position | "bottom-left"
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
      | "top-right"
	@param callback onEnter,onLeave
 */
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
   const openHandler = () => {
      isMouseOn.current = true;
      setPointerPrevent(false);
      setIsView(true);
      if (callback?.onEnter) {
         callback.onEnter(ref.current!);
      }
   };
   const closeHandler = async () => {
      isMouseOn.current = false;
      setPointerPrevent(true);
      if (callback?.onLeave) {
         await promiseMaker(callback.onLeave(ref.current!));
      }
      if (!isMouseOn.current) {
         setIsView(false);
      }
   };
   return (
      <div
         onMouseEnter={openHandler}
         onMouseLeave={closeHandler}
         onClick={closeHandler}
         className={`${s.spice_dropdown_wrapper} ${
            className ? className : ""
         }`}>
         {parent.children}
         <div
            ref={ref}
            className={`${s.spice_dropdown_content} ${
               isView ? "" : s.spice_dropdown_content_hidden
            } ${
               isPointerPrevent ? s.spice_dropdown_content_pointerPrevent : ""
            } ${s[`spice_dropdown_` + position]}`}>
            {content.children}
         </div>
      </div>
   );
};
