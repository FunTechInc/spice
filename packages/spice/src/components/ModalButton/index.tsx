"use client";

import { useRef, useEffect, useCallback } from "react";
import { promiseMaker } from "../../utils/promiseMaker";
import { toggleScroll } from "./utils/toggleScroll";

export type ModalButtonProps = {
   dialog: React.DialogHTMLAttributes<HTMLDialogElement>;
   /** onOpen,onClose */
   callback?: {
      onOpen?: (dialog: Element) => void;
      onClose?: (dialog: Element) => void;
   };
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const CLOSE_BUTTON = ".spice__modal_close";

export const ModalButton = ({
   children,
   dialog,
   callback,
   ...rest
}: ModalButtonProps) => {
   const {
      children: dialogChildren,
      style: dialogStyle,
      ...dialogProps
   } = dialog;

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
      window.addEventListener("keydown", keyDownHandler);
      return () => {
         window.removeEventListener("keydown", keyDownHandler);
      };
   }, [closeModal]);

   return (
      <>
         <button
            onClick={() => {
               showModal();
            }}
            {...rest}>
            {children}
         </button>
         <dialog
            ref={ref}
            onClick={(e: React.MouseEvent<HTMLDialogElement>) => {
               if (e.target === ref.current) {
                  closeModal();
               }
            }}
            style={{
               border: "none",
               background: "none",
               maxWidth: "100%",
               maxHeight: "100%",
               width: "100%",
               height: "100%",
               padding: "0",
               pointerEvents: "auto",
               ...(dialogStyle || {}),
            }}
            {...dialogProps}>
            {dialogChildren}
         </dialog>
      </>
   );
};
