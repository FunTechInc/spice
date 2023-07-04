import { useRef } from "react";
import { useIsomorphicLayoutEffect } from "../../hooks/useIsomorphicLayoutEffect";
import { promiseMaker } from "../../utils/promiseMaker";
import { toggleScroll } from "./utils/toggleScroll";
import s from "./spice.module.scss";

interface IModal {
   className?: string;
   children: React.ReactNode;
   dialog: {
      children: React.ReactNode;
      className?: string;
   };
   callback?: {
      open?: (target: Element) => void;
      close?: (target: Element) => void;
   };
}

export const Modal = ({ children, className, dialog, callback }: IModal) => {
   const ref = useRef<HTMLDialogElement>(null);
   /*===============================================
	show & close
	===============================================*/
   const showModal = () => {
      toggleScroll("add");
      ref.current!.showModal();
      // Execute at the very end to get scrollTop
      callback?.open && callback.open(ref.current!);
   };
   const closeModal = async () => {
      callback?.close && (await promiseMaker(callback.close(ref.current!)));
      toggleScroll("remove");
      ref.current!.close();
   };

   /*===============================================
	click close button(.spice__modal_close)
	===============================================*/
   useIsomorphicLayoutEffect(() => {
      const closeBtn = ref.current!.querySelectorAll(".spice__modal_close");
      if (!closeBtn) {
         return;
      }
      closeBtn.forEach((element) => {
         element.addEventListener("click", () => {
            closeModal();
         });
      });
   }, []);

   return (
      <>
         <button
            className={className ? className : ""}
            onClick={() => {
               showModal();
            }}>
            {children}
         </button>
         <dialog
            ref={ref}
            onClick={(e: React.MouseEvent<HTMLDialogElement>) => {
               if (e.target === ref.current) {
                  closeModal();
               }
            }}
            className={`${s.spice_modal_dialog} ${
               dialog.className ? dialog.className : ""
            }`}>
            {dialog.children}
         </dialog>
      </>
   );
};
