import { useRef, useEffect, useCallback } from "react";
import { promiseMaker } from "../../utils/promiseMaker";
import { toggleScroll } from "./utils/toggleScroll";
import s from "./spice.module.scss";

type ModalProps = {
   className?: string;
   children: React.ReactNode;
   dialog: {
      children: React.ReactNode;
      className?: string;
   };
   /** onOpen,onClose */
   callback?: {
      onOpen?: (target: Element) => void;
      onClose?: (target: Element) => void;
   };
};

const CLOSE_BUTTON = ".spice__modal_close";

export const Modal = ({
   children,
   className,
   dialog,
   callback,
}: ModalProps) => {
   const ref = useRef<HTMLDialogElement>(null);

   const showModal = useCallback(() => {
      toggleScroll("add");
      ref.current!.showModal();
      callback?.onOpen && callback.onOpen(ref.current!);
   }, [callback]);

   const closeModal = useCallback(async () => {
      callback?.onClose && (await promiseMaker(callback.onClose(ref.current!)));
      toggleScroll("remove");
      ref.current!.close();
   }, [callback]);

   useEffect(() => {
      const closeBtn = ref.current!.querySelectorAll(CLOSE_BUTTON);
      if (!closeBtn) {
         return;
      }
      closeBtn.forEach((element) =>
         element.addEventListener("click", closeModal)
      );
      return () => {
         closeBtn.forEach((element) =>
            element.removeEventListener("click", closeModal)
         );
      };
   }, [closeModal]);

   useEffect(() => {
      const keyDownHandler = (event: globalThis.KeyboardEvent) => {
         const isOpen = ref.current?.hasAttribute("open");
         if (isOpen && event.key === "Escape") {
            closeModal();
         }
      };
      document.addEventListener("keydown", keyDownHandler);
      return () => {
         document.removeEventListener("keydown", keyDownHandler);
      };
   }, [closeModal]);

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
