"use client";

import { useRef, useEffect, useCallback, forwardRef } from "react";
import { promiseMaker } from "../../utils/promiseMaker";
import { toggleScroll } from "./utils/toggleScroll";

export type ModalButtonProps = {
   dialog: React.DialogHTMLAttributes<HTMLDialogElement>;
   /** set focus to `focusTarget` when the modal is opened */
   focusTarget?: React.RefObject<HTMLElement>;
   onOpen?: (dialog: Element) => void;
   onClose?: (dialog: Element) => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const CLOSE_BUTTON = ".spice__modal_close";

export const ModalButton = forwardRef<HTMLButtonElement, ModalButtonProps>(
   ({ children, dialog, onOpen, onClose, focusTarget, ...rest }, ref) => {
      const {
         children: dialogChildren,
         style: dialogStyle,
         ...dialogProps
      } = dialog;

      const dialogRef = useRef<HTMLDialogElement>(null);

      const showModal = useCallback(() => {
         toggleScroll("add");
         dialogRef.current!.showModal();
         focusTarget?.current?.focus();
         onOpen && onOpen(dialogRef.current!);
      }, [onOpen, focusTarget]);

      const closeModal = useCallback(async () => {
         onClose && (await promiseMaker(onClose(dialogRef.current!)));
         toggleScroll("remove");
         dialogRef.current!.close();
      }, [onClose]);

      useEffect(() => {
         const closeBtn = dialogRef.current!.querySelectorAll(CLOSE_BUTTON);
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
            const isOpen = dialogRef.current?.hasAttribute("open");
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
               ref={ref}
               onClick={() => {
                  showModal();
               }}
               {...rest}>
               {children}
            </button>
            <dialog
               ref={dialogRef}
               onClick={(e: React.MouseEvent<HTMLDialogElement>) => {
                  if (e.target === dialogRef.current) {
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
   }
);

ModalButton.displayName = "ModalButton";
